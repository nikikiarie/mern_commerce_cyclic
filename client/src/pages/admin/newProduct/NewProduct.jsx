import React, { useState } from "react";
import { storage } from "../../../firebaseConfig";
import {
 
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  Button,
  Container,
  Form,
  ImageInput,
  Input,
  InputContainer,
  Label,
 
  Title,
} from "./newProduct_styles";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../redux/apiCalls";
// import { stateIsLoading } from "../../redux/productSlice";
import { toast } from "react-toastify";

const NewProduct = () => {
  const token = useSelector((state) => state.user?.user?.accessToken);
  const isLoading = useSelector((state) => state.products?.isFetching);
  console.log(isLoading);

  const [file, setFile] = useState(null);

  const [desc, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const [info, setInfo] = useState({});
  console.log(info.size);

  const handleClick = (e) => {
    e.preventDefault();
    if(!file) return toast.info('Image Required',{position:"top-right"})
    const storageRef = ref(storage, file.name);
    console.log(storageRef);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error)
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          const product = {
            title: name,
            desc: desc,
            price: price,
            img: downloadURL,
            categories: info.categories,
            size: info.size,
            color: info.color,
          };
          addProduct(dispatch,product,token);
          console.log(product);
        });
      }
    );
  };

  const handleSize = (e) => {
    setInfo((info) => {
      return {
        ...info,
        [e.target.name]: e.target.value.split(","),
      };
    });
  };
  return (
    <Container>
      <Title>New Product</Title>
      <Form>
        <InputContainer>
        
          <Label>Image</Label>

          <ImageInput
            required

            type="file"
            onChange={(e) => setFile(e.target.files[0]) }

          />
          
        </InputContainer>
        <InputContainer>
          <Label>Name</Label>
          <Input
            placeholder="Apple Airpods"
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Label>Description</Label>
          <Input
            placeholder=""
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <Label>Size</Label>
          <Input
            placeholder="e.g 40,41,42"
            name="size"
            onChange={(e) => handleSize(e)}
          />
        </InputContainer>
        <InputContainer>
          <Label>Color</Label>
          <Input
            placeholder="e.g red,yellow,blue"
            name="color"
            onChange={(e) => handleSize(e)}
          />
        </InputContainer>
        <InputContainer>
          <Label>Category</Label>
          <Input
            placeholder="e.g jeans,shirt,dress"
            name="categories"
            onChange={(e) => handleSize(e)}
          />
        </InputContainer>
        <InputContainer>
          <Label>Price</Label>
          <Input
            placeholder="e.g 2400"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </InputContainer>

        <Button onClick={(e) => handleClick(e)} disabled={isLoading}>Create</Button>
      </Form>
    </Container>
  );
};

export default NewProduct;

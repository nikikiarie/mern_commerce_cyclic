import React, { useEffect, useState } from "react";
import axios from  'axios';
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
// import { publicRequest } from "../makeRequest";

const Product = () => {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [singleProduct, setSingleProduct] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(quantity);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...singleProduct, size, color, quantity }));
  };

  const handleAmount = (type) => {
    if (type === "desc") {
      quantity > 1 && setQuantity((prev) => prev - 1);
    } else {
      setQuantity((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/find/${id}`);
        setSingleProduct(res.data);
      } catch {}
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Left>
          <Img src={singleProduct?.img} />
        </Left>
        <Right>
          <Title>{singleProduct?.title}</Title>
          <Desc>{singleProduct?.desc}</Desc>
          <Price>{singleProduct.price}</Price>
          <Filter>
            <ColorContainer>
              <Text>Color:</Text>
              {singleProduct.color?.map((c) => {
                return <Color key={c} color={c} onClick={() => setColor(c)} />;
              })}
            </ColorContainer>
            <Size>
              <Text>Size:</Text>
              <Select onChange={(e) => setSize(e.target.value)}>
                {singleProduct.size?.map((s) => {
                  return <Option key={s}> {s}</Option>;
                })}
              </Select>
            </Size>
          </Filter>
          <Filter>
            <AmountContainer>
              <RemoveIcon onClick={() => handleAmount("desc")} />
              <Amount>{quantity}</Amount>
              <AddIcon onClick={() => handleAmount("inc")} />
            </AmountContainer>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </Filter>
        </Right>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  // align-items:center;
  flex-direction:column;
  padding: 50px;

  @media only screen and (min-width: 640px) {
  flex-direction:row;
   align-items:center;

   
        
      }
`;

const Left = styled.div`
  // flex: 1;
  max-width:500px;
  height:300px;
  @media only screen and (min-width: 640px) {
    flex: 1;
    height:80vh;
     
          
        }
`;

const Img = styled.img`
  width: 100%;
  height:100%;
  // height: 90vh;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  margin-top:20px;
  // padding: 0px 50px;

  @media only screen and (min-width: 640px) {
    padding: 0px 50px;
     
          
        }
`;

const Title = styled.h1`
  font-weight: 300;
  // text-align:center;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`;

const Filter = styled.div`
  display: flex;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0px;
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 200;
`;

const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const Size = styled.div`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  margin-left: 5px;
  padding: 5px;
`;

const Option = styled.option``;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Amount = styled.span`
  border: 1px solid teal;
  border-radius: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  background-color: white;
  border: 2px solid teal;
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
`;

export default Product;

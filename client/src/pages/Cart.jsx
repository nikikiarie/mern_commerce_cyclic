import React from "react";
import axios from  'axios';

import styled from "styled-components";
import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";

import { decreaseProductAmount, increaseProductAmount } from "../redux/cartSlice";
import {useDispatch} from 'react-redux'
import { publicRequest } from "../makeRequest";
import { useLocation, useNavigate } from "react-router-dom";






const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate()
  console.log(cart);
  const user = useSelector((state) => state.user?.user);
  const token = useSelector((state) => state.user?.user?.accessToken);
  const location = useLocation()
  
  

  const dispatch = useDispatch()

  const handleClick = () => {
   
    const paymentCheckout = async () => {
      try {
        const res = await axios.post(
          "/api/checkout/payment",
          {
            cartItems: cart.products,
            userId: user._id,
          },
          { headers: { token: `Bearer ${token}` } }
        );
        console.log(res.data);
        if(res.data.url){
          window.location.href = res.data.url
        }
      } catch (err) {
        console.log(err);
      }
    };
    user? paymentCheckout() : navigate('/login',{state:location})
  };
  return (
    <div>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Button direction="left" onClick={()=>navigate (-1)}>CONTINUE SHOPPING</Button>

          <Middle>
            <Text>Shopping Bag ({cart.quantity})</Text>
            <Text>Your Wishlist(0)</Text>
          </Middle>
          <Button direction="right">CONTINUE SHOPPING</Button>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((item) => {
              console.log(item);
              return (
                <>
                  <Product>
                    <ProductDetails>
                      <ProductImg
                        src={
                          item?.img ||
                          "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                        }
                      />
                      <ProductDetail>
                        <ProductName>
                          <b>Product: </b>
                          {item?.title}
                        </ProductName>
                        <ProductId>
                          <b>ID: </b>
                          {item?._id}
                        </ProductId>
                        <ProductColor color={item?.color} />
                        <ProductSize>
                          <b>Size: </b> {item?.size}
                        </ProductSize>
                      </ProductDetail>
                    </ProductDetails>
                    <PriceDetails>
                      <ProductQuantity>
                        <RemoveIcon onClick={()=>dispatch(decreaseProductAmount({...item}))}/>
                        <ProductAmount>{item?.quantity}</ProductAmount>
                        <AddIcon onClick={()=>dispatch(increaseProductAmount({...item}))}/>
                      </ProductQuantity>
                      <ProductPrice>{item?.price * item?.quantity}</ProductPrice>
                    </PriceDetails>
                  </Product>
                  <Hr />
                </>
              );
            })}
          </Info>
          <Summary>
            <OrderTitle>ORDER SUMMARY</OrderTitle>
            <OrderItem>
              <OrderItemText>Subtotal</OrderItemText>
              <OrderItemText>$ {cart.amount}</OrderItemText>
            </OrderItem>
            <OrderItem>
              <OrderItemText>Estimated Summary</OrderItemText>
              <OrderItemText>$ 5.90</OrderItemText>
            </OrderItem>
            <OrderItem>
              <OrderItemText>Shipping Discount</OrderItemText>
              <OrderItemText>$ -5.90</OrderItemText>
            </OrderItem>
            <OrderItem type="total">
              <OrderItemText>Total</OrderItemText>
              <OrderItemText>$ {cart.amount}</OrderItemText>
            </OrderItem>

            <OrderButton onClick={()=>handleClick()}>CHECKOUT NOW</OrderButton>
          </Summary>
        </Bottom>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  font-size: 25px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin: 15px 0px;
`;

const Button = styled.button`

  background-color: ${(props) =>
    props.direction === "left" ? "white" : "black"};
  color: ${(props) => (props.direction === "left" ? "black" : "white")};
  border: ${(props) => props.direction === "left" && "2px solid black"};
  padding: 10px;
  font-size: 15px;
  font-weight: 500;
`;

const Middle = styled.div`
display:none;

@media only screen and (min-width: 768px) {
  display:flex;
    
        
      }

`;

const Text = styled.span`
  margin: 5px;
  text-decoration: underline;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
      
          
        }
`;

const Info = styled.div`
width:100%;
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;


  @media only screen and (min-width: 768px) {
  flex: 2;
    
      
          
        }
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:20px;

  @media only screen and (min-width: 768px) {
  margin-top:20px;
    
  
     
        
          
              
            }
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  flex-direction:column;
  gap:20px;

  @media only screen and (min-width: 768px) {
  flex-direction:row;
  gap:0px;

   
      
        
            
          }
`;

const ProductImg = styled.img`
  width: 200px;
  height:200px
`;

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;

 
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const ProductSize = styled.span``;

const PriceDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  
`;

const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const ProductAmount = styled.span`
  border: 1px solid teal;
  padding: 10px;
  border-radius: 10px;
  margin: 0 5px;
`;

const ProductPrice = styled.span`
  font-size: 25px;
  font-weight: 300;
`;

const Hr = styled.hr``;
const Summary = styled.div`
  flex: 1;
  height: 60vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top:30px;

  @media only screen and (min-width: 768px) {
  margin-top:0px;
    
  
     
        
          
              
            }

`;
const OrderTitle = styled.span`
  font-size: 30px;
  margin-bottom: 50px;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => (props.type === "total" ? "40px" : "20px")};
  font-size: ${(props) => (props.type === "total" ? "30px" : "18px")};
`;
const OrderItemText = styled.span``;

const OrderButton = styled.button`
  background-color: black;
  color: white;
  padding: 15px 0px;
`;
export default Cart;

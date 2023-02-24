import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import {sliderItems} from '../data'

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex <= 0 ? 2 : slideIndex - 1);
    } else {
      setSlideIndex(slideIndex >= 2 ? 0 : slideIndex + 1);
    }
  };

  return (
    <Container>
      <ArrowContainer direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewOutlinedIcon />
      </ArrowContainer>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>
        <Slider key={item.id} item={item}>
          <ImageContainer>
            <Img src={item.img} />
          </ImageContainer>
          <InfoContainer>
            <Title>LOUNGEWEAR LOVE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET 30% OFF FOR NEW ARRIVALS{" "}
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slider>
        )}
      </Wrapper>
      <ArrowContainer direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlinedIcon />
      </ArrowContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;
`;

const ArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff1f1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && `10px`};
  right: ${(props) => props.direction === "right" && `10px`};
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
  z-index:2;
  opacity:0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slider = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props)=>props.item.bg};
`;

const ImageContainer = styled.div`
height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
 padding:50px;
`;

const Title = styled.h1`
font-size:48px;`;

const Desc = styled.p`
margin:30px 0px;
letter-spacing:3px;`

const Button = styled.button`
padding:15px;
background:transparent;`;

export default Hero;

import React from 'react'
import styled from 'styled-components'

const Announcement = () => {
  return (
    <Container><Title>Super Deal.Free Shipping on Orders Over $50</Title></Container>
  )
}

const Container = styled.div`
height:30px;
text-align: center;
background-color: teal;

`
const Title = styled.div`
   padding:5px; 
   color:white;
   font-size: 14px;
   font-weight: 500;


   @media only screen and (min-width: 620px) {
   font-size: 16px;
    
      
   }  

`

export default Announcement
import React from 'react'
import { Link } from 'react-router-dom'
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
   font-size: 16px;
   font-weight: 500;
`

export default Announcement
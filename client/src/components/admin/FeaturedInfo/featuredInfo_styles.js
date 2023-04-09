import styled from "styled-components";


export const Container  = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap:20px;
margin-bottom: 30px;

`
export const FeaturedItem  = styled.div`
flex:1;
border-radius: 10px;
padding:20px;
box-shadow: 0px 0px 14px 1px rgba(0,0,0,0.58);
-webkit-box-shadow: 0px 0px 14px 1px rgba(0,0,0,0.58);
-moz-box-shadow: 0px 0px 14px 1px rgba(0,0,0,0.58);
`
export const Title  = styled.h2`
font-size: 22px;
font-weight: 500;
margin-bottom: 20px;
`
export const FeaturedItemDiv  = styled.div`
display: flex;
margin-bottom: 20px;
align-items: center;

`
export const Text = styled.h2`
margin-right: 20px;
font-size: 24px;
font-weight: 600;
`
export const Svg = styled.div`
color:${(props)=>props.negative ? "red" : "green"}
`

export const TextSoft  = styled.span`
margin-right: 10px;

`
export const ItemText  = styled.span`
font-size: 14px;
font-weight: 300;
color: gray;
`
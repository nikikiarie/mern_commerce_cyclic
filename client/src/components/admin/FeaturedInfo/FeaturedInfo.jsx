import { ArrowDownwardOutlined, ArrowUpwardOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import axios from  'axios';
import { useSelector } from "react-redux";
import {
  Container,
  FeaturedItem,
  FeaturedItemDiv,
  ItemText,
  Svg,
  Text,
  TextSoft,
  Title,
} from "./featuredInfo_styles";
// import { publicRequest } from "../../../makeRequest";

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  const token = useSelector((state) => state.user?.user?.accessToken);
 
  console.log(income)
  console.log(perc)


  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await axios.get("/api/orders/income", {
          headers: { token: `Bearer ${token}` },
        });
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (error) {}
    };
    fetchInfo()
  }, [token]);
  return (
    <Container>
      <FeaturedItem>
        <Title>Revenue</Title>
        <FeaturedItemDiv>
          <Text>{income[1]?.total}</Text>
          <TextSoft>{Math.floor(perc)} %</TextSoft>
          {perc < 0 ? (
              <ArrowDownwardOutlined style={{color:"red"}} className="featuredIcon negative" />
            ) : (
              <ArrowUpwardOutlined style={{color:"green"}} className="featuredIcon" />
            )}
        </FeaturedItemDiv>
        <ItemText>Compared to last month</ItemText>
      </FeaturedItem>
      <FeaturedItem>
        <Title>Sales</Title>
        <FeaturedItemDiv>
          <Text>$1,500</Text>
          <TextSoft>+20 %</TextSoft>
          <Svg>
          <ArrowUpwardOutlined />

          </Svg>
        </FeaturedItemDiv>
        <ItemText>Compared to last month</ItemText>
      </FeaturedItem>
      <FeaturedItem>
        <Title>Cost</Title>
        <FeaturedItemDiv>
          <Text>8000</Text>
          <TextSoft>-15 %</TextSoft>
          
          <ArrowDownwardOutlined  style={{color:"red"}}/>

          
        </FeaturedItemDiv>
        <ItemText>Compared to last month</ItemText>
      </FeaturedItem>
    </Container>
  );
};

export default FeaturedInfo;

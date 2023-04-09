import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { Container, Title } from "./chart_styles";

const Chart = ({ data, dataKey, title, grid }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />

          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
          <Tooltip />

          {grid && <CartesianGrid strokeDasharray="5 5" />}

        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;

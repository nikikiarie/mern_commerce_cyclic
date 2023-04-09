import React, { useEffect, useMemo, useState } from "react";
import axios from  'axios';
import Chart from "../../../components/admin/Chart/Chart";
import FeaturedInfo from "../../../components/admin/FeaturedInfo/FeaturedInfo";
import { Bottom, Container } from "./home_styles";
import Transactions from "../../../components/admin/Transactions/Transactions";
import Members from "../../../components/admin/Members/Members";
// import { publicRequest } from "../../../makeRequest";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const token = useSelector((state) => state.user?.user?.accessToken);
  console.log(token)
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/api/users/stats", {
          headers: { token: `Bearer ${token}` },
        });

        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };

    getStats();
  }, [MONTHS, token]);

  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <Bottom>
        <Members />
        <Transactions />
      </Bottom>
    </Container>
  );
};

export default AdminHome;

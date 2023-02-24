import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  ;
  return (
    <div>
      Success
      <button onClick={()=>navigate('/')}>Continue Shopping</button>
    </div>
  );
};

export default Success;

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Verify = () => {
    const params = useParams()
    console.log(params);
    const [data,setData] = useState(null)
    
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const res = await axios.get(`/api/users/${params.id}/verify/${params.token}`);
          setData(res.data);
        } catch {}
      };
      fetchProduct();
    }, [params.id,params.token]);
  return (
    <>
    <div>Verified.</div>
    {data && <span> Welcome {data.firstname}</span>}
    <Link to={'/login'}>
    <button>LOG IN</button>
    </Link>
    </>
  )
}

export default Verify
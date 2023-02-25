import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';

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
    <Announcement/>
      <NavBar />
      <div style={{display:"flex",alignItems:"center",justifyContent:'center',height:200}}>
    <h3>Verified.</h3>
    {data && <h4  style={{marginBottom:20}}> Welcome {data.username}</h4>}
    <br/>
    <Link to={'/login'}>
    <button>LOG IN</button>
    </Link>
    </div>
    </>
  )
}

export default Verify
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Verify = () => {
    const params = useParams()
    console.log(params);
  return (
    <>
    <div>Verified</div>s
    <Link to={'/login'}>
    <button>LOG IN</button>
    </Link>
    </>
  )
}

export default Verify
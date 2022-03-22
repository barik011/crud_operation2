import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const View = () => {
  const {id} =useParams();
  const [user,setUser]=useState({
    name:'',
    email:'',
    phone:''
  })
  useEffect(()=>{
    loadUser();
  },[])
  const loadUser = async() => {
  await axios.get(`http://localhost:3002/users/${id}`)
  .then((response)=>{
    setUser(response.data);
    console.log(response.data);
  })
  .catch((error)=>{
    console.log(error);
  })
}
  return (
    <>
    <div className='container table-responsive'>
    <table className='table table-bordered border-hover border-striped view-table'>
      <tbody>
        <tr>
          <th>Id</th>
          <td>{user.id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{user.name}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{user.email}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>{user.phone}</td>
        </tr>
        
      </tbody>
    </table>
    <Link to='/' className='btn btn-primary'><i class="fas fa-backward"></i></Link>
    </div>
    </>
  )
}

export default View;
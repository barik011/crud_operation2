import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const Edit = () => {
  const {id}=useParams();

  const history = useHistory();

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
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  // const {name,email,phone}=user;
  const onInputHandler = (e) =>{
      setUser({...user,[e.target.name]:e.target.value})
  }
  const updateHandler= (e) =>{
      e.preventDefault();
    axios.put(`http://localhost:3002/users/${id}`,user)
    .then((response)=>{
      history.push('/');
      console.log(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  return (
    <>
    <form className='form__adduser' onSubmit={updateHandler}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter Name" name='name' onChange={e=>onInputHandler(e)} value={user.name} />
                </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter Email" name='email' onChange={e=>onInputHandler(e)} value={user.email} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Phone</label>
                <input type="tel" className="form-control" placeholder="Enter Phone" name='phone' onChange={e=>onInputHandler(e)}  value={user.phone} />
            </div>
            <div className="mb-3">
                <button className='btn btn-primary'>Submit</button>
            </div>
        </form>
    </>
  )
}

export default Edit
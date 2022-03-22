import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Add = () => {

    const history = useHistory();

    const [user,setUser]= useState({
        name:"",
        email:"",
        phone:""
    })

    const inputHandler = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user)
    }

    const addUserHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3002/users',user)
        .then((response)=>{
            console.log(response);
            history.push('/')
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  return (
    <>
        <form className='form__adduser' onSubmit={addUserHandler}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter Name" name='name' onChange={inputHandler}  required/>
                </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter Email"name='email' onChange={inputHandler} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Phone</label>
                <input type="tel" className="form-control" placeholder="Enter Phone" name='phone' onChange={inputHandler}  required/>
            </div>
            <div className="mb-3">
                <button className='btn btn-primary'>Submit</button>
            </div>
        </form>
    </>
  )
}

export default Add
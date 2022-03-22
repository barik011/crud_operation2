import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        loader();
    },[])
const loader = async () => {
    await axios.get('http://localhost:3002/users')
    .then(response => {
        console.log(response.data);
        setUsers(response.data.reverse());
    })
    .catch(error => {
        console.log(error);
    })
}
const deleteHandler = (id) =>{

   axios.delete('http://localhost:3002/users/'+id);
   loader();   
}

  return (
    <>
    <table className='table table-bordered table-striped table-hover' style={{textAlign:'left'}}>
        <thead>
        <tr>
            <th>Sl</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {
        users.map((user,index) => {
        return(<tr>
            <td key={index}>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td className='text-center'><Link to={`users/view/${user.id}`}><i class="fas fa-eye text-success" ></i></Link></td>
            <td className='text-center'><Link to={`users/edit/${user.id}`}><i class="fas fa-edit text-primary" ></i></Link></td>
            <td className='text-center'><Link onClick={()=>deleteHandler(user.id)}><i class="fas fa-trash-alt text-danger" ></i></Link></td>
        </tr>)
        })
        }
        </tbody>
    </table>
    </>
  )
}

export default Home;
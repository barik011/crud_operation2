import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
    <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" exact="true" to="/">CRUD APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse m justify-content-right">
     <Link className='btn btn-success' exact="true" to="/users/add">Add User</Link>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
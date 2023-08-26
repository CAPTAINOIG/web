import React from 'react'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import Middle from './Middle'
import Foot from './Foot'

const Web = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
  <img src={logo} alt="" />
  <div className='float'>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <Link id='home' className="nav-link active" aria-current="page" to="#">Home</Link>
    <Link id='home' className="nav-link" to="#">New</Link>
        <Link id='home' className="nav-link" to="#">Popular</Link>
        <Link id='home' className="nav-link" to="#">Trending</Link>
        <Link id='home' className="nav-link" to="#">Categories</Link>  
        </div>
    </div>
    </div>
    </div>
</nav>

<Middle/>
<Foot/>
  
    </>
  )
}

export default Web
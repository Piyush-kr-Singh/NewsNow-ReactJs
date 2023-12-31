import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Navbar=()=>
{
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to='/'>NewsNow</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/about'>About</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Topics
                  </Link>
                  <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item text-light" to='/Business'>Business</Link></li>
                    <li><Link className="dropdown-item text-light" to='/Entertainment'>Entertainment</Link></li>
                    <li><Link className="dropdown-item text-light" to='/health'>Health</Link></li>
                    <li><Link className="dropdown-item text-light" to='Science'>Science</Link></li>
                    <li><Link className="dropdown-item text-light" to='/Sports'>Sports</Link></li>
                    <li><Link className="dropdown-item text-light" to='/Technology'>Technology</Link></li>
                    <li><hr className="dropdown-divider text-light"/></li>
                    <li><Link className="dropdown-item text-light" to='/'>General</Link></li>
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                </li> */}
              </ul>
              {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
          </div>
        </div>
      </nav>
      </div>
    )
  }


export default Navbar


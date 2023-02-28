import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({userData ,logout}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg position-fixed">
  <div className="container-fluid px-5">
    <Link className="navbar-brand pe-5" href="#">TheMovie</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userData?<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
          </li>
        <li> 
          <Link className="nav-link" to='movies'>Movies</Link>
        </li>
        <li>
          <Link className="nav-link" to='tv'>TVshowes</Link>
          </li>
        <li>  
          <Link className="nav-link" to='people'>People</Link>
          </li>
        <li>  
          <Link className="nav-link" to='about'>About</Link>
        </li>                
      </ul>:''}

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <div className="social-icons mt-2 text-muted pe-2">
        <i className="fa-brands fa-facebook-f me-2"></i>
        <i className="fa-brands fa-twitter me-2"></i>
        <i className="fa-brands fa-instagram me-2"></i>
        <i className="fa-brands fa-behance me-2"></i>
        </div>
        
         
        {
          userData?<>
          <li>
          <Link onClick={logout} className="nav-link" to='login'>Logout</Link>
          </li>     
          <li>
          <Link className="nav-link" to='profile'>profile</Link>
          </li> 
          </>:<>
          <li className="nav-item">
          <Link className="nav-link" to='login'>Login</Link>
          </li>
        <li> 
          <Link className="nav-link" to='register'>Register</Link>
        </li>
          </>
        }          
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import { faBars, faCalendarDays, faFilm, faLifeRing, faPlay, faSquarePersonConfined, faVolleyball } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../assets/img/logo.png'

function Header() {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg bg-light border-0" data-bs-theme="light">
  <div class="container-fluid">
    <a class="navbar-brand align-items-center" href="#"><img class="logo" src={logo} alt="No-Image" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
        <form class="">
        <input class="form-control me-sm-2 rounded-1 p-2" type="search" placeholder=" 🔍 Search For movies, Events, Plays, Sports and Activities" style={{width:"500px", backgroundColor:"white"}}></input>
        </form>
        </li>
      </ul>
      <div className='ms-auto'>
    <ul class="navbar-nav me-auto align-items-center">
        <li class="nav-item me-4">
          <a class="nav-link" href="#">Ernakulam</a>
        </li>
      <li class="nav-item me-2">
      <button type="button" class="btn btn-primary" fdprocessedid="vhh3d">Sign In</button>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><FontAwesomeIcon icon={faBars} size="lg" /></a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
<div className='container-fluid navbottom'>
<div className="row p-3 nav">
        <div className="col-md-6 col-sm-3">
            <div className="row align-items-center ms-2">
                <div className="col-2"><h7 className="hide-item">Movies</h7>
                <div className='show-item'>
                <div  className='d-flex align-items-center flex-column'> <FontAwesomeIcon icon={faFilm} size="sm" style={{color: "#ff1414",}} /><span style={{fontSize:'12px',marginTop:'10px'}}>Movies</span></div>
                </div>
                </div>
               <div className="col-2">
               <h7 className="hide-item">Streams</h7>
               <div className='show-item'>
               <div  className='d-flex align-items-center flex-column ms-2'> <FontAwesomeIcon icon={faLifeRing} size="sm" style={{color: "#ff1414",}} />
               <span style={{fontSize:'12px',marginTop:'10px'}}>Streams</span></div>
                </div></div>
                <div className="col-2">
                <h7 className="hide-item">Events</h7>
                <div className='show-item'>
               <div  className='d-flex align-items-center flex-column ms-3'> <FontAwesomeIcon icon={faCalendarDays} size="sm" style={{color: "#ff1414",}} />
               <span style={{fontSize:'12px',marginTop:'10px'}}>Events</span></div></div></div>
                <div className="col-2">
                <h7 className="hide-item">Plays</h7>
                <div className='show-item'>
               <div  className='d-flex align-items-center flex-column ms-2'> <FontAwesomeIcon icon={faPlay} size="sm" style={{color: "#ff1414",}} />
               <span style={{fontSize:'12px',marginTop:'10px'}}>Plays</span></div></div></div>
                <div className="col-2">
                <h7 className="hide-item">Sports</h7>
                <div className='show-item'>
               <div  className='d-flex align-items-center flex-column ms-2'> <FontAwesomeIcon icon={faVolleyball} size="sm" style={{color: "#ff1414",}} />
               <span style={{fontSize:'12px',marginTop:'10px'}}>Sports</span></div></div></div>
                <div className="col-2">
                <h7 className="hide-item">Activities</h7>
                <div className='show-item'>
               <div  className='d-flex align-items-center flex-column ms-3'> <FontAwesomeIcon icon={faSquarePersonConfined} size="sm" style={{color: "#ff1414",}} />
               <span style={{fontSize:'12px',marginTop:'10px'}}>Activities</span></div></div></div>
            </div>
        </div>
        <div className="col-md-6 col-sm-3 ms-auto hide-item" >
            <div className="row">
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-2 small">ListYousShow</div>
                <div className="col-2 ms-3 small">Corporates</div>
                <div className="col-1 small">Offers</div>
                <div className="col-2 ms-3 small">Gitf Cards</div>
            </div>
        </div>
    </div>
</div>
    
    </>
  )
}

export default Header
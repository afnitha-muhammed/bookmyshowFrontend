import { faFacebook, faInstagram, faLinkedin, faPinterest, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faHeadset, faTent, faTicket, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Footer() {
  return (
    <div style={{height:'auto',width:'100%'}} className='bg-dark'>
        <footer className='container-fluid p-3'>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faTent} className='text-white fs-3' size='2lg' />
                <h3 className='text-white ms-2 mt-3' style={{fontSize:'18px'}}>List Your Show</h3>
                </div>
                <div className="col-md-6">
                    <p className='text-white mt-4'>Got a Show, Activity or great Experince? Partnet with Us & get listed on BookMyShow</p>
                </div>
                <div className="col-md-3 align-items-center"> 
                    <button className='byn btn-danger p-2 mt-3'>Contact Today!</button>
                </div>
            </div>
            
        
        <div className="row my-3 bg">
                <div className="col-md-1"></div>
                <div className="col-md-3 d-flex align-items-center justify-content-center flex-column my-3">
                <FontAwesomeIcon icon={faHeadset} size="2xl" style={{alignContent:'center'}} className='text3 fs-1'   />
                <h4 className='text3 mt-3 ' style={{fontSize:'15px',fontWeight:'500'}}>24/7 CUSTOMER CARE</h4>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center flex-column my-3">
                <FontAwesomeIcon icon={faTicket} size="2xl" style={{alignContent:'center'}} className='text3 fs-1'   />
                <h4 className='text3 mt-3' style={{fontSize:'15px',fontWeight:'500'}}>BOOKING CONFIRMATION</h4>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center flex-column my-3">
                <FontAwesomeIcon icon={faEnvelopeOpenText} size="2xl" style={{alignContent:'center'}} className='text3 fs-1'   />
                <h4 className='text3 mt-3' style={{fontSize:'15px',fontWeight:'500'}}>SUBSCRIBE TO THE NEWSLETTER</h4>
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className='container-fluid p-3 section2'>
                <div>
                <h5 className='ms-5 text1'>MOVIES NOW SHOWING IN ERNAKULAM</h5>
                <p className='text2 ms-5'>kalki | Paradise | Maharaja | Ulladakkam | Nadanna Sambavam | Golam</p>
                </div>
                <div className='mt-4'>
                <h5 className='ms-5 text1'>UPCOMMING MOVIES IN ERNAKULAM</h5>
                <p className='text2 ms-5'>The UP Files | Kill | Rangada | Yaari | Indian 2 </p>
                </div>
                <div className='mt-4'>
                <h5 className='ms-5 text1'>EVENTS IN TOP CITIES</h5>
                <p className='text2 ms-5'>Events in mumbai | events in chennai | events in bangalour | events in delhi | events in goa | events in kashmir </p>
                </div>
                <div className='mt-4'>
                <h5 className='ms-5 text1'>PLAYES IN TOP CITIES</h5>
                <p className='text2 ms-5'>Playes in mumbai | Playes in chennai | Playes in bangalour | Playes in delhi | Playes in goa </p>
                </div>
                <div className='mt-4'>
                <h5 className='ms-5 text1'>COUNTRIES</h5>
                <p className='text2 ms-5'>USA | Syngapore | Indonasia | Sri Lanka | West Indies </p>
                </div>
                <div className='mt-4'>
                <h5 className='ms-5 text1'>HELP</h5>
                <p className='text2 ms-5'>About us | Contact Us | Current Openings | Sitemap | Press Coverage | FAQS | Privacy policy | Terms &/ Conditions </p>
                </div>
                <div className='bookmyshow bg-dark'>
                <hr className='text-white my-5' />
                <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />
                </div>
                <div className='w-100 d-flex align-items-center justify-content-center'>
                <FontAwesomeIcon icon={faFacebook} size="2xl" style={{color:'#808389'}} className='me-3'/>
                <FontAwesomeIcon icon={faXTwitter} size="2xl" style={{color:'#808389'}} className='me-3' />
                <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color:'#808389'}} className='me-3' />
                <FontAwesomeIcon icon={faYoutube} size="2xl" style={{color:'#808389'}} className='me-3' />
                <FontAwesomeIcon icon={faPinterest} size="2xl" style={{color:'#808389'}} className='me-3' />
                <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color:'#808389'}} className='me-3' />
                </div>
                <p className='my-3 text-center w-100' style={{color:'#808389',fontSize:'12px'}}>Copyright 2024 © Bigtree Entertainments Pvt.Lt .All right reserved</p>
               
                
            </div>
            </footer>
    </div>
  )
}

export default Footer
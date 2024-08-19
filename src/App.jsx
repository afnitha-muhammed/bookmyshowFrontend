
import './App.css'
import Header from './Components/Header'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer';
import carosal1 from './assets/img/carosal1.avif'
import carosal2 from './assets/img/carosal2.avif'
import film1 from './assets/img/film1.avif'
import film2 from './assets/img/film2.avif'
import film3 from './assets/img/film3.avif'
import film4 from './assets/img/film4.avif'
import film5 from './assets/img/film5.avif'
import film6 from './assets/img/film6.avif'
import film7 from './assets/img/film7.avif'
import film8 from './assets/img/film8.avif'
import film9 from './assets/img/film9.avif'
import ad1 from './assets/img/ad1.avif'
import premier from './assets/img/premier.avif'
import premium1 from './assets/img/premier1.avif'
import premium2 from './assets/img/premier2.avif'
import premium3 from './assets/img/premier3.avif'
import premium4 from './assets/img/premier4.avif'
import premium5 from './assets/img/premier5.avif'
import premium6 from './assets/img/premier6.avif'
import premium7 from './assets/img/premier7.avif'
import premium8 from './assets/img/premier8.avif'
import sports1 from './assets/img/sports1.avif'
import sports2 from './assets/img/sports2.avif'
import sports3 from './assets/img/sport3.avif'
import sports4 from './assets/img/sport4.avif'

function App() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleDragStart = (e) => e.preventDefault();

const items = [
	<img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
	<img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
	<img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
];


  return (
    <>
      <Header/>
      {/* Carosal */}

      <Carousel data-bs-theme="dark" className='mt-3 p-3'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carosal1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carosal2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carosal2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>

    <div className='section1 my-5'>
      <h2 className='fs-3 text-left ms-2 mb-2'>Recomended Movies</h2>
    <section>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <img src={film1}  style={{ width: '15rem',marginLeft:'10px',borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3'>Paradise</h3>
        <p className='subfilmname ms-3'>Action/Triller</p>
        </div>
        <div>
        <img src={film2} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px'}} />
        <h3 className='filmname mt-3 ms-3'>Kalki 2898 AC</h3>
        <p className='subfilmname ms-3'>Action/Triller</p>
        </div>
        <div>
        <img src={film3} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3'>Maharaja</h3>
        <p className='subfilmname ms-3'>Action/Drama</p>
        </div>
        <div>
        <img src={film4} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3'>Ulladakkam</h3>
        <p className='subfilmname ms-3'>Drama/Family</p>
        </div>
        <div>
        <img src={film5} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3'>Gaganachari</h3>
        <p className='subfilmname ms-3'>Action/Triller</p>
        </div>
        <div>
        <img src={film6} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3'>Golam</h3>
        <p className='subfilmname ms-3'>Action/Triller</p>
        </div>
        <div>
        <img src={film7} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3'>Nadanna Sambavam</h3>
        <p className='subfilmname ms-3'>Action/Triller</p>
        </div>
        <div>
        <img src={film8} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3'>Day One</h3>
        <p className='subfilmname ms-3'>Action/Triller</p>
        </div>
        <div>
        <img src={film9} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3'>Inside to Outside</h3>
        <p className='subfilmname ms-3'>Action/Triller</p>
        </div>
      </Slider>
      </div>   
       </section>

      <section classname="section1">
          <img src={ad1} className='w-100 my-5' />
      </section>

  
    </div>

    <div className='my-4' style={{backgroundColor:'rgb(43, 49, 72)'}}>
    <section className='section1 mb-4'>
    <div className="slider-container">
    <img src={premier} alt="" className='mb-3 w-100 mt-2' />
    <h3 className='filmname mt-3 ms-3 text-white'>Premier</h3>
    <p className='subfilmname ms-3 text-white'>Brand New Release every Friday</p>
      <Slider {...settings} className='mb-2'>
        <div>
        <img src={premium1}  style={{ width: '15rem',marginLeft:'10px',borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3 text-white'>The Garfield Movie</h3>
        <p className='subfilmname ms-3 text-white'>English</p>
        </div>
        <div>
        <img src={premium2} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px'}} />
        <h3 className='filmname mt-3 ms-3 text-white'>I Heard the Bells</h3>
        <p className='subfilmname ms-3 text-white'>English</p>
        </div>
        <div>
        <img src={premium3} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3 text-white'>A Furiosa: A Mad Max Saga</h3>
        <p className='subfilmname ms-3 text-white'>English</p>
        </div>
        <div>
        <img src={premium4} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3 text-white'>Visions</h3>
        <p className='subfilmname ms-3 text-white'>French</p>
        </div>
        <div>
        <img src={premium5} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3 text-white'>The Seeding</h3>
        <p className='subfilmname ms-3 text-white'>English</p>
        </div>
        <div>
        <img src={premium6} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3 text-white'>IF (2024)</h3>
        <p className='subfilmname ms-3 text-white'>English</p>
        </div>
        <div>
        <img src={premium7} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3 text-white'>Just Paas</h3>
        <p className='subfilmname ms-3 text-white'>Kannada</p>
        </div>
        <div>
        <img src={premium8} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3 text-white'>A Furiosa: A Mad Max Saga</h3>
        <p className='subfilmname ms-3 text-white'>English</p>
        </div>
      </Slider>
      </div>   
       </section>
       </div>


       <div className='my-4'>
    <section className='section1 mb-4'>
    <div className="slider-container mt-3">
    <h2 className='fs-3 text-left ms-2 mb-2 mt-5'>Top Sports Events</h2>
      <Slider {...settings} className='mb-2'>
        <div>
        <img src={sports1}  style={{ width: '15rem',marginLeft:'10px',borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3'>Run for the Ocean: Get Medal by Courier</h3>
        <p className='subfilmname ms-3'>$390</p>
        </div>
        <div>
        <img src={sports2} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px'}} />
        <h3 className='filmname mt-3 ms-3'>International Virtual Marathon</h3>
        <p className='subfilmname ms-3'>$550</p>
        </div>
        <div>
        <img src={sports3} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3'>Freedom Virtual marathon</h3>
        <p className='subfilmname ms-3'>$300</p>
        </div>
        <div>

        <img src={sports4} alt="no-image"  style={{ width: '15rem',marginLeft:'10px', borderRadius:'10px' }} />
        <h3 className='filmname mt-3 ms-3'>Solve the Rubic's Cube, Sharpen 6 Virtual Skills</h3>
        <p className='subfilmname ms-3'>$700</p>
        </div>
      </Slider>
      </div>   
       </section>
       </div>


       <section className='section1 my-5'>
       <h2 className='fs-3 text-left ms-2 mb-2'>Trending Serarches Right Now</h2>
       <div className='my-2'>
        <button className='btn btn-outline-primary ms-2 mt-2'>Kalki</button>
        <button className='btn btn-outline-primary ms-2 mt-2'>Visions</button>
        <button className='btn btn-outline-primary ms-2 mt-2'>Nadanna Sambavam</button>
        <button className='btn btn-outline-primary ms-2 mt-2'>Ulladakkam</button>
        <button className='btn btn-outline-primary ms-2 mt-2'>Paradise</button>
       </div>
       <div className='my-2'>
        <button className='btn btn-outline-primary ms-2 mt-2'>Kill</button>
        <button className='btn btn-outline-primary ms-2 mt-2'>Kanakarajyam</button>
        <button className='btn btn-outline-primary ms-2 mt-2'>Just Paas</button>
       </div>
       </section>

    
    <Footer/>
    </>
  )
}

export default App

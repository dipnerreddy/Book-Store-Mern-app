import React from 'react'
import NavBar from '../components/NavBar';
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  // const image=require("../images/about.svg");


  return (

    <div className='Home-Page bg-dark text-white container-fluid'>
        <div className='row container'>
            <div
                className='col-lg-6 d-flex justify-content-center align-items-center align-items-lg-start flex-column'
                style={{height: "91.5vh"}}>
                 <h2 style={{fontSize:"90px", }}>BOOK STORE</h2>
                 <h3 style={{fontSize:"50px", }}>FOR YOU</h3>
                 <p className=' mb-0' style={{color:"silver"}}>Checkout Out For more Books Here.</p>
                 <Link to="/books" className='viewBook my-3'>View Books</Link>
            </div>
            <div
                className='col-lg-6 d-flex justify-content-center align-items-center flex-column'
                style={{height: "91.5vh"}}>
                    <img className="img-fluid home-img "
                    src="https://us.images.westend61.de/0000920006pw/teenage-girls-reading-book-while-using-laptop-at-table-in-school-library-MASF05417.jpg" 
                    alt="/" />
            </div>
        </div>
        
    </div>
  );
}

export default Home;
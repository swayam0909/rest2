import React from 'react';
import '../styles/LandingPage.css';
import { Link } from 'react-router-dom';
import image1 from '../assets/pexels-christa-grover-977018-2121121.jpg';
import image2 from '../assets/pexels-pixabay-208736.jpg';
import image3 from '../assets/pexels-sebastians-731082.jpg';
import image4 from '../assets/bernard-hermant--IwbJJfoC80-unsplash.jpg';
import image5 from '../assets/jorg-angeli-1tyuLfDOnG0-unsplash.jpg';
import image6 from '../assets/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg';
// Array of imported images
const images = [image1, image2, image3,image4,image5 , image6];
const image = [image4,image5 , image6];

const LandingPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      justifyContent: 'space-between',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9'
    }}>
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">Vacation Homes & Rentals</h1>
        <Link to="/login-signup">
          <button className="header-button">Login / Signup</button>
        </Link>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-text">
          <h2 className="hero-title">Find Your Perfect Vacation Home</h2>
          <p className="hero-description">
            Browse through our collection of vacation homes and rentals to find your perfect getaway.
          </p>
          <Link to="/login-signup">
          <button className="hero-button" >
            Explore Homes
          </button>
          </Link>
        </div>
       
      </main>

      {/* Features Section */}
      <section className="features">
        <div className="features-header">
          <h3 className="features-title">Why Choose Us?</h3>
          <p className="features-subtitle">We provide top-notch services for your dream vacation.</p>
        </div>
        <div className="features-grid">
          {['Luxury Homes', 'Affordable Options', 'Convenient Locations'].map((title, index) => (
            <div className="feature-card" key={index}>
              {/* Dynamically assign images from the imported array */}
              <img
                src={images[index]}
                alt={title}
                className="feature-image"
              />
              <h6 className="feature-title">{title}</h6>
              <p className="feature-description">Description for {title.toLowerCase()}</p>
            </div>
            
          ))}
        </div>
      </section>

      <section className="features">
        <div className="features-grid">
          {['Easy Checkin', 'Best Price', '24/7 Service'].map((title, index) => (
            <div className="feature-card" key={index}>
              {/* Dynamically assign images from the imported array */}
              <img
                src={image[index]}
                alt={title}
                className="feature-image"
              />
              <h6 className="feature-title">{title}</h6>
              <p className="feature-description">Description for {title.toLowerCase()}</p>
            </div>
            
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h6 className="footer-title">Contact Us</h6>
            <p>Email: swayamraj0909@gmail.com</p>
            <p>Phone: +91 6393494782</p>
            
          </div>
          <div>
            <h6 className="footer-title">Follow Us</h6>
            <div className="footer-socials">
              {['Facebook', 'Instagram', 'Twitter'].map((platform, index) => (
                <a href={`#${platform.toLowerCase()}`} key={index} className="footer-link">
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

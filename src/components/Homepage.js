import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/HomePage.css';

const HomePage = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useState({
        location: '',
        name: ''
    });
    const navigate = useNavigate(); // Initialize navigate function

    // Initial fetch of all properties
    useEffect(() => {
        axios.get('http://localhost:8080/api/properties')
            .then(response => {
                setProperties(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the properties!", error);
                setLoading(false);
            });
    }, []);

    // Handle input change for search fields
    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value
        });
    };

    // Handle search form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const { location, name } = searchParams;

        // Construct the query parameters
        const query = {};
        if (location) query.location = location;
        if (name) query.name = name;

        // Fetch properties based on search parameters
        setLoading(true); // Show loading state while fetching
        axios.get('http://localhost:8080/api/properties/search', { params: query })
            .then(response => {
                setProperties(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error during search", error);
                setLoading(false);
            });
    };

    // Handle logout click
    const handleLogout = () => {
        // Clear localStorage
        localStorage.clear();

        // Redirect to the landing page
        navigate('/landing'); // Use navigate to redirect
    };

    return (
        <div className="home-page">
            {/* Header Section */}
            <header className="header">
                <div className="logo">
                    <h1>Vacation Homes & Rentals</h1>
                </div>
                <nav className="nav">
                    <a href="/profile">My Account</a>
                    {/* Use the handleLogout function here */}
                    <a href="/" onClick={handleLogout}>Logout</a>
                </nav>
            </header>

            {/* Search Form Section */}
            <div className="search-form">
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Search by Property Name"
                        value={searchParams.name}
                        onChange={handleSearchChange}
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={searchParams.location}
                        onChange={handleSearchChange}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>

            {/* Property Listings Section */}
            <div className="property-listings">
                <h2>Available Vacation Homes</h2>
                {loading ? (
                    <p>Loading properties...</p>
                ) : (
                    <div className="property-list">
                        {properties.length === 0 ? (
                            <p>No properties found matching your search criteria.</p>
                        ) : (
                            properties.map((property) => (
                                <div className="property-card" key={property.id}>
                                    <img
                                        src={property.imageUrl || 'https://via.placeholder.com/350x200'}
                                        alt={property.name}
                                        className="property-image"
                                    />
                                    <div className="property-details">
                                        <h3>{property.name}</h3>
                                        <p>{property.location}</p>
                                        <p className="property-price">${property.price.toFixed(2)} / night</p>
                                        <p className="property-description">{property.description}</p>
                                        <button className="book-now">Book Now</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/faq">FAQ</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com">Facebook</a>
                    <a href="https://instagram.com">Instagram</a>
                    <a href="https://twitter.com">Twitter</a>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../pages/App';
import ForgotPassword from '../components/forgot-password'
import ResetPassword from '../components/ResetPassword';  // Import ResetPassword component
import HomePage from '../components/Homepage';
import LandingPage from '../components/LandingPage';


const Main = () => {
  return (
    <Router>
      <div className="App">
        {/* Routes */}
        <Routes>
          <Route path="/Xenon_Task1_ResponsiveWebsite" element={<LandingPage />} />
          <Route path="/login-signup" element={<App/>}/>
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} /> {/* New route for Reset Password */}
        </Routes>
      </div>
    </Router>
  );
};

export default Main;

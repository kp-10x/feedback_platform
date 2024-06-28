import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    console.log(response);
    navigate('/feedback');
  };

  const handleLoginFailure = (error) => {
    console.error(error);
  };

  return (
    <div>
      <h1>Welcome to the Feedback Platform</h1>
      <GoogleLogin onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} />
    </div>
  );
}

export default Home;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './components/Home';
import Feedback from './components/Feedback';

const clientId = 'YOUR_GOOGLE_CLIENT_ID';

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;

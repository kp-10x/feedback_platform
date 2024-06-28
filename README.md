Feedback Platform
This project is a full-stack application for submitting and displaying feedback using Node.js for the backend and React for the frontend. It includes Google Auth integration and uses Frill.co to manage feedback data.

Prerequisites

- Node.js (v14+)
- MongoDB
- Frill.co account and API key
- Google Developer account for OAuth client ID

Backend Setup
cd backend
npm install    // install dependencies

MONGODB_URI=your_mongodb_connection_string    //Create a .env file with your configuration:
FRILL_API_KEY=your_frill_api_key
node server.js  //Run the backend server:


Frontend Setup
npm install
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id // Create a .env file with your configuration:
npm start // Run the frontend server

Usage
Open your browser and go to http://localhost:3000.
Log in using Google Auth.
Submit feedback through the feedback form.
View aggregated feedback on the same page.

Repository Structure
<img width="594" alt="Screenshot 2024-06-28 at 12 52 19 PM" src="https://github.com/kp-10x/feedback_platform/assets/123822183/4003b0a4-4884-418e-8eab-cd1f54d8b6cc">

Demonstration
End-to-End Flow
1. Google Auth Login:
    -Users log in using their Google accounts.

2. Feedback Submission:
    -Users submit feedback categorized under Product Features, Product Pricing, or Product Usability.
    -Feedback includes a rating and comments.
   
3. Feedback Storage and Retrieval:
    -Submitted feedback is stored in a MongoDB database.
    -Feedback data is sent to Frill.co and is available for retrieval.
4. Display Feedback:
    -Aggregated feedback is displayed on the frontend, showing average ratings and comments for each category.







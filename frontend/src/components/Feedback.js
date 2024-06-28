import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Feedback() {
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedback = { username: 'Anonymous', category, rating, comments };
    try {
      await axios.post('http://localhost:5000/api/feedback', feedback);
      fetchFeedbacks();
    } catch (error) {
      console.error('There was an error submitting your feedback:', error);
    }
  };

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/feedback');
      setFeedbacks(response.data);
    } catch (error) {
      console.error('There was an error fetching feedback:', error);
    }
  };

  return (
    <div>
      <h1>Submit Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Product Features">Product Features</option>
            <option value="Product Pricing">Product Pricing</option>
            <option value="Product Usability">Product Usability</option>
          </select>
        </div>
        <div>
          <label>Rating</label>
          <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>Aggregated Feedback</h2>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={

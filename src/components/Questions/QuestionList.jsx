import React, { useState, useEffect, Link } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Questions from './Questions';
import '../Main/Home.css'
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate(); // Initialize navigation hook
  const handleAskQuestion = () => {
    navigate('/ask-question'); // Navigate to the AskQuestion form
  };

  useEffect(() => {
    axios
      .get('http://localhost:5001/questions') // JSON Server endpoint
      .then((response) => setQuestions(response.data))
      .catch((error) => console.error('Error fetching questions:', error));
  }, []);

  return (
    <div className='home-container-1'>
            <LeftSidebar />
    <div className="question-bar">
    <button onClick={handleAskQuestion} className='ask-btnn'>Ask a Question</button>

      {questions.length > 0 ? (
        questions.map((question) => (
          <Questions key={question.id} question={question} />
        ))
      ) : (
        <h1>No Questions</h1>
      )}
    </div>
    <div className="home-container-2">
                <RightSidebar />
      </div>
  </div>
  );
};

export default QuestionList;

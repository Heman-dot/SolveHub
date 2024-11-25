import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

import './AskQuestion.css';

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionBody, setQuestionBody] = useState('');
  const [questionTags, setQuestionTags] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [questionId, setQuestionId] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if editing mode
    if (location.state && location.state.question) {
      const { id, title, body, tags } = location.state.question;
      setQuestionId(id);
      setQuestionTitle(title);
      setQuestionBody(body);
      setQuestionTags(tags.join(' ')); // Convert array to space-separated string
      setIsEditing(true);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedQuestion = {
      title: questionTitle,
      body: questionBody,
      tags: questionTags.split(' '), // Convert tags string into an array
    };

    if (isEditing) {
      // Update the existing question
      axios
        .patch(`http://localhost:5001/questions/${questionId}`, updatedQuestion)
        .then((response) => {
          console.log('Question updated:', response.data);
          navigate(`/questions/${questionId}`); // Redirect to the question details page
        })
        .catch((error) => console.error('Error updating question:', error));
    } else {
      // Create a new question
      const newQuestion = {
        ...updatedQuestion,
        id: Date.now().toString(), // Generate a unique ID
        user: 'Anonymous',
        upVotes: 0,
        downVotes: 0,
        answers: [],
        askedOn: new Date().toISOString(),
      };

      axios
        .post('http://localhost:5001/questions', newQuestion)
        .then((response) => {
          console.log('Question added:', response.data);
          navigate('/'); // Redirect to the home page
        })
        .catch((error) => console.error('Error adding question:', error));
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setQuestionBody(questionBody + '\n');
    }
  };

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>{isEditing ? 'Edit Your Question' : 'Ask a Public Question'}</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>Be specific and imagine you’re asking a question to another person</p>
              <input
                type="text"
                id="ask-ques-title"
                value={questionTitle}
                onChange={(e) => setQuestionTitle(e.target.value)}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                required
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>Include all the information someone would need to answer your question</p>
              <textarea
                id="ask-ques-body"
                value={questionBody}
                onChange={(e) => setQuestionBody(e.target.value)}
                cols="30"
                rows="10"
                onKeyPress={handleEnter}
                required
              ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-tags"
                value={questionTags}
                onChange={(e) => setQuestionTags(e.target.value)}
                placeholder="e.g. (xml typescript wordpress)"
                required
              />
            </label>
          </div>
          <input
            type="submit"
            value={isEditing ? 'Update your question' : 'Post your question'}
            className="review-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;

import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import copy from 'copy-to-clipboard';

import upvote from '../../Assets/sort-up.svg';
import downvote from '../../Assets/sort-down.svg';
import './Questions.css';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';

const QuestionsDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [questionsList, setQuestionsList] = useState([]);
    const [Answer, setAnswer] = useState('');
    const [editAnswerIndex, setEditAnswerIndex] = useState(null);
    const location = useLocation();
    const url = 'http://localhost:3000';

    // Fetch questions from db.json
    useEffect(() => {
        fetch('http://localhost:5001/questions')
            .then((response) => response.json())
            .then((data) => setQuestionsList(data))
            .catch((error) => console.error('Error fetching questions:', error));
    }, []);

    const handleShare = () => {
        copy(url + location.pathname);
        alert('Copied URL: ' + url + location.pathname);
    };

    const handlePostAnswer = (e, questionId) => {
        e.preventDefault();
        if (Answer.trim() === '' ) {
            alert('Please enter an answer before submitting.');
            return;
        }

        const questionToUpdate = questionsList.find((question) => question.id === questionId);

        if (questionToUpdate) {
            let updatedAnswers;
            if (editAnswerIndex !== null) {
                // Update the specific answer
                updatedAnswers = questionToUpdate.answers.map((ans, index) =>
                    index === editAnswerIndex ? Answer : ans
                );
                setEditAnswerIndex(null); // Reset editing index
            } else {
                // Add new answer
                updatedAnswers = [...questionToUpdate.answers, Answer];
            }

            fetch(`http://localhost:5001/questions/${questionId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers: updatedAnswers }),
            })
                .then((response) => response.json())
                .then(() => {
                    setQuestionsList((prevQuestions) =>
                        prevQuestions.map((q) =>
                            q.id === questionId ? { ...q, answers: updatedAnswers } : q
                        )
                    );
                    setAnswer('');
                })
                .catch((error) => console.error('Error updating answers:', error));
        }
    };

    const handleEditAnswer = (answer, index) => {
        setAnswer(answer); // Prefill the input box with the selected answer
        setEditAnswerIndex(index); // Set the index of the answer being edited
    };

    const handleEditQuestion = (questionId) => {
        const questionToEdit = questionsList.find((q) => q.id === questionId);
        if (questionToEdit) {
            navigate('/ask-question', { state: { question: questionToEdit } });
        }
    };

    const handleDeleteAnswer = (questionId, answerIndex) => {
        const questionToUpdate = questionsList.find((question) => question.id === questionId);
        if (questionToUpdate) {
            const updatedAnswers = questionToUpdate.answers.filter((_, index) => index !== answerIndex);

            fetch(`http://localhost:5001/questions/${questionId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers: updatedAnswers }),
            })
                .then((response) => response.json())
                .then(() => {
                    setQuestionsList((prevQuestions) =>
                        prevQuestions.map((q) =>
                            q.id === questionId ? { ...q, answers: updatedAnswers } : q
                        )
                    );
                })
                .catch((error) => console.error('Error deleting answer:', error));
        }
    };

    const handleDeleteQuestion = (questionId) => {
        fetch(`http://localhost:5001/questions/${questionId}`, {
            method: 'DELETE',
        })
            .then(() => {
                setQuestionsList((prevQuestions) =>
                    prevQuestions.filter((q) => q.id !== questionId)
                );
                navigate('/'); // Redirect to home page
            })
            .catch((error) => console.error('Error deleting question:', error));
    };

    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='question-details-page'>
                {questionsList.length === 0 ? (
                    <h1>Loading...</h1>
                    
                ) : (
                    <>
                        {questionsList
                            .filter((question) => question.id === id)
                            .map((question) => (
                                <div key={question.id}>
                                    <section className='question-details-container'>
                                        <h1>{question.title}</h1>
                                        <div className='question-details-container-2'>
                                            <div className="question-votes">
                                                <img src={upvote} alt="Upvote" width="18" className='votes-icon' />
                                                <p>{question.upVotes - question.downVotes}</p>
                                                <img src={downvote} alt="Downvote" width="18" className='votes-icon' />
                                            </div>
                                            <div style={{ width: "100%" }}>
                                                <p className='question-body'>{question.body}</p>
                                                <div className="question-details-tags">
                                                    {question.tags.map((tag) => (
                                                        <p key={tag}>{tag}</p>
                                                    ))}
                                                </div>
                                                <div className="question-actions-user">
                                                    <div>
                                                        <button className="edit-question-btn" type='button' onClick={handleShare}>Share</button>
                                                        <button
                                                            className="edit-question-btn"
                                                            onClick={() => handleEditQuestion(question.id)}
                                                        >
                                                            Edit
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <p>asked {moment(question.askedOn).fromNow()}</p>
                                                        <div>{question.user}</div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </section>
                                    {question.answers.length > 0 && (
                                        <section>
                                            <h3>{question.answers.length} Answer(s)</h3>
                                            <div className="answers-container">
                                                {question.answers.map((answer, index) => (
                                                    <div className="answer-box" key={index}>
                                                        <p>{answer}</p>
                                                        <button
                                                            className="edit-question-btn"
                                                            onClick={() => handleEditAnswer(answer, index)}
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            className="edit-question-btn"
                                                            onClick={() => handleDeleteAnswer(question.id, index)}
                                                        >
                                                            Delete 
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    )}
                                    <section className='post-ans-container'>
                                        <h3>Your Answer</h3>
                                        <form onSubmit={(e) => handlePostAnswer(e, question.id)}>
                                            <textarea
                                                name=""
                                                id=""
                                                cols="30"
                                                rows="10"
                                                value={Answer}
                                                onChange={(e) => setAnswer(e.target.value)}
                                            ></textarea>
                                            <br />
                                            <input type="Submit" className='post-ans-btn' value='Post Your Answer' />
                                            <button type='button'
                                                    className="delete-question-btn post-ans-btn"
                                                    onClick={() => handleDeleteQuestion(question.id)}
                                                >
                                                    Delete Question
                                                </button>
                                        </form>
                                        <p>
                                            Browse other Question tagged
                                            {question.tags.map((tag) => (
                                                <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                            ))} or{' '}
                                            <Link to='/ask-question' style={{ textDecoration: "none", color: "#009dff" }}>
                                                ask your own question.
                                            </Link>
                                        </p>
                                    </section>
                                </div>
                            ))}
                    </>
                )}
            </div>
            <div className="home-container-2">
                <RightSidebar />
            </div>
        </div>
    );
};

export default QuestionsDetails;

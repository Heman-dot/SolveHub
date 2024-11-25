import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';


const DisplayAnswer = ({ question, handleShare }) => {
    const { id } = useParams();
    const [answers, setAnswers] = useState([]);

    // Fetch answers for the given question ID
    useEffect(() => {
        fetch(`http://localhost:3001/questions/`)
            .then((response) => response.json())
            .then((data) => {
                if (data.answers) {
                    setAnswers(data.answers);
                }
            })
            .catch((error) => console.error('Error fetching answers:', error));
    }, [id]);
    console.log(answers)

    return (
        <div>
            {answers.map((ans, index) => (
                <div className="display-ans" key={index}>
                    <p>{ans}</p>
                    <div className="question-actions-user">
                        <div>
                            <button type="button" onClick={handleShare}>Share</button>
                        </div>
                        <div>
                            <p>answered {moment(question.askedOn).fromNow()}</p>
                            <Link
                                to={`/Users/${question.user}`}
                                className="user-link"
                                style={{ color: '#0086d8' }}
                            >
                               
                                <div>{question.user}</div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DisplayAnswer;

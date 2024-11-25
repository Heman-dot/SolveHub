import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import '../Main/Home.css'
const Questions = ({ question }) => {
  // Add fallback values in case data is missing
  const upVotes = question?.upVotes || 0;
  const downVotes = question?.downVotes || 0;
  const answers = question?.answers?.length || 0;
  const tags = question?.tags || [];
  const askedOn = question?.askedOn || new Date().toISOString();
  const user = question?.user || 'Anonymous';

  return (
    <div className="display-question-container">
      <div className="display-votes-ans">
        <p>{upVotes - downVotes}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{answers}</p>
        <p>answers</p>
      </div>
      <div className="display-question-details">
        <Link to={`/Questions/${question?.id}`} className="question-title-link">
          {question?.title || 'Untitled Question'}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <p className="display-time">
            asked {moment(askedOn).fromNow()} by {user}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;

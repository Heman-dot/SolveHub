import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Main/Home.css';
import '../../App.css';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import bg from '../../Assets/bg.png';
import Grid from './Grid'
const Home = () => {
  const navigate = useNavigate(); // Initialize navigation hook

  const handleAskQuestion = () => {
    navigate('/ask-question'); // Navigate to the AskQuestion form
  };

  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='main-bar'>
        <div className='main-bar-header'>
          <div className='main-bar-description'>
            <h1>Welcome to SolveHub Community</h1>
            <p>
              This is a platform where developers collaborate by asking and answering questions
              related to programming, software development, and beyond. Join the community, share
              your knowledge, and grow together.
            </p>
            <button onClick={handleAskQuestion} className='ask-btn'>Ask a Question</button>
          </div>

          <div className='main-bar-image'>
            <img className='bg-main' src={bg} alt="Illustration for Q&A platform" />
          </div>
        </div>
        <Grid/>
      </div>
      <div className='home-container-2'>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;

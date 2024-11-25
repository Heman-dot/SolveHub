import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Main/Home";
import Login from "./components/Auth/Login";
import AskQuestion from "./components/Questions/AskQuestion";
import QuestionsDetails from "./components/Questions/QuestionDetails";
import Tags from './components/Tags/Tags'
import Footer from "./components/Footer/Footer";
import QuestionList from "./components/Questions/QuestionList";


function App() {
  
  return (
    <Router>
      <Navbar />
\        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ask-question" element={<AskQuestion />} />
        <Route path='/Questions' element={<QuestionList />}/>
        <Route path='/Questions/:id' element={<QuestionsDetails />}/>
        <Route path='/Tags' element={<Tags />}/>
        </Routes>
      <Footer/>
  </Router>
  
  );
}

export default App;

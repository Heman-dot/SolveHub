import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import logo from '../../Assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      <img style={{width:"150px",height:"30px",marginRight:"-8%",marginLeft:"2%",marginTop:"1.5%"}} src={logo}></img>
        <div className="footer-column">
          <h4>SOLVEHUB</h4>
          <ul>
            <li>Questions</li>
            <li>Help</li>
            <li>Chat</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>PRODUCTS</h4>
          <ul>
            <li>Teams</li>
            <li>Advertising</li>
            <li>Talent</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Cookie Settings</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>SOLVE EXCHANGE NETWORK</h4>
          <ul>
            <li>Technology</li>
            <li>Culture & Recreation</li>
            <li>Life & Arts</li>
            <li>Science</li>
            <li>Professional</li>
            <li>Business</li>
            <li>API</li>
            <li>Data</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <a href="#">Blog</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
        <p>
          Site design / logo © 2024 Solve Exchange Inc; user contributions
          licensed under <a href="#">CC BY-SA</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import './Login.css';
import icon from '../../Assets/icon.png';
import AboutAuth from './LoginAbout';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && <img src={icon} alt="stack overflow" className="login-logo" />}
        <form>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" id="name" name="name" />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" id="email" name="email" />
          </label>
          <label htmlFor="password">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ color: '#007ac6', fontSize: '13px' }}>Forgot password?</p>
              )}
            </div>
            <input type="password" id="password" name="password" />
            {isSignup && (
              <p style={{ color: '#666767', fontSize: '13px' }}>
                Passwords must contain at least eight characters, including at least 1 letter and 1
                number.
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: '13px' }}>
                Opt-in to receive occasional product updates, user research invitations, company
                announcements, and digests.
              </p>
            </label>
          )}
          <button type="button" className="auth-btn">
            {isSignup ? 'Sign up' : 'Log in'}
          </button>
          {isSignup && (
            <p style={{ color: '#666767', fontSize: '13px' }}>
              By clicking “Sign up”, you agree to our{' '}
              <span style={{ color: '#007ac6' }}>terms of service</span>,{' '}
              <span style={{ color: '#007ac6' }}>privacy policy</span>, and{' '}
              <span style={{ color: '#007ac6' }}>cookie policy</span>.
            </p>
          )}
        </form>
        <p>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <button type="button" className="handle-switch-btn" onClick={handleSwitch}>
            {isSignup ? 'Log in' : 'Sign up'}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.css';

export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState('');

  const getPasswordStrength = (pwd) => {
    if (!pwd) return 0;
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(password);
  const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthLabel = strengthLabels[passwordStrength];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy');
      return;
    }
    console.log('Signup:', { fullName, email, password });
  };

  const handleGithubSignup = () => {
    console.log('GitHub signup');
  };

  const handleGoogleSignup = () => {
    console.log('Google signup');
  };

  return (
    <div className="signup-wrapper">
      {/* Header */}
      <header className="signup-header">
        <div className="header-logo">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#6366F1" />
            <path d="M8 10H24M8 16H24M8 22H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>DevDesign Studio</span>
        </div>
      </header>

      <div className="signup-container">
        {/* Main Signup Card */}
        <div className="signup-card">
          {/* Card Header */}
          <div className="signup-card-header">
            <h1>Start Building</h1>
            <p>Create your professional workspace in seconds.</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="signup-form">
            {error && <div className="error-message">{error}</div>}

            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName">FULL NAME</label>
              <div className="input-wrapper">
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Work Email */}
            <div className="form-group">
              <label htmlFor="email">WORK EMAIL</label>
              <div className="input-wrapper">
                <input
                  id="email"
                  type="email"
                  placeholder="alex@studio.dev"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 8L10.89 13.26C11.5475 13.7768 12.4525 13.7768 13.11 13.26L21 8M5 19h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <div className="input-wrapper">
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 10h18M7 10V7c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4v3M5 10v9c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-9M12 14v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Password Strength Indicator */}
              <div className="password-strength">
                <div className="strength-bars">
                  {[1, 2, 3, 4].map((index) => (
                    <div
                      key={index}
                      className={`strength-bar ${index <= passwordStrength ? `strength-${passwordStrength}` : ''}`}
                    />
                  ))}
                </div>
                <div className="strength-label">
                  <span className={`label ${passwordStrength > 0 ? 'visible' : ''}`}>
                    {strengthLabel}
                  </span>
                  <span className="char-count">
                    {password.length}/8 chars
                  </span>
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="checkbox-group">
              <input
                id="terms"
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <label htmlFor="terms">
                I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.
              </label>
            </div>

            {/* Create Account Button */}
            <button type="submit" className="btn-create">
              Create Account
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span>OR CONTINUE WITH</span>
          </div>

          {/* OAuth Buttons */}
          <div className="oauth-buttons">
            <button type="button" className="btn-oauth btn-github" onClick={handleGithubSignup}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </button>
            <button type="button" className="btn-oauth btn-google" onClick={handleGoogleSignup}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"/>
              </svg>
              Google
            </button>
          </div>

          {/* Login Link */}
          <div className="login-link">
            <p>Already have an account? <Link to="/login">Log in</Link></p>
          </div>
        </div>

      </div>
    </div>
  );
}

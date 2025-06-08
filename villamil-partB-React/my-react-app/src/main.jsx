import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './WelcomeCard.css'; // Import CSS file for styling

function WelcomeCard({ userName, onClose }) {
  return (
    <div className="welcome-card-popup">
      <h2>Welcome, {userName}!</h2>
      <p>Is this your first time?</p>
      <button className="start-btn" onClick={onClose}>Get Started</button>
    </div>
  );
}


function StudentInfoCard() {
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [count, setCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Reset submitted when count changes
  const handleIncrement = () => {
    setCount(count + 1);
    setSubmitted(false);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="student-form"> 
        <label >
          Student Name: 
          <input className="student-name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}  
          />
        </label>
        
        <label >
          Student Number:
          <input className="student-num"
            type="text"
            value={num}
            onChange={e => setNum(e.target.value)}  
          />
        </label>

        <label >
          Age: 
          <input className="counter-age"
            type="text"
            value={count}
            readOnly
          />
          <button
            className="incdec"
            type="button"
            onClick={handleIncrement}
          >
            up
          </button>
          <button
            className="incdec"
            type="button"
            onClick={handleDecrement}
            style={{ marginLeft: '10px' }}
          >
            down
          </button>
        </label>

        <button className="submit" type="submit">Submit</button>
        {submitted && (
          <p>
            <hr/>
            Hello, {name}! <br />
            Student Number: {num} <br />
            Age: {count}
          </p>
        )}
      </div>
    </form>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {showWelcome && (
        <div className="popup-overlay">
          <WelcomeCard userName="Visitor" onClose={() => setShowWelcome(false)} />
        </div>
      )}
      <StudentInfoCard />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
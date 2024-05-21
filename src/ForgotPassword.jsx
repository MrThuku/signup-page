import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/api/forgot-password', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
    
          const data = await response.json();
          if (data.success) {
            alert('A reset code has been sent to your email address.');
          } else {
            alert('Failed to send reset code. Please try again.');
          }
        } catch (error) {
          alert('An error occurred. Please try again later.');
          console.error('Error sending reset code:', error);
        }
      };

  return (
    <div className='container contents'>

    <h2 > Forgot Password?</h2>

    <p> We will send you a verification code to reset your password, please enter the email associated with your account.

</p>
    
      <form onSubmit={handleSubmit}
       >
      <input type="email"
       placeholder="Enter your email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       required
      />
     {email.trim() ? (
      <Link to="/reset-password">
        <button type="submit">Send</button>
      </Link>
    ) : (
      <button type="submit" disabled>
        Send
      </button>
    )}
      
      </form> 
      
    </div>
  )
}

export default ForgotPassword
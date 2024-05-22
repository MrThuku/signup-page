import React, { useState } from 'react'

const ResetPassword = () => {

  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();

    if (Object.keys(validationErrors).length === 0) {
    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code, newPassword,}),
      });

      const data = await response.json();
    

      if (data.success) {
        alert('Password reset successfully.');
      } else {
        alert('Failed to reset password. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
      console.error('Error resetting password:', error);
    }
  }};
  const validateInputs = () => {
   // const errors = {};
    if (code.trim().length === 0) {
      alert('Please enter a reset code.');
    }
  }

  return (
    <div className=' container'>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter reset code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          
        />
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};


export default ResetPassword
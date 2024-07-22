import React, { useState } from 'react';
import axios from 'axios';

function VerificationForm({ onVerificationSent }) {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/send-code', { email, phoneNumber });
      onVerificationSent({ email, phoneNumber });
    } catch (error) {
      console.error('Error sending verification code', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Phone Number</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      </div>
      <button type="submit">Send Code</button>
    </form>
  );
}

export default VerificationForm;

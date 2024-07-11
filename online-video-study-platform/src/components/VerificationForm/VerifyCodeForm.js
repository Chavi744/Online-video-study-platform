import React, { useState } from 'react';
import axios from 'axios';

function VerifyCodeForm({ student, onVerificationSuccess }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/verify-code', { ...student, code });
      onVerificationSuccess();
    } catch (error) {
      setError('Invalid verification code');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Verification Code</label>
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} required />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Verify</button>
    </form>
  );
}

export default VerifyCodeForm;

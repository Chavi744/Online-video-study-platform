import React, { useState } from 'react';
import './Verification.css';
import VerificationForm from './VerificationForm.js';
import VerifyCodeForm from './VerifyCodeForm.js';

function Verification() {
  const [step, setStep] = useState(1);
  const [student, setStudent] = useState({ email: '', phoneNumber: '' });

  const handleVerificationSent = (studentDetails) => {
    setStudent(studentDetails);
    setStep(2);
  };

  const handleVerificationSuccess = () => {
    setStep(3);
  };

  return (
    <div className="Verification">
      {step === 1 && <VerificationForm onVerificationSent={handleVerificationSent} />}
      {step === 2 && <VerifyCodeForm student={student} onVerificationSuccess={handleVerificationSuccess} />}
      {step === 3 && <h2>Registration Completed Successfully!</h2>}
    </div>
  );
}

export default Verification;

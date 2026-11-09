import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import DobVerificationPage from './components/DobVerificationPage';
import InvitationPage from './components/InvitationPage';
import BirthdayCelebration from './components/BirthdayCelebration';
import ExperienceLayout from './components/ExperienceLayout';

export default function App() {
  const [isVerified, setIsVerified] = useState(() => {
    return sessionStorage.getItem('dob_verified') === 'true';
  });

  const handleVerifySuccess = () => {
    setIsVerified(true);
    sessionStorage.setItem('dob_verified', 'true');
  };

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route 
        path="/verify" 
        element={<DobVerificationPage onVerifySuccess={handleVerifySuccess} />} 
      />
      <Route 
        path="/invitation" 
        element={<InvitationPage />} 
      />
      <Route 
        path="/celebration" 
        element={<BirthdayCelebration />} 
      />
      <Route 
        path="/experience" 
        element={<ExperienceLayout />} 
      />
      {/* Fallback to welcome */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}


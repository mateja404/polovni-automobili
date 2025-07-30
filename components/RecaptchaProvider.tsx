"use client";

import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

interface RecaptchaProviderProps {
    children: React.ReactNode
}

const RecaptchaProvider: React.FC<RecaptchaProviderProps> = ({ children }) => {
  return (
    <div>RecaptchaProvider</div>
  )
}

export default RecaptchaProvider;
import React from 'react';
import { SignIn } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import './App.css';

export default function Login() {
  return (
    <div className="auth-page">
      {/* Cinematic Background Video */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/lumiere-bg.mp4" type="video/mp4" />
      </video>
      
      <div className="video-overlay"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="auth-content"
      >
        <h1 className="brand-title">LUMIÈRE</h1>
        
        <SignIn 
          appearance={{
            elements: {
              card: "cl-card",
              headerTitle: "cl-headerTitle",
              headerSubtitle: "cl-headerSubtitle",
              socialButtonsBlockButton: "cl-socialButtonsBlockButton",
              formButtonPrimary: "cl-formButtonPrimary",
              footerActionLink: "cl-footerActionLink",
              formFieldLabel: "cl-formFieldLabel",
              formFieldInput: "cl-formFieldInput",
              dividerLine: "bg-white/10",
              dividerText: "text-slate-400"
            }
          }}
          signUpUrl="/signup"
        />
      </motion.div>

      {/* Footer Branding */}
      <div style={{ position: 'absolute', bottom: '30px', color: 'rgba(255,255,255,0.3)', fontSize: '12px', letterSpacing: '2px', zIndex: 10 }}>
        © 2026 LUMIÈRE AI CINEMA · ALL RIGHTS RESERVED
      </div>
    </div>
  );
}
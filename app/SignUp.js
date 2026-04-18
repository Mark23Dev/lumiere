import React from 'react';
import { motion } from "framer-motion";
import './App.css';

export default function SignUpPage() {
  return (
    <div className="auth-page">
      {/* ተመሳሳይ የጀርባ ቪዲዮ (ለአንድነት) */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/lumiere-bg.mp4" type="video/mp4" />
      </video>
      
      <div className="video-overlay"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="auth-content"
      >
        <h1 className="brand-title">LUMIÈRE</h1>
        
        <div className="temporary-card">
          <h2 style={{ color: 'white', marginBottom: '10px' }}>Create Account</h2>
          <p style={{ color: '#94a3b8', marginBottom: '20px', fontSize: '14px' }}>
            Join the future of AI cinema today.
          </p>

          <div className="input-group">
            <input type="text" placeholder="Full Name" className="temp-input" />
            <input type="email" placeholder="Email Address" className="temp-input" />
            <input type="password" placeholder="Create Password" className="temp-input" />
          </div>

          <div className="perks-list" style={{ textAlign: 'left', marginBottom: '20px' }}>
            <div style={{ color: '#EAB308', fontSize: '12px', marginBottom: '5px' }}>✓ Unlimited AI Movie Trailers</div>
            <div style={{ color: '#EAB308', fontSize: '12px', marginBottom: '5px' }}>✓ Personal AI Matchmaker</div>
            <div style={{ color: '#EAB308', fontSize: '12px' }}>✓ Watch Parties with Friends</div>
          </div>

          <button className="temp-button">Start Watching</button>
          
          <div style={{ marginTop: '20px', color: '#94a3b8', fontSize: '14px' }}>
            Already have an account? <span style={{ color: '#EAB308', cursor: 'pointer' }}>Sign in</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
  <div className="genre-selection" style={{ marginTop: '20px' }}>
  <p style={{ color: '#94a3b8', fontSize: '12px', marginBottom: '10px' }}>Select your favorite genres:</p>
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
    {['Action', 'Sci-Fi', 'Horror', 'Drama'].map((genre) => (
      <span key={genre} style={{
        padding: '5px 12px',
        border: '1px solid #EAB308',
        borderRadius: '20px',
        fontSize: '11px',
        color: '#EAB308',
        cursor: 'pointer'
      }}>
        {genre}
      </span>
    ))}
  </div>
</div>
}
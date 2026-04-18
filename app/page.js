"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const bgImages = [
  '/poster1.png', '/poster2.png', '/poster3.png', '/poster4.png', '/poster5.png',
  '/poster6.png', '/poster7.png', '/poster8.png', '/poster9.png', '/poster10.png'
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true); 
  const [isLogin, setIsLogin] = useState(true);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const genres = ['Action', 'Sci-Fi', 'Horror', 'Drama', 'Comedy', 'Thriller', 'Animation', 'Fantasy'];

  useEffect(() => {
    // ከ 4.5 ሰከንድ በኋላ ኢንትሮው እንዲጠፋና ዋናው ገጽ እንዲመጣ
    const introTimer = setTimeout(() => setShowIntro(false), 4500);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
    }, 7000);
    
    return () => {
      clearTimeout(introTimer);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const toggleGenre = (genre) => {
    setSelectedGenres(prev => 
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  return (
    <div className="auth-container">
      <AnimatePresence mode="wait">
        {showIntro ? (
          /* --- Cinema Style Typing Intro --- */
          <motion.div 
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(15px)" }}
            transition={{ duration: 1.2 }}
            className="intro-overlay"
          >
            <motion.div className="intro-text-wrapper">
              <motion.h2
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="typing-text"
              >
                THIS IS LUMIÈRE AI MOVIE RECOMMENDATION SITE
              </motion.h2>
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="typing-cursor"
              />
            </motion.div>
          </motion.div>
        ) : (
          /* --- Main Content (Login Page) --- */
          <motion.div 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ width: '100%', height: '100%' }}
          >
            {/* Dynamic Mouse Light */}
            <motion.div 
              className="mouse-glow"
              animate={{ 
                x: mousePos.x - 150, 
                y: mousePos.y - 150,
                opacity: [0.1, 0.15, 0.1] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Cinematic Background */}
            <div className="slideshow-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 0.35, scale: 1.05 }} 
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 4, ease: "easeInOut" }} 
                  className="slideshow-image"
                  style={{ backgroundImage: `url(${bgImages[currentImageIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
              </AnimatePresence>
              <div className="overlay-dark cinematic-vignette"></div>
            </div>

            <div className="content-scroller">
              <div className="inner-flex-container">
                
                <div className="logo-wrapper">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.h1 
                      initial={{ opacity: 0, letterSpacing: "20px" }} 
                      animate={{ opacity: 1, letterSpacing: "14px" }} 
                      className="main-logo clickable-logo"
                    >
                      LUMIÈRE
                    </motion.h1>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="logo-underline"
                    />
                  </motion.div>
                </div>

                <AnimatePresence mode="wait">
                  {isLogin ? (
                    <motion.div 
                      key="login" 
                      initial={{ opacity: 0, y: 30 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, scale: 0.95 }} 
                      className="glass-card premium-border"
                    >
                      <h2 className="card-heading">Welcome Back</h2>
                      
                      <div className="social-auth-stack">
                        <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="auth-provider-btn google">
                          <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
                          Google
                        </motion.button>
                        <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="auth-provider-btn facebook">
                          <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
                          Facebook
                        </motion.button>
                      </div>

                      <div className="social-divider">
                        <div className="line"></div> <span>OR USE EMAIL</span> <div className="line"></div>
                      </div>

                      <div className="fields-stack">
                        <input type="email" placeholder="Email Address" className="cinema-field" />
                        <input type="password" placeholder="Password" className="cinema-field" />
                      </div>
                      
                      <motion.button 
                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(234, 179, 8, 0.4)" }} 
                        className="btn-gold"
                      >
                        Login
                      </motion.button>
                      
                      <p className="toggle-msg">Create new account? <span onClick={() => setIsLogin(false)}>SignUp</span></p>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="signup" 
                      initial={{ opacity: 0, y: 30 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, scale: 0.95 }} 
                      className="glass-card premium-border"
                    >
                      <h2 className="card-heading">Join In</h2>
                      <div className="fields-stack">
                        <input type="text" placeholder="Full Name" className="cinema-field" />
                        <input type="email" placeholder="Email Address" className="cinema-field" />
                        <input type="password" placeholder="Password" className="cinema-field" />
                      </div>
                      <div className="genre-wrapper">
                        <label className="label-gold">SELECT YOUR VIBE</label>
                        <div className="genre-flex">
                          {genres.map(g => (
                            <motion.div 
                              key={g} 
                              whileHover={{ scale: 1.1, y: -2 }}
                              className={`tag ${selectedGenres.includes(g) ? 'active' : ''}`}
                              onClick={() => toggleGenre(g)} 
                            >
                              {g}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <motion.button whileHover={{ scale: 1.02 }} className="btn-gold">Create account</motion.button>
                      <p className="toggle-msg">Already have an account? <span onClick={() => setIsLogin(true)}>Sign In</span></p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="scroll-indicator">
                  <motion.div 
                    animate={{ y: [0, 10, 0] }} 
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="mouse-icon"
                  />
                </div>

                <footer className="cinema-footer" style={{ marginTop: '40px' }}>
                   © 2026 LUMIÈRE AI CINEMA · ALL RIGHTS RESERVED
                </footer>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
      
      // Hide message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
      <div className="card" style={{
        textAlign: 'center',
        marginBottom: '3rem',
        background: 'linear-gradient(135deg, rgba(239, 43, 45, 0.05) 0%, rgba(255,255,255,0.02) 100%)',
        borderColor: 'rgba(239, 43, 45, 0.2)'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 3rem)',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ef2b2d, #ff6b6b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Get in Touch
        </h1>
        <p className="muted" style={{ fontSize: '1.1rem', marginBottom: 0 }}>
          Have questions about PorscheForYou? We'd love to hear from you!
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        maxWidth: '1000px',
        margin: '0 auto',
        marginBottom: '3rem'
      }}>
        <div style={{ animation: 'slideInLeft 0.6s ease-out 0.1s both' }}>
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#ef2b2d' }}>📧 Email</h3>
            <p className="muted">
              <a href="mailto:justinace.ardena@wvsu.edu.ph" style={{
                color: '#06b6d4',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                cursor: 'pointer'
              }} onMouseEnter={(e) => e.target.style.color = '#ffd700'} 
                 onMouseLeave={(e) => e.target.style.color = '#06b6d4'}>
                justinace.ardena@wvsu.edu.ph
              </a>
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0, color: '#06b6d4' }}>⏰ Response Time</h3>
            <p className="muted">
              We typically respond to all inquiries within 24 hours during business days.
            </p>
          </div>
        </div>

        <div style={{ animation: 'slideInRight 0.6s ease-out 0.1s both' }}>
          <form onSubmit={handleSubmit} className="card" style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)'
          }}>
            {submitted && (
              <div style={{
                background: 'rgba(34, 197, 94, 0.1)',
                border: '2px solid rgba(34, 197, 94, 0.5)',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                color: '#86efac',
                textAlign: 'center',
                animation: 'slideInUp 0.4s ease-out'
              }}>
                ✓ Thank you! We've received your message and will get back to you soon.
              </div>
            )}

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: '#e2e8f0'
              }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.08)';
                  e.target.style.borderColor = 'rgba(239, 43, 45, 0.5)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.05)';
                  e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: '#e2e8f0'
              }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.08)';
                  e.target.style.borderColor = 'rgba(239, 43, 45, 0.5)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.05)';
                  e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: '#e2e8f0'
              }}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.08)';
                  e.target.style.borderColor = 'rgba(239, 43, 45, 0.5)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.05)';
                  e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: '#e2e8f0'
              }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  minHeight: '120px'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.08)';
                  e.target.style.borderColor = 'rgba(239, 43, 45, 0.5)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.05)';
                  e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{
                width: '100%',
                fontSize: '1rem',
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'default' : 'pointer'
              }}
            >
              {loading ? '✓ Sending...' : 'Send Message '}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          [style*="display: grid"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

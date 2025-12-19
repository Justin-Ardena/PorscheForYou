'use client';

import { use, useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { porsches, matchingExplanations } from '@/lib/porscheData';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ResultPage({ params }: PageProps) {
  const { id } = use(params);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Get the user's name from the last result in localStorage
    const results = JSON.parse(localStorage.getItem('pf-results') || '[]');
    if (results.length > 0) {
      setUserName(results[results.length - 1].userName || '');
    }
  }, []);

  const porsche = porsches.find(p => p.id === id);

  if (!porsche) {
    notFound();
  }

  const explanation = matchingExplanations[id];

  return (
    <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
      <div className="card" style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: `linear-gradient(135deg, rgba(${hexToRgb(porsche.color)}, 0.05) 0%, rgba(255,255,255,0.02) 100%)`,
        borderColor: porsche.color + '40',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          marginBottom: '0.5rem',
          color: porsche.color,
          animation: 'slideInRight 0.6s ease-out'
        }}>
          🎉 Perfect Match Found!
        </h1>
        {userName && (
          <p style={{
            fontSize: '1.3rem',
            fontWeight: 600,
            color: '#ffd700',
            marginBottom: '1rem',
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}>
            Welcome, {userName}!
          </p>
        )}
        <p className="muted" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Your personality aligns perfectly with...
        </p>

        <div style={{
          fontSize: '5rem',
          marginBottom: '1.5rem',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          🏎️
        </div>

        <h2 style={{
          fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
          color: porsche.color,
          marginBottom: '0.5rem',
          fontWeight: 800
        }}>
          {porsche.name}
        </h2>

        <p style={{
          fontSize: '1.1rem',
          color: '#94a3b8',
          marginBottom: '2rem',
          fontWeight: 500
        }}>
          {porsche.model} • {porsche.personality}
        </p>

        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: `2px solid ${porsche.color}40`,
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem',
          lineHeight: 1.8
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: '#e2e8f0',
            margin: 0
          }}>
            {explanation}
          </p>
        </div>

        <div className="card" style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.1)',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#ffd700' }}>Key Characteristics</h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center'
          }}>
            {porsche.traits.map((trait, idx) => (
              <span
                key={idx}
                style={{
                  background: `linear-gradient(135deg, ${porsche.color}20, ${porsche.color}05)`,
                  border: `1px solid ${porsche.color}60`,
                  color: porsche.color,
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  animation: `slideInUp 0.6s ease-out ${idx * 0.1}s both`
                }}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        <div className="card" style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.1)',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginTop: 0 }}>About Your Porsche</h3>
          <p style={{ margin: 0, color: '#cbd5e1', lineHeight: 1.7 }}>
            {porsche.description}
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '2rem'
        }}>
          <Link href="/results" className="btn btn-primary">
            See Community Results 👥
          </Link>
          <Link href="/quiz" className="btn btn-secondary">
            Retake Quiz 🔄
          </Link>
          <Link href="/" className="btn btn-secondary">
            Back to Home 
          </Link>
        </div>
      </div>

      <style>{`
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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
  }
  return '239, 43, 45';
}

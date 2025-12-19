'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { quizQuestions, porsches } from '@/lib/porscheData';
import { trackEvent, trackPorscheMatch } from '@/lib/analytics';

export default function Quiz() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [answered, setAnswered] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const handleStartQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      trackEvent('quiz_started', 'engagement', userName);
      setQuizStarted(true);
    }
  };

  const handleAnswer = (porscheId: string) => {
    setAnswered(true);
    setScores(prev => ({
      ...prev,
      [porscheId]: (prev[porscheId] || 0) + 1
    }));

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setAnimateOut(true);
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setAnswered(false);
          setAnimateOut(false);
        }, 300);
      } else {
        // Quiz complete - save results and redirect
        const winner = Object.entries(scores).reduce((a, b) => 
          (b[1] > a[1]) ? b : a
        )[0];
        
        const winnerName = porsches.find(p => p.id === winner)?.name || 'Unknown';
        
        // Track quiz completion
        trackEvent('quiz_completed', 'engagement', winnerName);
        trackPorscheMatch(winner, winnerName, userName);
        
        // Save to localStorage
        const results = JSON.parse(localStorage.getItem('pf-results') || '[]');
        results.push({
          userName: userName,
          porscheId: winner,
          timestamp: new Date().toISOString(),
          porscheName: winnerName
        });
        localStorage.setItem('pf-results', JSON.stringify(results));
        
        router.push(`/result/${winner}`);
      }
    }, 500);
  };

  // Show name input screen
  if (!quizStarted) {
    return (
      <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
        <div className="card" style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 6vw, 2.5rem)',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ef2b2d, #ffd700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Welcome to PorscheForYou!
          </h1>

          <p className="muted" style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>
            Before we find your perfect Porsche match, let's start with your name!
          </p>

          <form onSubmit={handleStartQuiz} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <label style={{
                fontWeight: 500,
                color: '#e2e8f0',
                fontSize: '1rem',
                textAlign: 'left'
              }}>
                What's your name?
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
                autoFocus
                style={{
                  padding: '0.875rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '2px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit'
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
              disabled={!userName.trim()}
              className="btn btn-primary"
              style={{
                fontSize: '1.1rem',
                padding: '1rem 2rem',
                opacity: !userName.trim() ? 0.5 : 1,
                cursor: !userName.trim() ? 'not-allowed' : 'pointer'
              }}
            >
              Start Quiz
            </button>
          </form>

          <p className="muted" style={{
            marginTop: '2rem',
            fontSize: '0.95rem'
          }}>
            Your name will appear in the community results so others can see who you matched with!
          </p>
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
        `}</style>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div style={{ animation: animateOut ? 'fadeOut 0.3s ease-out' : 'fadeInUp 0.6s ease-out' }}>
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
              Question {currentQuestion + 1} of {quizQuestions.length}
            </h2>
            <span style={{
              fontSize: '0.9rem',
              color: '#ffd700',
              fontWeight: 'bold'
            }}>
              {Math.round(progress)}%
            </span>
          </div>

          <div style={{
            width: '100%',
            height: '8px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #ef2b2d, #ffd700)',
              transition: 'width 0.5s ease-out',
              borderRadius: '4px'
            }} />
          </div>
        </div>

        <h3 style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
          marginBottom: '2rem',
          lineHeight: 1.4,
          color: '#f8fafc'
        }}>
          {question.question}
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          {question.answers.map((answer, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(answer.porscheId)}
              disabled={answered}
              className="answer-btn"
              style={{
                padding: '1.25rem',
                background: 'rgba(255,255,255,0.05)',
                border: '2px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                color: '#f8fafc',
                cursor: answered ? 'default' : 'pointer',
                fontSize: '1rem',
                fontWeight: 500,
                transition: 'all 0.3s ease',
                opacity: answered ? 0.6 : 1,
                transform: answered ? 'none' : 'scale(1)',
              }}
              onMouseEnter={(e) => {
                if (!answered) {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.02)';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(239, 43, 45, 0.5)';
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239, 43, 45, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (!answered) {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)';
                }
              }}
            >
              {answer.text}
            </button>
          ))}
        </div>

        {answered && (
          <div style={{
            marginTop: '2rem',
            textAlign: 'center',
            animation: 'fadeInUp 0.4s ease-out'
          }}>
            <p className="muted">
              {currentQuestion < quizQuestions.length - 1 
                ? 'Next question coming...' 
                : 'Analyzing your results...'}
            </p>
          </div>
        )}
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

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .answer-btn:hover:not(:disabled) {
          border-color: rgba(239, 43, 45, 0.5);
          background: rgba(239, 43, 45, 0.1);
        }

        .answer-btn:active:not(:disabled) {
          transform: scale(0.98) !important;
        }
      `}</style>
    </div>
  );
}

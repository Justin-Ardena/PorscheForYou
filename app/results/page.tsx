'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { porsches } from '@/lib/porscheData';
import { trackEvent, getAnalyticsSummary } from '@/lib/analytics';
import { BarChart, PieChart, LineChart } from '@/lib/charts';

interface UserResult {
  porscheId: string;
  porscheName: string;
  timestamp: string;
  userName?: string;
  id?: string;
}

export default function ResultsPage() {
  const [results, setResults] = useState<UserResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load results from Firebase
    getAnalyticsSummary((data) => {
      if (data && data.matches && data.matches.length > 0) {
        const firebaseResults = data.matches.map((match: any) => ({
          porscheId: match.porscheId,
          porscheName: match.porscheName,
          userName: match.userName,
          timestamp: match.timestamp,
          id: match.id
        }));
        setResults(firebaseResults);
      } else {
        // Fallback to localStorage if Firebase fails
        const stored = localStorage.getItem('pf-results');
        if (stored) {
          try {
            setResults(JSON.parse(stored));
          } catch (e) {
            console.error('Error loading results:', e);
          }
        }
      }
      setLoading(false);
    });
  }, []);

  // Count matches
  const matchCounts = results.reduce((acc, result) => {
    acc[result.porscheId] = (acc[result.porscheId] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Get sorted porsches by popularity
  const sortedPorsches = porsches.sort((a, b) => {
    return (matchCounts[b.id] || 0) - (matchCounts[a.id] || 0);
  });

  const totalMatches = results.length;

  // Calculate analytics stats
  const avgTimePerMatch = results.length > 0 
    ? Math.round(results.reduce((sum, r) => sum + 1, 0) / Math.max(1, results.length) * 100) 
    : 0;
  const uniqueUsers = new Set(results.map(r => r.userName)).size;

  useEffect(() => {
    trackEvent('results_page_viewed', 'engagement', 'community_results');
  }, []);

  return (
    <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
      <div className="card" style={{
        textAlign: 'center',
        marginBottom: '3rem',
        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(239, 43, 45, 0.05) 100%)',
        borderColor: 'rgba(255, 215, 0, 0.3)'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 3rem)',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ffd700, #ef2b2d)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Porsche Community Results
        </h1>
        <p className="muted" style={{ fontSize: '1.1rem', marginBottom: '0' }}>
          {totalMatches === 0 
            ? 'Be the first to take the quiz and join our community!' 
            : `${totalMatches} enthusiasts have found their perfect match`}
        </p>
      </div>

      {/* Analytics Dashboard */}
      {totalMatches > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          <div className="card" style={{
            background: 'linear-gradient(135deg, rgba(239, 43, 45, 0.1) 0%, rgba(239, 43, 45, 0.05) 100%)',
            border: '1px solid rgba(239, 43, 45, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#ffd700',
              marginBottom: '0.5rem'
            }}>
              {totalMatches}
            </div>
            <div style={{
              fontSize: '0.95rem',
              color: '#cbd5e1'
            }}>
              Total Matches
            </div>
          </div>

          <div className="card" style={{
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#ef2b2d',
              marginBottom: '0.5rem'
            }}>
              {uniqueUsers}
            </div>
            <div style={{
              fontSize: '0.95rem',
              color: '#cbd5e1'
            }}>
              Unique Players
            </div>
          </div>

          <div className="card" style={{
            background: 'linear-gradient(135deg, rgba(100, 200, 255, 0.1) 0%, rgba(100, 200, 255, 0.05) 100%)',
            border: '1px solid rgba(100, 200, 255, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#64c8ff',
              marginBottom: '0.5rem'
            }}>
              {porsches.length}
            </div>
            <div style={{
              fontSize: '0.95rem',
              color: '#cbd5e1'
            }}>
              Porsche Models
            </div>
          </div>

          <div className="card" style={{
            background: 'linear-gradient(135deg, rgba(100, 255, 150, 0.1) 0%, rgba(100, 255, 150, 0.05) 100%)',
            border: '1px solid rgba(100, 255, 150, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#64ff96',
              marginBottom: '0.5rem'
            }}>
              {Math.round(totalMatches / Math.max(1, uniqueUsers) * 10) / 10}
            </div>
            <div style={{
              fontSize: '0.95rem',
              color: '#cbd5e1'
            }}>
              Avg Matches/User
            </div>
          </div>
        </div>
      )}

      {/* Charts Section */}
      {totalMatches > 0 && (
        <div style={{
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem'
          }}>
            {/* Bar Chart - Porsche Popularity */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255, 215, 0, 0.1)'
            }}>
              <BarChart
                title="Porsche Popularity"
                data={sortedPorsches
                  .filter(p => matchCounts[p.id] > 0)
                  .slice(0, 8)
                  .map(p => ({
                    label: p.name,
                    value: matchCounts[p.id] || 0,
                    color: p.color
                  }))}
              />
            </div>

            {/* Pie Chart - Match Distribution */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255, 215, 0, 0.1)'
            }}>
              <PieChart
                title="Match Distribution (Top 5)"
                data={sortedPorsches
                  .slice(0, 5)
                  .map(p => ({
                    label: p.name,
                    value: matchCounts[p.id] || 0,
                    color: p.color
                  }))}
              />
            </div>
          </div>

          {/* Line Chart - Matches Over Time */}
          <div className="card" style={{
            marginTop: '2rem',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            border: '1px solid rgba(255, 215, 0, 0.1)'
          }}>
            <LineChart
              title="Community Growth Over Time"
              data={results.map((r, idx) => ({
                timestamp: r.timestamp,
                value: idx + 1
              }))}
              color="#ef2b2d"
            />
          </div>
        </div>
      )}

      {totalMatches === 0 ? (
        <div className="card" style={{
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '2rem' }}>
            The community results will appear here as people take the quiz. Be the first to start!
          </p>
          <Link href="/quiz" className="btn btn-primary">
            Take the Quiz 
          </Link>
        </div>
      ) : (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {sortedPorsches.map((porsche, idx) => {
              const count = matchCounts[porsche.id] || 0;
              const percentage = (count / totalMatches) * 100;
              const isPopular = count === Math.max(...Object.values(matchCounts), 0) && count > 0;

              return (
                <Link
                  key={porsche.id}
                  href={`/result/${porsche.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="card"
                    style={{
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      background: `linear-gradient(135deg, rgba(${hexToRgb(porsche.color)}, 0.05) 0%, rgba(255,255,255,0.01) 100%)`,
                      borderColor: count > 0 ? porsche.color + '40' : 'rgba(255,255,255,0.1)',
                      borderWidth: isPopular ? '2px' : '1px',
                      transition: 'all 0.3s ease',
                      animation: `slideInUp 0.6s ease-out ${idx * 0.1}s both`
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = 'translateY(-8px)';
                      el.style.borderColor = porsche.color + '80';
                      el.style.boxShadow = `0 16px 48px ${porsche.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = 'translateY(0)';
                      el.style.borderColor = count > 0 ? porsche.color + '40' : 'rgba(255,255,255,0.1)';
                      el.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                    }}
                  >
                    {/* Porsche Car Image */}
                    <div style={{
                      width: '100%',
                      height: '200px',
                      marginBottom: '1.5rem',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.05))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img
                        src={porsche.image}
                        alt={porsche.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </div>

                    {isPopular && (
                      <div style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                        color: '#000',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        zIndex: 10
                      }}>
                        🏆 Most Popular
                      </div>
                    )}

                    <h3 style={{
                      color: porsche.color,
                      fontSize: '1.5rem',
                      marginBottom: '0.5rem',
                      marginTop: 0
                    }}>
                      {porsche.name}
                    </h3>

                    <p className="muted" style={{
                      fontSize: '0.95rem',
                      marginBottom: '1.5rem'
                    }}>
                      {porsche.personality}
                    </p>

                    <div style={{
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.5rem'
                      }}>
                        <span style={{
                          color: '#94a3b8',
                          fontSize: '0.9rem'
                        }}>
                          Community Matches
                        </span>
                        <span style={{
                          color: porsche.color,
                          fontWeight: 'bold',
                          fontSize: '1.1rem'
                        }}>
                          {count} {count === 1 ? 'match' : 'matches'}
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
                          width: `${percentage}%`,
                          height: '100%',
                          background: `linear-gradient(90deg, ${porsche.color}, ${porsche.color}cc)`,
                          transition: 'width 0.5s ease-out',
                          borderRadius: '4px'
                        }} />
                      </div>

                      <p className="muted" style={{
                        fontSize: '0.85rem',
                        marginTop: '0.5rem',
                        margin: '0.5rem 0 0 0'
                      }}>
                        {percentage.toFixed(1)}% of matches
                      </p>
                    </div>

                    <p style={{
                      fontSize: '0.95rem',
                      color: '#cbd5e1',
                      lineHeight: 1.5,
                      margin: 0
                    }}>
                      {porsche.description.substring(0, 80)}...
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="card" style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(239, 43, 45, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
            borderColor: 'rgba(239, 43, 45, 0.2)',
            marginBottom: '3rem'
          }}>
            <h2 style={{ marginTop: 0, color: '#ffd700' }}>👥 All Community Members & Their Matches</h2>
            <p className="muted" style={{ marginBottom: '1.5rem' }}>
              See who's joined our Porsche community and their perfect matches!
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              maxHeight: '500px',
              overflowY: 'auto',
              paddingRight: '0.5rem'
            }}>
              {results.slice().reverse().map((result, idx) => {
                const matchedPorsche = porsches.find(p => p.id === result.porscheId);
                return (
                  <div
                    key={idx}
                    style={{
                      background: `linear-gradient(135deg, rgba(${hexToRgb(matchedPorsche?.color || '#ef2b2d')}, 0.08) 0%, rgba(255,255,255,0.02) 100%)`,
                      border: `1px solid rgba(${hexToRgb(matchedPorsche?.color || '#ef2b2d')}, 0.2)`,
                      borderRadius: '10px',
                      padding: '0.875rem 1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      animation: `fadeInUp 0.6s ease-out ${(idx % 10) * 0.05}s both`,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.background = `linear-gradient(135deg, rgba(${hexToRgb(matchedPorsche?.color || '#ef2b2d')}, 0.12) 0%, rgba(255,255,255,0.04) 100%)`;
                      el.style.borderColor = `rgba(${hexToRgb(matchedPorsche?.color || '#ef2b2d')}, 0.4)`;
                      el.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.background = `linear-gradient(135deg, rgba(${hexToRgb(matchedPorsche?.color || '#ef2b2d')}, 0.08) 0%, rgba(255,255,255,0.02) 100%)`;
                      el.style.borderColor = `rgba(${hexToRgb(matchedPorsche?.color || '#ef2b2d')}, 0.2)`;
                      el.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      flex: 1
                    }}>
                      <span style={{
                        fontSize: '1.2rem'
                      }}>
                        👤
                      </span>
                      <span style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#e2e8f0'
                      }}>
                        {result.userName ? result.userName : 'Mystery Enthusiast'}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <span style={{
                        fontSize: '0.85rem',
                        color: '#94a3b8'
                      }}>
                        matched with
                      </span>
                      <span style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: matchedPorsche?.color || '#ef2b2d',
                        background: `rgba(${hexToRgb(matchedPorsche?.color || '#ef2b2d')}, 0.15)`,
                        padding: '0.25rem 0.75rem',
                        borderRadius: '8px'
                      }}>
                        {result.porscheName}
                      </span>
                      <span style={{
                        fontSize: '1rem'
                      }}>
                        🏎️
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="muted" style={{ 
              marginTop: '1.5rem', 
              marginBottom: 0,
              fontSize: '0.9rem'
            }}>
              Total members: {results.length} enthusiasts strong! ⚡
            </p>
          </div>

          <div className="card" style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(239, 43, 45, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
            borderColor: 'rgba(239, 43, 45, 0.2)'
          }}>
            <h2 style={{ marginTop: 0 }}>Join the Community!</h2>
            <p className="muted" style={{ marginBottom: '2rem' }}>
              Haven't found your match yet? Take the quiz to see which Porsche is perfect for you.
            </p>
            <Link href="/quiz" className="btn btn-primary">
              Start the Quiz 
            </Link>
          </div>
        </>
      )}

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

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
  }
  return '239, 43, 45';
}

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero" style={{
        textAlign: 'center',
        marginBottom: '4rem',
        animation: 'fadeInUp 0.8s ease-out'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 4rem)',
          marginBottom: '1rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #ef2b2d, #ffd700)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1.2
        }}>
          Find Your Perfect Porsche
        </h1>
        <p className="muted" style={{
          fontSize: 'clamp(1rem, 3vw, 1.25rem)',
          maxWidth: '600px',
          margin: '0 auto 2rem',
          lineHeight: 1.6,
          animation: 'fadeInUp 0.8s ease-out 0.1s both'
        }}>
          Answer 10 simple questions and discover which Porsche matches your personality, lifestyle, and driving style. Join thousands of enthusiasts in our global Porsche community.
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'fadeInUp 0.8s ease-out 0.2s both'
        }}>
          <Link href="/quiz" className="btn btn-primary" style={{
            fontSize: '1.1rem',
            padding: '1rem 2.5rem'
          }}>
            Start the Quiz
          </Link>
          <Link href="/results" className="btn btn-secondary" style={{
            fontSize: '1.1rem',
            padding: '1rem 2.5rem'
          }}>
            See Results
          </Link>
        </div>
      </section>

      <section className="features" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem'
      }}>
        <div className="card" style={{
          animation: 'slideInRight 0.6s ease-out 0.1s both'
        }}>
          <h3 style={{
            color: '#ef2b2d',
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>
            🎯 Personalized Matching
          </h3>
          <p className="muted">
            Our intelligent algorithm analyzes your answers to match you with the perfect Porsche model that aligns with your personality and preferences.
          </p>
        </div>

        <div className="card" style={{
          animation: 'slideInRight 0.6s ease-out 0.2s both'
        }}>
          <h3 style={{
            color: '#ffd700',
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>
            🌍 Global Community
          </h3>
          <p className="muted">
            Connect with thousands of Porsche enthusiasts worldwide. See what others are matched with and discover common ground with fellow lovers of performance and precision.
          </p>
        </div>

        <div className="card" style={{
          animation: 'slideInRight 0.6s ease-out 0.3s both'
        }}>
          <h3 style={{
            color: '#06b6d4',
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>
            ⚡ Expert Insights
          </h3>
          <p className="muted">
            Get detailed explanations for why you're matched with your specific Porsche. Understand the connection between your personality and your perfect car.
          </p>
        </div>
      </section>

      <section className="cta card" style={{
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(239, 43, 45, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
        border: '1px solid rgba(239, 43, 45, 0.2)',
        animation: 'fadeInUp 0.8s ease-out 0.4s both'
      }}>
        <h2 style={{
          marginBottom: '1rem',
          fontSize: 'clamp(1.5rem, 5vw, 2rem)'
        }}>
          Ready to Find Your Match?
        </h2>
        <p className="muted" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
          It only takes 5 minutes. Begin your journey to finding your perfect Porsche today.
        </p>
        <Link href="/quiz" className="btn btn-primary" style={{
          fontSize: '1.1rem',
          padding: '1rem 2.5rem'
        }}>
          Begin Quiz Now
        </Link>
      </section>

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

        .hero {
          padding-top: 2rem;
        }

        .features .card {
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .features .card:hover {
          transform: translateY(-8px);
          border: 1px solid rgba(239, 43, 45, 0.3);
          background: linear-gradient(135deg, rgba(239, 43, 45, 0.05) 0%, rgba(255, 215, 0, 0.02) 100%);
        }

        .features h3 {
          margin-top: 0;
        }
      `}</style>
    </>
  );
}

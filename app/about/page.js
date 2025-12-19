import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
      <div className="card" style={{
        textAlign: 'center',
        marginBottom: '3rem',
        background: 'linear-gradient(135deg, rgba(106, 172, 239, 0.05) 0%, rgba(255,255,255,0.02) 100%)',
        borderColor: 'rgba(6, 182, 212, 0.2)'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 3rem)',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          About PorscheForYou
        </h1>
        <p className="muted" style={{ fontSize: '1.1rem', marginBottom: 0 }}>
          Discover the intersection of personality and performance
        </p>
      </div>

      <div className="card" style={{
        maxWidth: '900px',
        margin: '0 auto 2rem',
        animation: 'slideInUp 0.6s ease-out 0.1s both'
      }}>
        <h2 style={{ marginTop: 0, color: '#ffd700' }}>Our Mission</h2>
        <p style={{ lineHeight: 1.8, color: '#cbd5e1' }}>
          PorscheForYou is more than just a quiz it's a celebration of the deep connection between 
          personality and automotive passion. We believe that every Porsche enthusiast has a perfect 
          match within the legendary lineup. Through our intelligent matching algorithm, we help you 
          discover which Porsche embodies your driving style, values, and dreams.
        </p>
      </div>

      <div className="card" style={{
        maxWidth: '900px',
        margin: '0 auto 2rem',
        animation: 'slideInUp 0.6s ease-out 0.2s both'
      }}>
        <h2 style={{ marginTop: 0, color: '#ffd700' }}>How It Works</h2>
        <p style={{ lineHeight: 1.8, color: '#cbd5e1' }}>
          Our scientific approach combines psychology, automotive expertise, and data analysis to 
          match you with your ideal Porsche. By answering just 10 thoughtful questions about your 
          lifestyle, personality, and driving preferences, our algorithm analyzes your responses 
          against the characteristics of each Porsche model.
        </p>
        
        <p style={{ marginTop: '2rem', lineHeight: 1.8, color: '#cbd5e1' }}>
          The result? A personalized match that explains not just which Porsche you're paired with, 
          but why that specific model aligns perfectly with who you are.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <div className="card" style={{
          animation: 'slideInUp 0.6s ease-out 0.3s both'
        }}>
          <h3 style={{ color: '#ef2b2d', marginTop: 0 }}>🎯 Precision Matching</h3>
          <p className="muted">
            Our algorithm carefully analyzes your answers to match you with the Porsche that best 
            represents your personality and driving aspirations.
          </p>
        </div>

        <div className="card" style={{
          animation: 'slideInUp 0.6s ease-out 0.4s both'
        }}>
          <h3 style={{ color: '#ffd700', marginTop: 0 }}>📊 Data-Driven</h3>
          <p className="muted">
            We've studied Porsche models, their characteristics, and what drives their passionate 
            owners to create a truly scientific matching experience.
          </p>
        </div>

        <div className="card" style={{
          animation: 'slideInUp 0.6s ease-out 0.5s both'
        }}>
          <h3 style={{ color: '#06b6d4', marginTop: 0 }}>🌍 Community Focused</h3>
          <p className="muted">
            Join thousands of Porsche enthusiasts worldwide. See what others are matched with and 
            connect with like-minded passionate drivers.
          </p>
        </div>
      </div>

      <div className="card" style={{
        maxWidth: '900px',
        margin: '0 auto 2rem',
        animation: 'slideInUp 0.6s ease-out 0.6s both'
      }}>
        <h2 style={{ marginTop: 0, color: '#ffd700' }}>The Porsche Lineup</h2>
        <p style={{ lineHeight: 1.8, color: '#cbd5e1' }}>
          From the iconic 911 Turbo to the innovative Taycan, from the agile Cayman GT4 to the 
          luxurious Panamera we've included Porsche's most compelling models. Each represents a 
          different philosophy, lifestyle, and set of values. Whether you're drawn to raw power, 
          cutting-edge technology, precision handling, or sustainable innovation, there's a perfect 
          Porsche waiting for you.
        </p>
      </div>

      <div className="card" style={{
        background: 'linear-gradient(135deg, rgba(239, 43, 45, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
        borderColor: 'rgba(239, 43, 45, 0.2)',
        textAlign: 'center',
        animation: 'slideInUp 0.6s ease-out 0.7s both'
      }}>
        <h2 style={{ marginTop: 0 }}>Ready to Find Your Match?</h2>
        <p className="muted" style={{ marginBottom: '2rem' }}>
          Discover which Porsche is perfect for you. It only takes 5 minutes and a bit of self-reflection.
        </p>
        <Link href="/quiz" className="btn btn-primary">
          Start the Quiz
        </Link>
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
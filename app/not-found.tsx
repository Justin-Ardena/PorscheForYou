import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      textAlign: 'center',
      animation: 'fadeInUp 0.6s ease-out'
    }}>
      <div className="card" style={{
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '4rem',
          marginBottom: '1rem',
          color: '#ef2b2d'
        }}>
          🏁 404
        </h1>
        <h2 style={{
          fontSize: '1.75rem',
          marginBottom: '1rem'
        }}>
          Oops! Page Not Found
        </h2>
        <p className="muted" style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          lineHeight: 1.6
        }}>
          It looks like you've taken a wrong turn on your Porsche journey. 
          This page doesn't exist, but let's get you back on the right track.
        </p>
        <Link href="/" className="btn btn-primary">
          Return to Home 🏠
        </Link>
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

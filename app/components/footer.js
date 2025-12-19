import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="navbar-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '1rem'
                    }}>
                        <img 
                            src="/icon.png" 
                            alt="PorscheForYou Logo" 
                            className="logo-image"
                            style={{
                                width: '50px',
                                height: '50px',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 2px 8px rgba(239, 43, 45, 0.2))'
                            }}
                        />  
                        <h3 className="footer-title" style={{
                            margin: 0,
                            fontSize: '1.5rem'
                        }}>
                            PorscheForYou
                        </h3>
                    </div>
                    <p className="footer-description">
                        Discover your perfect Porsche match through our personalized quiz. Where passion meets precision.
                    </p>
                    <div className="footer-social">
                        <a href="https://x.com/Porsche" aria-label="Twitter" title="Twitter">𝕏</a>
                        <a href="https://www.instagram.com/porsche/" aria-label="Instagram" title="Instagram">📷</a>
                        <a href="https://www.linkedin.com/company/porsche-ag/" aria-label="LinkedIn" title="LinkedIn">💼</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4 className="footer-subtitle">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/quiz">Take Quiz</Link></li>
                        <li><Link href="/results">Community</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-subtitle">Resources</h4>
                    <ul className="footer-links">
                        <li><Link href="/contact">Contact</Link></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-subtitle">Connect</h4>
                    <p className="footer-contact">Got questions? We'd love to hear from you.</p>
                    <Link href="/contact" className="footer-cta">Get in Touch →</Link>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {year} PorscheForYou. All rights reserved. | Crafted with passion for Porsche enthusiasts.</p>
            </div>
        </footer>
    );
}
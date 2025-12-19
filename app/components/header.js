'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="navbar-header">
            <div className="navbar-container">
                <Link href="/" className="navbar-logo">
                    <img src="/image/icon.png" alt="PorscheForYou Logo" className="logo-image" />  
                    <span className="logo-text">PorscheForYou</span>
                </Link>

                <button 
                    className={`burger-menu ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`navbar-nav ${mobileMenuOpen ? 'active' : ''}`} aria-label="Main navigation">
                    <Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link href="/quiz" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Take Quiz</Link>
                    <Link href="/results" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Community</Link>
                    <Link href="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
                    <Link href="/contact" className="nav-link nav-link-cta" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </nav>
            </div>

            <style>{`
                .burger-menu {
                    display: none;
                    flex-direction: column;
                    gap: 5px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem;
                    z-index: 101;
                }

                .burger-menu span {
                    width: 24px;
                    height: 3px;
                    background: linear-gradient(135deg, #ef2b2d, #ffd700);
                    border-radius: 2px;
                    transition: all 0.3s ease;
                }

                @media (max-width: 640px) {
                    .burger-menu {
                        display: flex;
                    }

                    .burger-menu.active span:nth-child(1) {
                        transform: rotate(45deg) translate(8px, 8px);
                    }

                    .burger-menu.active span:nth-child(2) {
                        opacity: 0;
                    }

                    .burger-menu.active span:nth-child(3) {
                        transform: rotate(-45deg) translate(7px, -7px);
                    }
                }
            `}</style>
        </header>
    );
}
import React, { useEffect } from 'react';
import "./heroSection.css";

const HeroSection = () => {

    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');

        reveals.forEach((el) => {
            el.classList.add('in');
        });
    }, []);

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-inner">

                    <div className="hero-content">

                        <div className="hero-badge reveal">
                            <div className="hero-badge-dot">✦</div>
                            <span>
                                Lagos's <strong>#1 Premium Property Platform</strong>
                            </span>
                        </div>

                        <h1 className="hero-title reveal reveal-delay-1">
                            Find your perfect<br />
                            <em>dream property.</em>
                        </h1>

                        <p className="hero-sub reveal reveal-delay-2">
                            PrimeNest connects discerning buyers, renters,
                            and investors with Lagos's finest properties —
                            from Lekki penthouses to Victoria Island commercial spaces.
                            Trusted, verified, premium.
                        </p>
                        <div className="hero-actions reveal reveal-delay-3">

                            <a href="#" className="btn-primary-lg">
                                Explore Listings
                                <span className="btn-arrow">→</span>
                            </a>

                            <a href="#screens" className="btn-outline-lg">
                                <span>▶</span> See how it works
                            </a>

                        </div>

                        <div className="hero-trust reveal reveal-delay-4">

                            <div className="trust-item">
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>

                                Verified Listings
                            </div>

                            <div className="trust-divider"></div>

                            <div className="trust-item">
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>

                                Fast-tracked Deals
                            </div>

                            <div className="trust-divider"></div>

                            <div className="trust-item">
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-.1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>

                                12k+ Happy Clients
                            </div>

                        </div>
                    </div>

                    <div className="hero-visual reveal reveal-delay-2">

                        <div className="hero-dashboard">

                            <div className="dashboard-bar">
                                <div className="db-dot"></div>
                                <div className="db-dot"></div>
                                <div className="db-dot"></div>
                            </div>

                            <div className="dashboard-body">

                                <div className="db-header">
                                    <div className="db-title">
                                        Property Market — Lagos
                                    </div>

                                    <div className="db-tag">Live</div>
                                </div>

                                <div className="db-chart">
                                    <div className="db-bar" style={{ height: "35%" }}></div>
                                    <div className="db-bar" style={{ height: "55%" }}></div>
                                    <div className="db-bar" style={{ height: "42%" }}></div>
                                    <div className="db-bar active" style={{ height: "75%" }}></div>
                                    <div className="db-bar" style={{ height: "60%" }}></div>
                                    <div className="db-bar active" style={{ height: "88%" }}></div>
                                    <div className="db-bar" style={{ height: "70%" }}></div>
                                    <div className="db-bar active" style={{ height: "92%" }}></div>
                                </div>

                                <div className="db-stats">

                                    <div className="db-stat">
                                        <div className="db-stat-val">
                                            3.2
                                            <span style={{
                                                fontSize: ".9rem",
                                                color: "var(--pn-gold)"
                                            }}>
                                                k
                                            </span>
                                        </div>

                                        <div className="db-stat-label">
                                            Active Listings
                                        </div>

                                        <div className="db-stat-change">
                                            +18%
                                        </div>
                                    </div>

                                    <div className="db-stat">
                                        <div className="db-stat-val">
                                            94
                                            <span style={{
                                                fontSize: ".9rem",
                                                color: "var(--pn-gold)"
                                            }}>
                                                %
                                            </span>
                                        </div>

                                        <div className="db-stat-label">
                                            Match Rate
                                        </div>

                                        <div className="db-stat-change">
                                            +12%
                                        </div>
                                    </div>

                                    <div className="db-stat">
                                        <div className="db-stat-val">
                                            48
                                            <span style={{
                                                fontSize: ".9rem",
                                                color: "var(--pn-gold)"
                                            }}>
                                                h
                                            </span>
                                        </div>

                                        <div className="db-stat-label">
                                            Avg. Close Time
                                        </div>

                                        <div className="db-stat-change">
                                            -24%
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="hero-float-badge">
                            <div className="float-badge-icon">✦</div>

                            <div className="float-badge-text">
                                <strong>New listing verified</strong>
                                <span>Lekki Phase 1 · just now</span>
                            </div>
                        </div>

                        <div className="hero-float-badge-2">
                            <div className="float-badge-2-val">
                                ↑ 34%
                            </div>

                            <div className="float-badge-2-label">
                                Demand this week
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";

const Banner = () => {
    return (
        <section className="pn-trust-banner" aria-label="Why choose Prime Nest">
            <div className="pn-trust-banner__inner">

                <div className="pn-trust-banner__intro">
                    <span className="pn-trust-banner__eyebrow">
                        A BETTER WAY TO FIND PROPERTY
                    </span>

                    <h2>
                        Before you INSPECT.
                        <span> Know what to expect.</span>
                    </h2>

                    <p>
                        Search with clearer property details, upfront fee information,
                        and availability you can check before making your next move.
                    </p>

                    <Link to="/search" className="pn-trust-banner__cta">
                        Explore properties <span aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className="pn-trust-banner__features">

                    <article className="pn-trust-feature">
                        <div className="pn-trust-feature__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="9" />
                                <path d="m8 12 2.5 2.5L16 9" />
                            </svg>
                        </div>

                        <div>
                            <h3>Clearer property details</h3>
                            <p>Know more about a listing before arranging an inspection.</p>
                        </div>
                    </article>

                    <article className="pn-trust-feature">
                        <div className="pn-trust-feature__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <rect x="3" y="6" width="18" height="13" rx="2" />
                                <path d="M3 10h18M7 15h4" />
                            </svg>
                        </div>

                        <div>
                            <h3>Fees in clearer view</h3>
                            <p>Compare disclosed costs, not just the advertised price.</p>
                        </div>
                    </article>

                    <article className="pn-trust-feature">
                        <div className="pn-trust-feature__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 7v5l3 2" />
                            </svg>
                        </div>

                        <div>
                            <h3>Availability matters</h3>
                            <p>Look for listing updates before you commit your time.</p>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
};

export default Banner;

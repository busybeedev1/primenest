import React from "react";
import "./primeNestMarquee.css";

const marqueeItems = [
    "Find Your Place",
    "Clearer Property Details",
    "Lagos Property Search",
    "Know the Costs",
    "Search with Confidence",
    "Availability Matters",
];

const PrimeNestMarquee = () => {
    return (
        <section
            className="pn-marquee"
            aria-label="Prime Nest property search benefits"
        >
            <div className="pn-marquee__track">
                {[0, 1].map((copy) => (
                    <div
                        className="pn-marquee__group"
                        key={copy}
                        aria-hidden={copy === 1 ? "true" : undefined}
                    >
                        {marqueeItems.map((item, index) => (
                            <React.Fragment key={`${copy}-${item}`}>
                                <span className="pn-marquee__item">
                                    {item}
                                </span>

                                <span
                                    className="pn-marquee__star"
                                    aria-hidden="true"
                                >
                                    ✦
                                </span>
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PrimeNestMarquee;

import React, { useEffect, useMemo, useRef } from "react";
import "./featuredProperties.css";

export const featuredProperties = [
    {
        id: 1,
        title: "Modern 3-Bedroom Apartment",
        location: "Yaba, Lagos",
        type: "Apartment",
        bedrooms: 3,
        bathrooms: 3,
        parking: 2,
        price: "₦4.5M",
        period: "per year",
        status: "Verified",
        verificationText: "Verified Property",
        agent: "Listed by Prime Nest Partner",
        image:
            "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 2,
        title: "Contemporary 2-Bedroom Flat",
        location: "Lekki Phase 1, Lagos",
        type: "Flat",
        bedrooms: 2,
        bathrooms: 2,
        parking: 1,
        price: "₦78M",
        period: "for sale",
        status: "Featured",
        verificationText: "Verified Listing",
        agent: "Hosted by Trusted Agent",
        image:
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 3,
        title: "Well-Finished 4-Bedroom Duplex",
        location: "Ikeja GRA, Lagos",
        type: "Duplex",
        bedrooms: 4,
        bathrooms: 4,
        parking: 3,
        price: "₦9.2M",
        period: "per year",
        status: "Available",
        verificationText: "Verified by Prime Nest",
        agent: "Managed by Property Owner",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 4,
        title: "Bright 3-Bedroom Terrace Home",
        location: "Surulere, Lagos",
        type: "Terrace",
        bedrooms: 3,
        bathrooms: 3,
        parking: 2,
        price: "₦62M",
        period: "for sale",
        status: "Verified",
        verificationText: "Verified Property",
        agent: "Prime Nest Exclusive",
        image:
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 5,
        title: "Executive 1-Bedroom Apartment",
        location: "Victoria Island, Lagos",
        type: "Apartment",
        bedrooms: 1,
        bathrooms: 1,
        parking: 1,
        price: "₦6.8M",
        period: "per year",
        status: "Featured",
        verificationText: "Verified Premium Listing",
        agent: "Listed by Verified Agency",
        image:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 6,
        title: "Family-Friendly 3-Bedroom Home",
        location: "Ajah, Lagos",
        type: "Semi-Detached",
        bedrooms: 3,
        bathrooms: 3,
        parking: 2,
        price: "₦3.6M",
        period: "per year",
        status: "Available",
        verificationText: "Verified Property",
        agent: "Managed by Trusted Host",
        image:
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    },
];

const ArrowIcon = () => (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        <path
            d="M4.167 10h11.666m0 0-4.375-4.375M15.833 10l-4.375 4.375"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
        />
    </svg>
);

const CheckIcon = () => (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        <path
            d="M16.25 5.833 8.125 13.958 4.375 10.208"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
        />
    </svg>
);

function FeaturedProperties({
    properties = featuredProperties,
    LinkComponent,
    title = "Find a place you'll love to call home.",
    description = "Explore a curated selection of trusted homes and apartments currently available on Prime Nest across key Lagos neighbourhoods.",
}) {
    const sectionRef = useRef(null);

    const visibleProperties = useMemo(() => properties.slice(0, 6), [properties]);

    useEffect(() => {
        const cards = sectionRef.current?.querySelectorAll("[data-reveal-card]");

        if (!cards?.length) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.18,
                rootMargin: "0px 0px -48px 0px",
            }
        );

        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, [visibleProperties]);

    const renderLink = (to, className, children, extraProps = {}) => {
        if (LinkComponent) {
            return (
                <LinkComponent to={to} className={className} {...extraProps}>
                    {children}
                </LinkComponent>
            );
        }

        return (
            <a href={to} className={className} {...extraProps}>
                {children}
            </a>
        );
    };

    return (
        <section
            className="featured-properties"
            aria-labelledby="featured-properties-heading"
            ref={sectionRef}
        >
            <div className="featured-properties__container">
                <div className="featured-properties__header">
                    <div className="featured-properties__heading-block">
                        <span className="featured-properties__eyebrow">Featured Properties</span>
                        <h2
                            className="featured-properties__heading"
                            id="featured-properties-heading"
                        >
                            {title}
                        </h2>
                        <p className="featured-properties__description">{description}</p>
                    </div>

                    {renderLink(
                        "/properties",
                        "featured-properties__view-all",
                        <>
                            <span>View all properties</span>
                            <ArrowIcon />
                        </>,
                        {
                            "aria-label": "View all properties",
                        }
                    )}
                </div>

                <div className="featured-properties__grid">
                    {visibleProperties.map((property, index) => (
                        <article
                            className="featured-properties__card"
                            data-reveal-card
                            key={property.id}
                            style={{ "--stagger-index": index }}
                        >
                            {renderLink(
                                `/property/${property.id}`,
                                "featured-properties__card-link",
                                <>
                                    <div className="featured-properties__image-wrap">
                                        <img
                                            className="featured-properties__image"
                                            src={property.image}
                                            alt={`${property.title} in ${property.location}`}
                                            loading="lazy"
                                        />
                                        <span className="featured-properties__status-badge">
                                            {property.status}
                                        </span>
                                    </div>

                                    <div className="featured-properties__content">
                                        <div className="featured-properties__meta-row">
                                            <span className="featured-properties__type-pill">
                                                {property.type}
                                            </span>
                                            <span className="featured-properties__agent">
                                                {property.agent}
                                            </span>
                                        </div>

                                        <div className="featured-properties__copy">
                                            <h3 className="featured-properties__title">{property.title}</h3>
                                            <p className="featured-properties__location">{property.location}</p>
                                            <p className="featured-properties__specs">
                                                {property.bedrooms} Beds
                                                <span aria-hidden="true"> · </span>
                                                {property.bathrooms} Baths
                                                <span aria-hidden="true"> · </span>
                                                {property.parking} Parking Spaces
                                            </p>
                                        </div>

                                        <div className="featured-properties__verification">
                                            <span className="featured-properties__verification-icon">
                                                <CheckIcon />
                                            </span>
                                            <span>{property.verificationText}</span>
                                        </div>

                                        <div className="featured-properties__footer">
                                            <div className="featured-properties__price-block">
                                                <span className="featured-properties__price">
                                                    {property.price}
                                                </span>
                                                <span className="featured-properties__period">
                                                    {property.period}
                                                </span>
                                            </div>

                                            <span className="featured-properties__action">
                                                View details
                                                <ArrowIcon />
                                            </span>
                                        </div>
                                    </div>
                                </>,
                                {
                                    "aria-label": `View details for ${property.title}`,
                                }
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedProperties;
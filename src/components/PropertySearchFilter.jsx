import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './propertySearchFilter.css';

const LAGOS_LOCATIONS = [
  'Yaba',
  'Akoka',
  'Surulere',
  'Ikeja',
  'Lekki',
  'Lekki Phase 1',
  'Victoria Island',
  'Ikoyi',
  'Ajah',
  'Sangotedo',
  'Gbagada',
  'Ogudu',
  'Maryland',
  'Magodo',
  'Ikeja GRA',
  'Ogba',
  'Ikorodu',
  'Ikotun',
  'Egbeda',
  'Agege',
  'Ipaja',
  'Alimosho',
  'Bariga',
  'Mushin',
  'Festac Town',
  'Amuwo-Odofin',
  'Isolo',
  'Ejigbo',
  'Ketu',
  'Ojota',
  'Chevron',
  'Ikate',
  'Osapa London',
  'Oniru',
  'VGC',
  'Abule Egba',
  'Ojo',
  'Ikeja',
];

const PROPERTY_TYPES = [
  { value: 'room', label: 'Single Room' },
  { value: 'self_contained', label: 'Self Contained' },
  { value: 'mini_flat', label: 'Mini Flat' },
  { value: 'studio', label: 'Studio Apartment' },
  { value: 'flat', label: 'Flat / Apartment' },
  { value: 'shared_apartment', label: 'Shared Apartment' },
  { value: 'serviced_apartment', label: 'Serviced Apartment' },
  { value: 'terrace', label: 'Terrace' },
  { value: 'maisonette', label: 'Maisonette' },
  { value: 'semi_detached', label: 'Semi-Detached House' },
  { value: 'detached', label: 'Detached House' },
  { value: 'duplex', label: 'Duplex' },
  { value: 'bungalow', label: 'Bungalow' },
  { value: 'penthouse', label: 'Penthouse' },
];

const PropertySearchFilter = ({
  onSearch,
  initialValues = {},
}) => {
  const navigate = useNavigate();

  const [intent, setIntent] = useState(
    initialValues.intent ?? 'rent'
  );
  const [location, setLocation] = useState(
    initialValues.location ?? ''
  );
  const [propertyType, setPropertyType] = useState(
    initialValues.propertyType ?? ''
  );
  const [bedrooms, setBedrooms] = useState(
    initialValues.bedrooms ?? ''
  );
  const [minPrice, setMinPrice] = useState(
    initialValues.minPrice ?? ''
  );
  const [maxPrice, setMaxPrice] = useState(
    initialValues.maxPrice ?? ''
  );

  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [confirmedOnly, setConfirmedOnly] = useState(
    initialValues.confirmedOnly === true ||
    initialValues.confirmedOnly === 'true'
  );
  const [verifiedOnly, setVerifiedOnly] = useState(
    initialValues.verifiedOnly === true ||
    initialValues.verifiedOnly === 'true'
  );
  const [feesDisclosed, setFeesDisclosed] = useState(
    initialValues.feesDisclosed === true ||
    initialValues.feesDisclosed === 'true'
  );

  const [moveIn, setMoveIn] = useState(
    initialValues.moveIn ?? ''
  );

  const priceFrequency = {
    buy: 'total_price',
    rent: 'yearly',
    shortlet: 'daily',
  }[intent];

  const priceLabel = {
    buy: 'Property price',
    rent: 'Annual rent',
    shortlet: 'Price per night',
  }[intent];

  const params = useMemo(() => {
    const p = new URLSearchParams();

    const set = (key, value) => {
      const v = String(value ?? '').trim();
      if (v) p.set(key, v);
    };

    set('intent', intent);
    set('location', location);
    set('propertyType', propertyType);
    set('bedrooms', bedrooms);
    set('minPrice', minPrice);
    set('maxPrice', maxPrice);

    set('confirmedOnly', confirmedOnly ? 'true' : '');
    set('verifiedOnly', verifiedOnly ? 'true' : '');
    set('feesDisclosed', feesDisclosed ? 'true' : '');
    set('moveIn', moveIn);

    return p;
  }, [
    intent,
    location,
    propertyType,
    bedrooms,
    minPrice,
    maxPrice,
    confirmedOnly,
    verifiedOnly,
    feesDisclosed,
    moveIn,
  ]);

  const handleIntentChange = (nextIntent) => {
    setIntent(nextIntent);

    // Avoid carrying rental-only criteria into other searches.
    setMoveIn('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validPrice = (value) =>
      value === '' ||
      (Number.isFinite(Number(value)) && Number(value) >= 0);

    if (!validPrice(minPrice) || !validPrice(maxPrice)) {
      return;
    }

    if (
      minPrice !== '' &&
      maxPrice !== '' &&
      Number(minPrice) > Number(maxPrice)
    ) {
      return;
    }

    const values = {
      intent,
      listingType: {
        buy: 'sale',
        rent: 'rent',
        shortlet: 'short_let',
      }[intent],
      location: location.trim(),
      propertyType,
      bedrooms,
      minPrice,
      maxPrice,
      priceFrequency,
      confirmedOnly,
      verifiedOnly,
      feesDisclosed,
      moveIn,
    };

    if (onSearch) {
      onSearch({ params, values });
      return;
    }

    const query = params.toString();
    navigate(query ? `/search?${query}` : '/search');
  };

  return (
    <form className="pn-filter" onSubmit={handleSubmit}>
      {/* Search intent */}
      <div
        className="pn-filter-group pn-filter-group--intent"
        role="group"
        aria-label="What do you want to do?"
      >
        {[
          { value: 'buy', label: 'Buy' },
          { value: 'rent', label: 'Rent' },
          { value: 'shortlet', label: 'Shortlet' },
        ].map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={intent === option.value}
            className={
              intent === option.value
                ? 'pn-filter-pill pn-filter-pill--active'
                : 'pn-filter-pill'
            }
            onClick={() => handleIntentChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Main search fields */}
      <div className="pn-filter-row">
        <div className="pn-filter-field pn-filter-field--location">
          <label className="pn-filter-label" htmlFor="pnLocation">
            Location in Lagos
          </label>

          <input
            id="pnLocation"
            className="pn-filter-input"
            list="pnLagosLocations"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Area, neighbourhood or landmark"
            autoComplete="off"
          />

          <datalist id="pnLagosLocations">
            {LAGOS_LOCATIONS.map((area, index) => (
              <option key={`${area}-${index}`} value={area} />
            ))}
          </datalist>
        </div>

        <div className="pn-filter-field">
          <label className="pn-filter-label" htmlFor="pnType">
            Property type
          </label>

          <select
            id="pnType"
            className="pn-filter-select"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Any type</option>

            {PROPERTY_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="pn-filter-field">
          <label className="pn-filter-label" htmlFor="pnBedrooms">
            Bedrooms
          </label>

          <select
            id="pnBedrooms"
            className="pn-filter-select"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>

        <div className="pn-filter-field pn-filter-field--price">
          <label className="pn-filter-label" htmlFor="pnMinPrice">
            Min. {priceLabel}
          </label>

          <input
            id="pnMinPrice"
            className="pn-filter-input"
            type="number"
            min="0"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="No minimum"
          />
        </div>

        <div className="pn-filter-field pn-filter-field--price">
          <label className="pn-filter-label" htmlFor="pnMaxPrice">
            Max. {priceLabel}
          </label>

          <input
            id="pnMaxPrice"
            className="pn-filter-input"
            type="number"
            min="0"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="No maximum"
          />
        </div>
      </div>

      {/* Secondary filters */}
      <div className="pn-filter-more">
        <button
          type="button"
          className="pn-filter-more-toggle"
          aria-expanded={showMoreFilters}
          onClick={() => setShowMoreFilters((current) => !current)}
        >
          <span>More filters</span>
          <span>{showMoreFilters ? '−' : '+'}</span>
        </button>

        {showMoreFilters && (
          <div className="pn-filter-advanced">
            <label className="pn-filter-check">
              <input
                type="checkbox"
                checked={confirmedOnly}
                onChange={(e) => setConfirmedOnly(e.target.checked)}
              />
              <span>Recently confirmed available</span>
            </label>

            <label className="pn-filter-check">
              <input
                type="checkbox"
                checked={verifiedOnly}
                onChange={(e) => setVerifiedOnly(e.target.checked)}
              />
              <span>Verified listings only</span>
            </label>

            {intent === 'rent' && (
              <label className="pn-filter-check">
                <input
                  type="checkbox"
                  checked={feesDisclosed}
                  onChange={(e) => setFeesDisclosed(e.target.checked)}
                />
                <span>Additional fees disclosed</span>
              </label>
            )}

            {intent !== 'buy' && (
              <div className="pn-filter-field">
                <label className="pn-filter-label" htmlFor="pnMoveIn">
                  When do you need it?
                </label>

                <select
                  id="pnMoveIn"
                  className="pn-filter-select"
                  value={moveIn}
                  onChange={(e) => setMoveIn(e.target.value)}
                >
                  <option value="">Any time</option>
                  <option value="immediately">Immediately</option>
                  <option value="few_days">Within a few days</option>
                  <option value="1_2_weeks">Within 1–2 weeks</option>
                  <option value="1_month_plus">In one month or later</option>
                </select>
              </div>
            )}
          </div>
        )}
      </div>

      <button type="submit" className="pn-filter-submit">
        <span>Search properties</span>
        <span className="btn-arrow" aria-hidden="true">→</span>
      </button>
    </form>
  );
};

export default PropertySearchFilter;
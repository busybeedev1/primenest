import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './propertySearchFilter.css';

const PropertySearchFilter = ({ onSearch, initialValues }) => {
  const navigate = useNavigate();

  const [intent, setIntent] = useState(initialValues?.intent ?? 'buy');
  const [state, setState] = useState(initialValues?.state ?? '');
  const [location, setLocation] = useState(initialValues?.location ?? '');
  const [propertyType, setPropertyType] = useState(initialValues?.propertyType ?? '');
  const [bedrooms, setBedrooms] = useState(initialValues?.bedrooms ?? '');
  const [minPrice, setMinPrice] = useState(initialValues?.minPrice ?? '');
  const [maxPrice, setMaxPrice] = useState(initialValues?.maxPrice ?? '');
  const [moveIn, setMoveIn] = useState(initialValues?.moveIn ?? '');
  const [moveInOther, setMoveInOther] = useState(initialValues?.moveInOther ?? '');

  const params = useMemo(() => {
    const p = new URLSearchParams();
    const set = (key, value) => {
      const v = String(value ?? '').trim();
      if (v) p.set(key, v);
    };

    set('intent', intent);
    set('state', state);
    set('location', location);
    set('propertyType', propertyType);
    set('bedrooms', bedrooms);
    set('minPrice', minPrice);
    set('maxPrice', maxPrice);
    set('moveIn', moveIn);
    if (moveIn === 'other') set('moveInOther', moveInOther);

    return p;
  }, [bedrooms, intent, location, maxPrice, minPrice, moveIn, moveInOther, propertyType]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      intent,
      state: state.trim(),
      location: location.trim(),
      propertyType,
      bedrooms,
      minPrice,
      maxPrice,
      moveIn,
      moveInOther: moveIn === 'other' ? moveInOther.trim() : '',
    };

    if (onSearch) {
      onSearch({ params, values });
      return;
    }

    const qs = params.toString();
    navigate(qs ? `/search?${qs}` : '/search');
  };

  return (
    <form className="pn-filter" onSubmit={handleSubmit}>
      <div className="pn-filter-row">
        <div className="pn-filter-group pn-filter-group--intent" role="radiogroup" aria-label="Listing intent">
          <button
            type="button"
            className={intent === 'buy' ? 'pn-filter-pill pn-filter-pill--active' : 'pn-filter-pill'}
            onClick={() => setIntent('buy')}
          >
            Buy
          </button>
          <button
            type="button"
            className={intent === 'rent' ? 'pn-filter-pill pn-filter-pill--active' : 'pn-filter-pill'}
            onClick={() => setIntent('rent')}
          >
            Rent
          </button>
          <button
            type="button"
            className={intent === 'shortlet' ? 'pn-filter-pill pn-filter-pill--active' : 'pn-filter-pill'}
            onClick={() => setIntent('shortlet')}
          >
            Shortlet
          </button>
        </div>

        <div className="pn-filter-field">
          <label className="pn-filter-label" htmlFor="pnState">State</label>
          <input
            id="pnState"
            className="pn-filter-input"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="e.g. Lagos"
          />
        </div>

        <div className="pn-filter-field">
          <label className="pn-filter-label" htmlFor="pnLocation">Location</label>
          <input
            id="pnLocation"
            className="pn-filter-input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Lekki, VI, Ikeja"
          />
        </div>

        <div className="pn-filter-field">
          <label className="pn-filter-label" htmlFor="pnType">Type</label>
          <select
            id="pnType"
            className="pn-filter-select"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="land">Land</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        <div className="pn-filter-field">
          <label className="pn-filter-label" htmlFor="pnBedrooms">Rooms</label>
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
          <label className="pn-filter-label" htmlFor="pnMinPrice">Min price</label>
          <input
            id="pnMinPrice"
            className="pn-filter-input"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            inputMode="numeric"
            placeholder="0"
          />
        </div>

        <div className="pn-filter-field pn-filter-field--price">
          <label className="pn-filter-label" htmlFor="pnMaxPrice">Max price</label>
          <input
            id="pnMaxPrice"
            className="pn-filter-input"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            inputMode="numeric"
            placeholder="Any"
          />
        </div>

        <div className="pn-filter-field">
          <label className="pn-filter-label" htmlFor="pnMoveIn">Move-in</label>
          <select
            id="pnMoveIn"
            className="pn-filter-select"
            value={moveIn}
            onChange={(e) => setMoveIn(e.target.value)}
          >
            <option value="">Any</option>
            <option value="immediately">Immediately</option>
            <option value="few_days">In a few days</option>
            <option value="1_2_weeks">In 1-2 weeks</option>
            <option value="1_month_plus">In 1 month+</option>
            <option value="other">Other (specify)</option>
          </select>
        </div>

        {moveIn === 'other' ? (
          <div className="pn-filter-field pn-filter-field--other">
            <label className="pn-filter-label" htmlFor="pnMoveInOther">Specify</label>
            <input
              id="pnMoveInOther"
              className="pn-filter-input"
              value={moveInOther}
              onChange={(e) => setMoveInOther(e.target.value)}
              placeholder="e.g. next month"
            />
          </div>
        ) : null}

        <button type="submit" className="pn-filter-submit">Search 
         <span className="btn-arrow">→</span>
        </button>
      </div>
    </form>
  );
};

export default PropertySearchFilter;
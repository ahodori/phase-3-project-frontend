import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';

function LocationCard({ country, updateVisitObject }) {
    const [hasVisited, setHasVisited] = useState(false)
    const [wantToVisit, setWantToVisit] = useState(false)
    const isMounted = useRef(false);
    // console.log(hasVisited)
    // console.log(wantToVisit)

    function handleHasVisitedClick(e) {
        e.preventDefault()
        setHasVisited(hasVisited => !hasVisited)
        // updateVisitObject(country.country_name, hasVisited, wantToVisit)
    }

    function handleWantToVisitClick(e) {
        e.preventDefault()
        setWantToVisit(wantToVisit => !wantToVisit)
        // updateVisitObject(country.country_name, hasVisited, wantToVisit)
    }

    useEffect(() => {
        if (isMounted.current) {
            updateVisitObject(country.country_name, hasVisited, wantToVisit)
        } else {
            isMounted.current = true;
        }
    }, [hasVisited, wantToVisit])

    return (
        <div className="location-card">
            <h4>{country.country_name}</h4>
            <Button variant={hasVisited ? "primary" : "danger"} onClick={handleHasVisitedClick}>Visited</Button>
            <Button variant={wantToVisit ? "primary" : "danger"}onClick={handleWantToVisitClick}>Want to Visit</Button>
        </div>
    );
}

export default LocationCard;
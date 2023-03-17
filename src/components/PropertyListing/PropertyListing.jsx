import React from 'react';
import PropTypes from 'prop-types';

import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = ({ listings }) => {
    return (
        <div>
            <div className="Results">Results: {listings.length}</div>
            <ul className="PropertyListing">
                {listings.map((property) => (
                    <li key={property.id}>
                        <PropertyCard {...property} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

PropertyListing.propTypes = {
    listings: PropTypes.arrayOf(
        PropTypes.shape({
            bedrooms: PropTypes.number,
            branchName: PropTypes.string,
            contractUrl: PropTypes.string,
            displayAddress: PropTypes.string,
            id: PropTypes.number.isRequired,
            mainImage: PropTypes.string,
            price: PropTypes.number,
            propertyTitle: PropTypes.string,
            propertyType: PropTypes.string,
            propertyUrl: PropTypes.string,
            summary: PropTypes.string,
        })
    ).isRequired,
};

export default PropertyListing;

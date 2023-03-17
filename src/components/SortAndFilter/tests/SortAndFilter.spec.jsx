import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SortAndFilter from '../SortAndFilter';

const mockListing = {
    id: 73864112,
    bedrooms: 3,
    summary: 'Situated moments from the River Thames in Old Chelsea...',
    displayAddress: 'CHEYNE WALK, CHELSEA, SW3',
    propertyType: 'Flat',
    price: 1950000,
    branchName: 'M2 Property, London',
    propertyUrl: '/property-for-sale/property-73864112.html',
    contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
    propertyTitle: '3 bedroom flat for sale',
    mainImage:
        'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
};

const mockListings = Array(5)
    .fill(mockListing)
    .map((listing, index) => ({ ...listing, id: index }));

describe('SortAndFilter', () => {
    it('should render all options on the screen', async () => {
        render(<SortAndFilter listing={mockListings} />);

        const propertyType = screen.getByLabelText('Property Type');
        expect(propertyType).toBeInTheDocument();

        const minPrice = screen.getByLabelText('Min Price');
        expect(minPrice).toBeInTheDocument();

        const maxPrice = screen.getByLabelText('Max Price');
        expect(maxPrice).toBeInTheDocument();

        const minBeds = screen.getByLabelText('Min Beds');
        expect(minBeds).toBeInTheDocument();

        const maxBeds = screen.getByLabelText('Max Beds');
        expect(maxBeds).toBeInTheDocument();

        const sortBy = screen.getByLabelText('Sort By');
        expect(sortBy).toBeInTheDocument();

        const OrderBy = screen.getByLabelText('Order');
        expect(OrderBy).toBeInTheDocument();
    });
});

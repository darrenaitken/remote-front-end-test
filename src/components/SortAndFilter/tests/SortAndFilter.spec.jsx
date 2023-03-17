import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SortAndFilter from '../SortAndFilter';

describe('SortAndFilter', () => {
    it('should render all options on the screen', async () => {
        const onChange = () => {};
        render(<SortAndFilter onChange={onChange} />);

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

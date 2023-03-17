import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './SortAndFilter.scss';

import Dropdown from './Dropdown';
import MultiSelect from './MultiSelect';

import { propertyTypes, priceOptions, bedOptions, sortOptions, orderOptions } from '../../constants';

const SortAndFilter = ({ onChange }) => {
    const onChangeAddKey = useCallback(
        (selection, key) => {
            if (Array.isArray(selection)) {
                selection = selection.join(',');
            }
            onChange({ [key]: selection }, selection === '');
        },
        [onChange]
    );

    return (
        <div className="SortAndFilter">
            <div className="SearchSection">
                <MultiSelect
                    label="Property Type"
                    options={propertyTypes}
                    onChange={(selection) => onChangeAddKey(selection, 'propertyTypes')}
                />
                <div className="FieldGroup">
                    <Dropdown
                        label="Min Price"
                        options={priceOptions}
                        onChange={(selection) => onChangeAddKey(selection, 'minPrice')}
                        isStartUnspecified={true}
                    />
                    <Dropdown
                        label="Max Price"
                        options={priceOptions}
                        onChange={(selection) => onChangeAddKey(selection, 'maxPrice')}
                        isStartUnspecified={true}
                    />
                </div>
                <div className="FieldGroup">
                    <Dropdown
                        label="Min Beds"
                        options={bedOptions}
                        onChange={(selection) => onChangeAddKey(selection, 'minBeds')}
                        isStartUnspecified={true}
                    />
                    <Dropdown
                        label="Max Beds"
                        options={bedOptions}
                        onChange={(selection) => onChangeAddKey(selection, 'maxBeds')}
                        isStartUnspecified={true}
                    />
                </div>
            </div>
            <div className="SortSection FieldGroup">
                <Dropdown
                    label="Sort By"
                    options={sortOptions}
                    onChange={(selection) => onChangeAddKey(selection, 'sortBy')}
                />
                <Dropdown
                    label="Order"
                    options={orderOptions}
                    onChange={(selection) => onChangeAddKey(selection, 'orderBy')}
                />
            </div>
        </div>
    );
};

SortAndFilter.propTypes = {
    onChange: PropTypes.func, // (selectedOption) => {}
};

export default SortAndFilter;

import React from 'react';
import PropTypes from 'prop-types';
import './MultiSelect.scss';

const MultiSelect = ({ options, onChange, label }) => {
    const handleOnChange = (e) => {
        const result = [];
        const allCheckboxes = e.currentTarget.getElementsByTagName('input');

        for (let checkbox of allCheckboxes) {
            if (checkbox.checked) {
                result.push(checkbox.value);
            }
        }

        onChange(result);
    };

    return (
        <div className="MultiSelect">
            <div>{label}</div>
            <fieldset onChange={handleOnChange}>
                {options.map((option) => {
                    return (
                        <label key={option}>
                            <input type="checkbox" value={option.toLowerCase()} />
                            {option}
                        </label>
                    );
                })}
            </fieldset>
        </div>
    );
};

MultiSelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func, // (selectedOptions: []) => {}
    label: PropTypes.string,
};

export default MultiSelect;

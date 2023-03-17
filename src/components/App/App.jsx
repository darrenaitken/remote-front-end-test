import React, { useEffect, useState, useRef, useCallback } from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';
import { sortOptions, orderOptions } from '../../constants';

const App = () => {
    const [listings, setListings] = useState([]);
    const [renderType, setRenderType] = useState({ isError: false, error: null });
    const queryRef = useRef({ sortBy: sortOptions[0], orderBy: orderOptions[0] });

    const updateListings = useCallback(() => {
        const queryParams = new URLSearchParams(queryRef.current).toString();
        setRenderType({ isError: false, error: null });
        fetch(`http://localhost:3000/api/properties?${queryParams}`)
            .then((response) => {
                if (!response.ok) {
                    const error = `Whoops! Fetching data went wrong. Returned status ${response.status} (${response.statusText}`;
                    setRenderType({ isError: true, error });
                    throw new Error(error);
                }
                return response.json();
            })
            .then((data) => {
                setRenderType({ isError: false, error: null });
                setListings(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const onChange = useCallback(
        (selection, isDeletion = false) => {
            if (isDeletion) {
                const propertyToRemove = Object.keys(selection)[0];
                if (queryRef.current[propertyToRemove] !== undefined) {
                    delete queryRef.current[propertyToRemove];
                }
            } else {
                queryRef.current = { ...queryRef.current, ...selection };
            }

            updateListings();
        },
        [updateListings]
    );

    useEffect(() => {
        updateListings();
    }, [updateListings]);

    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter onChange={onChange} />
                {renderType.isError && (
                    <div>
                        Error!<br></br>
                        {renderType.error}
                    </div>
                )}
                {!renderType.isError && <PropertyListing listings={listings} />}
            </main>
        </div>
    );
};

export default App;

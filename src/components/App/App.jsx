import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';

const App = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/properties')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Whoops! Fetching data went wrong. Returned status ${response.status} (${response.statusText})`
                    );
                }
                return response.json();
            })
            .then((data) => setListings(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter />
                <PropertyListing listings={listings} />
            </main>
        </div>
    );
};

export default App;

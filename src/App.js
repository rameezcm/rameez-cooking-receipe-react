import React, { useEffect, useState } from 'react';
import './App.css';
import Receipe from './receipe'

const App = () => {
    const APP_ID = 'cd320afa';
    const APP_KEY = '54aa42c254763602320fa04c0f44812f';
    const [receipes, setreceipes] = useState([]);
    const [search, setsearch] = useState('chicken');
    const [searchText, setsearchText] = useState('chicken');

    useEffect(() => {
        getReceipe();
        console.log("Effect is Running");
    }, [searchText])

    const getReceipe = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${searchText}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        console.log(data);
        setreceipes(data.hits)
    }

    const updateSearch = e => {
        setsearch(e.target.value);
        console.log(search);
    }

    const submitSearch = e => {
        e.preventDefault();
        setsearchText(search);
        console.log(searchText);
    }


    return (
        <div key="1d" className="App">
            <form className="searchForm" onSubmit={submitSearch}>
                <input className="searchBar" type="text" value={search} onChange={updateSearch}></input>
                <button className="search" type="submit">Search</button>
            </form>
            <div className="receipe">
                {receipes.map(receipe => (
                    <Receipe
                        key={receipe.recipe.label}
                        receipe={receipe.recipe} />
                ))};
            </div>
        </div>
    );
}

export default App;

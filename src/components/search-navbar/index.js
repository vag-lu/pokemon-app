import React, { useEffect } from 'react'
import './index.scss'

const SearchNavbar = (props) => {
    const {
        toSearch,
        onSearchChange,
        onButtonSearchClick
    } = props

    useEffect(() => {
        let input = document.getElementById("searchInput");
        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("searchBtn").click();
            }
        });
    }, [])

    return (
        <div className="navbar">
            <div className="input-container">
                <input id="searchInput" value={toSearch} type="search" placeholder="Search by Name, Id or Type" onChange={onSearchChange}></input>
                <button id="searchBtn" value="Search" className="search-btn" onClick={onButtonSearchClick}><b>Search</b></button>
            </div>
        </div>
    )
}

export default SearchNavbar
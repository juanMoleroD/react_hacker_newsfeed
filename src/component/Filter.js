import React, {useEffect, useState} from "react";

const Filter = ({searchTerm, setSearchTerm}) => {

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    // useState(() => {
    //     filterResults();
    // }, [searchTerm, stories])

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchTerm} onChange={handleSearchInput}/>
            </form>
        </>
    )
}

export default Filter;
import React, {useEffect, useState} from "react";

const Filter = ({stories, setFilteredStories}) => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value)
        filterResults();
    }

    const filterResults = () => {
        const searchInputInLowerCase = searchTerm.toLowerCase();
        const storiesMatchingSearch = stories.filter( (story) => {
            return story.title.toLowerCase().includes(searchInputInLowerCase);
        })
        setFilteredStories(storiesMatchingSearch);
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
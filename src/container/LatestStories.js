import React, {useState, useEffect} from "react";
import Filter from "../component/Filter";
import StoryList from "../component/StoryList";

const LatestStories = () => {

    const [stories, setStories] = useState([]);
    const [filteredStories, setFilteredStories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    const getStories = () => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then((response) => response.json())
            .then( (data) => {
                const newData = data.slice(0, 20);
                const storyFetchPromises = newData.map ((story) => {
                    return fetch( `https://hacker-news.firebaseio.com/v0/item/${story}.json`)
                                .then(data => data.json());
                });

                Promise.all(storyFetchPromises)
                    .then((result) => {
                        setStories(result);
                        setFilteredStories(result);
                    })
            })
    }

    useEffect( () => {
        getStories();
    }, [])

    const filter = (searchTerm) => {
        let searchTermInLowerCase = searchTerm.toLowerCase();
        const filteredStories = stories.filter( (story) => {
            return story.title.toLowerCase().indexOf(searchTermInLowerCase) > -1;
        });
        setFilteredStories(filteredStories);
    }
    return (
        <>
            <h1>I am the container</h1>
            <Filter 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                stories={filteredStories} 
                filter={filter}/>
            <StoryList stories={filteredStories}/> 
        </>
    );
}

export default LatestStories;
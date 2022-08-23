import React, {useState, useEffect} from "react";
import Filter from "../component/Filter";
import StoryList from "../component/StoryList";

const LatestStories = () => {

    const [stories, setStories] = useState([]);
    const [filteredStories, setFilteredStories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    const getStories = () => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(rawStoryIndexArray => rawStoryIndexArray.json())
            .then((storyIndexArray) => {

                const promiseArray = storyIndexArray.slice(0,20).map( (storyIndex, index) => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyIndex}.json`)
                                .then(rawStory => rawStory.json());
                });
                
                Promise.all(promiseArray)
                    .then(resolvedPromiseArray => {
                        setStories(resolvedPromiseArray);
                        setFilteredStories(resolvedPromiseArray);
                    })
            })
    }

    const filterResults = () => {
        const searchInputInLowerCase = searchTerm.toLowerCase();
        const storiesMatchingSearch = stories.filter( (story) => {
            return story.title.toLowerCase().includes(searchInputInLowerCase);
        })
        setFilteredStories(storiesMatchingSearch);
    }

    useEffect( () => {getStories()}, [])
    useEffect( () => {filterResults()}, [searchTerm])
    
    return (
        <>
            <h1>Latest from HackerNews: </h1>
            <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <StoryList stories={filteredStories}/>
        </>
    );
}

export default LatestStories;
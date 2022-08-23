import React, {useState, useEffect} from "react";
import Filter from "../component/Filter";
import StoryList from "../component/StoryList";

const LatestStories = () => {

    return (
        <>
            <h1>Latest New from HackerNews:</h1>
            <StoryList />
        
        </>
    );
}

export default LatestStories;
import React from "react";
import Story from "./Story";

const StoryList = ({stories}) => {

    const storyItems = stories.map( (story, index) => {
        return <Story key={index} story={story} />
    })

    return(
        <>
            <h1>Latest Stories</h1>
            <ul>
                {storyItems}
            </ul>

        </>
    )
}

export default StoryList;
import React from "react";
import Story from "./Story";

const StoryList = ({stories}) => {

    const storyNodes = stories.map( (story, index) => {
        return <Story key={index} story={story} />
    })

    return(
        <>
            <ol>
                {storyNodes}
            </ol>

        </>
    )
}

export default StoryList;
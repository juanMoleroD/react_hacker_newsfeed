import React from "react";

const Story = ({story}) => {
    return( 
        <li>
            <h3><a href={story.url}>{story.title}</a></h3>
            
        </li>
    )
}

export default Story;
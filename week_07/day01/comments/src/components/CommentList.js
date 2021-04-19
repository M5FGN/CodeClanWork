import React from "react";
import Comment from "./Comment";


const CommentList = ({comments}) => {

    const CommentNodes = comments.map((comment, index) => {
        return (
            <Comment author = {comment.author} text={comment.text} key={comment.id}/>
        )
    })

    return (
    <div>
        <h1>I'm the Comment List</h1>
        {CommentNodes}


        {/* CodeClan notes will do this differently */}
        {/* These are hard coded - later updated */}
        {/* < Comment author="Abraham Lincoln" text="96% of stats on the internet are made up on the spot." />
        < Comment author="Albert Einstein" text="Red and Green should never be seen." /> */}

    </div>
    )
}

export default CommentList;
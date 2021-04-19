import React from "react";


const Comment = ({author, text}) => {
    return (
        <>
        <hr></hr>
        <h3>{author}</h3>
        <p>{text}</p>
        <hr></hr>
        </>
    )

 }

export default Comment;
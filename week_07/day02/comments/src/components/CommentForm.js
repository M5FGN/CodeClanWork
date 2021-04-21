import React, {useState} from "react";

const CommentForm = ({onCommentSubmit}) => {

    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");

    const handleAuthorChange = (evt) => {
        setAuthor(evt.target.value);
    }

    const handleTextChange = (evt) => {
        setText(evt.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Trim - Remove any whitespaces.
        const authorToSubmit = author.trim();
        const textToSubmit = text.trim();
        if (!authorToSubmit || !textToSubmit) {
            return
        }
        onCommentSubmit({
            author: authorToSubmit,
            text: textToSubmit,
        })
        setAuthor("");
        setText("");
    }

    return (
        <form className="comment_form" onSubmit={handleFormSubmit}>
            <input 
            type='text' 
            placeholder='your name'
            value = {author} 
            onChange = {handleAuthorChange} 
            />
            <input 
            type='text' 
            placeholder='say Something ...'
            value={text}
            onChange = {handleTextChange}
            />
            <input type='submit' value='Post'></input>
        </form>
    )
    }

export default CommentForm;


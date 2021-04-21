import React, {useState} from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

const CommentBox = () => {

  const [comments, setComments] = useState(
    [
      {
        id: 1,
        author: "Rick Henry",
        text: "React is such a great framework!"
      },
      {
        id: 2,
        author: "Valerie Gibson",
        text: "I'm dreaming in React..."
      }
    ]
  )

  const addComment = (submittedComment) => {
    // This is in lieu of a id from the database.
    submittedComment.id = Date.now();
    //Takes new comment and old comments
    const updatedComments = [...comments, submittedComment];
    // All comments - new and old.
    setComments(updatedComments);
    }

  return (
    <>
      <h1>Comments</h1>
      <CommentList comments={comments} />
      <h2>Add a Comment: </h2>
      < CommentForm onCommentSubmit = {(comment) => addComment(comment)}/>
    </>
  );

}

export default CommentBox;
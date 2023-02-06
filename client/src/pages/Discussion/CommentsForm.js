import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { CREATE_COMMENT } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { useLocation } from "react-router-dom";

function CommentsForm({ comments, setComments }) {
  const location = useLocation();
  const [comment, setComment] = useState("");
  const [createComment, { error, info }] = useMutation(CREATE_COMMENT);

  const handleCommentChange = ({ target: { name, value } }) => {
    setComment(value);
    

  };

  // const handleInputChange = ({ target: { name, value } }) => {
  //   setFormState({ ...formState, [name]: value });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    const {data} = await createComment({
        variables: {
          text: comment,
          discussion: location.state.discussion,
        },
        
      });
      
      setComments([data.addComment, ...comments])
    } catch(err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   setComment("")
  // }, [handleSubmit])
  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <label htmlFor="comment">Leave a comment:</label>
        <textarea
          type="text"
          name="text"
          value={comment}
          onChange={handleCommentChange}
        />
      </Box>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentsForm;

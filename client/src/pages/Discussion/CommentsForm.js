import React, { useState } from "react";
import { Box } from "@mui/system";

function CommentsForm() {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(comment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <label htmlFor="comment">Leave a comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={handleCommentChange}
        />
      </Box>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentsForm;

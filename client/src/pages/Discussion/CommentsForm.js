import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { CREATE_COMMENT } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { useLocation } from "react-router-dom";

function CommentsForm({ comments, setComments }) {
  function refreshPage() {
    window.location.reload();
  }
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
      const { data } = await createComment({
        variables: {
          text: comment,
          discussion: location.state.discussion,
        },
      });

      setComments([data.addComment, ...comments]);
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   setComment("")
  // }, [handleSubmit])
  return (
    <Box sx={{ display: "flex", m: 1, flexDirection: "column" }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ flexDirection: "column", display: "flex", m: 1 }}>
          <label id="commentText" htmlFor="comment">
            Leave a comment:
          </label>
          <textarea
            type="text"
            name="text"
            rows="3"
            value={comment}
            onChange={handleCommentChange}
          />
        </Box>
        <button onClick={refreshPage} id="commentText" type="submit">
          Submit
        </button>
      </form>
    </Box>
  );
}

export default CommentsForm;

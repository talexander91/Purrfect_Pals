import { React, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_DISCUSSION_BY_ID } from "../../utils/queries";
import { useLocation } from "react-router-dom";
import CommentsForm from "../Discussion/CommentsForm.js";
import CatFetch from "../Fetch/catFetch";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function LoadDiscussionById() {
  const [comments, setComments] = useState([]);

  const location = useLocation();

  const {
    loading: discussionLoading,
    err: discussionError,
    data: discussionData,
  } = useQuery(QUERY_DISCUSSION_BY_ID, {
    variables: { id: location.state.discussion },
  });
  useEffect(() => {
    if (discussionData) {
      setComments(discussionData.discussionById.comments);
    }
  }, [discussionData]);

  if (discussionLoading) {
    return <p>Loading...</p>;
  }
  if (discussionError) {
    return <p>Error!</p>;
  }

  console.log(comments);
  return (
    <Box sx={{ m: 1, height: "50vh" }}>
      <Box
        sx={{
          width: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          m: { xs: 5, md: 0 },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            visibility: { xs: "hidden", md: "visible" },
            height: { xs: 0, md: "100%" },
            width: 1,
          }}
        >
          <CatFetch
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: 1,
            }}
            catName={discussionData.discussionById.title}
          ></CatFetch>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          maxHeight: "100%",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            flex: 1,
            flexDirection: "column",
            display: "flex",
            width: 1,
          }}
        >
          {comments.map((comments) => {
            return (
              <Box id="commentsField">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "100%",
                    overflow: "auto",
                    fontSize: "35px",
                    textDecoration: "underline",
                  }}
                >
                  {comments.user?.name}
                </Typography>
                <Typography sx={{ textAlign: "center", fontSize: "25px" }}>
                  {comments.text}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
        }}
      >
        <CommentsForm />
      </Box>
    </Box>
  );
}
export default LoadDiscussionById;

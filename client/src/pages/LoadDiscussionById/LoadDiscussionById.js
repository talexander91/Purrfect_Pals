import { React, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_DISCUSSION_BY_ID } from "../../utils/queries";
import { useLocation } from "react-router-dom";

import CatFetch from "../Fetch/catFetch";
import CommentsForm from "../Discussion/CommentsForm";

function LoadDiscussionById() {
   
    const[comments, setComments] = useState([])
 
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
  },[discussionData]);

  if (discussionLoading) {return <p>Loading...</p>};
  if (discussionError) {return <p>Error!</p>};

    console.log(comments)
  return (
    <div>
      <div>
        <CatFetch catName={discussionData.discussionById.title}></CatFetch>
        <CommentsForm comments={comments} setComments={setComments} />
        <div>
          {comments.map((comments) => {
            return(
                <div>
            <h1>{comments.user?.name}</h1>
          <p>{comments.text}</p>
          </div>
            )
          })}
        </div>
            
      </div>
    </div>
  );
}
export default LoadDiscussionById;


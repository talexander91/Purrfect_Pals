import { React } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_DISCUSSION_BY_ID } from "../../utils/queries";
import { useLocation } from "react-router-dom";

import CatFetch from "../Fetch/catFetch";
import CommentsForm from "../Discussion/CommentsForm";

function LoadDiscussionById() {
    const location = useLocation()
    const { loading, err, data } = useQuery(QUERY_DISCUSSION_BY_ID, {
        variables: { "id": location.state.discussion }
    });
    console.log(data)

    if (loading) return <p>Loading...</p>;
    if (err) return <p>Error!</p>;
    return (
        <div>
            <div>
                <CatFetch catName={data.discussionById.title}></CatFetch>
                <CommentsForm/>
            </div>
        </div>
    )
}
export default LoadDiscussionById

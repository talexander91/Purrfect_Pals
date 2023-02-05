import { React } from "react";
import CatFetch from "../Fetch/catFetch";
import { useQuery } from "@apollo/client";
import { QUERY_DISCUSSIONS } from "../../utils/queries";
import DiscussionPage from "./DiscussionPage";



function LoadAllDiscussions() {
    const { loading, err, data } = useQuery(QUERY_DISCUSSIONS);
    if (loading) return <p>Loading...</p>;
    if (err) return <p>Error!</p>;
    return (
        <div id="discussion-section">
            <DiscussionPage></DiscussionPage>
            <div>
                {data.discussions.map((discussions) => {
                    const catName = discussions.title;
                    const discussion = discussions._id
                    return (
                        <CatFetch catName={catName} discussion={discussion}></CatFetch>
                    );
                })}
            </div>
        </div>)
}

export default LoadAllDiscussions

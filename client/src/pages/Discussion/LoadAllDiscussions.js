import { React } from "react";
import CatFetch from "../Fetch/catFetch";
import { useQuery } from "@apollo/client";
import { QUERY_DISCUSSIONS } from "../../utils/queries";


function LoadAllDiscussions() {
    const { loading, err, data } = useQuery(QUERY_DISCUSSIONS);
    if (loading) return <p>Loading...</p>;
    if (err) return <p>Error!</p>;
    return (
        <div id="discussion-section">
            {data.discussions.map((discussions) => {
                const catName = discussions.title;
                console.log(discussions.title)
                return (
                    <CatFetch catName={catName}></CatFetch>
                );
            })}
        </div>)
}

export default LoadAllDiscussions

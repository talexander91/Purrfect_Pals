import { React } from "react";
import CatFetch from "../Fetch/catFetch";
import { useQuery } from "@apollo/client";
import { QUERY_DISCUSSIONS } from "../../utils/queries";
import DiscussionPage from "./DiscussionPage";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import {useNavigate} from "react-router-dom"





function LoadAllDiscussions() {
    const { loading, err, data } = useQuery(QUERY_DISCUSSIONS);
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>;
    if (err) return <p>Error!</p>;
    return (
        <div id="discussion-section">
            <DiscussionPage></DiscussionPage>
            <div>
                {data.discussions.map((discussions) => {
                    const catName = discussions.title;
                    const discussion = discussions._id;
                    const handleClick = () => {
                        navigate(`/discussion/${discussion}`, { state: { discussion: discussion }});
                    
                      };
                    return (
                        <Box onClick={handleClick}>
                            {console.log(discussion)}
                        <CatFetch catName={catName} discussion={discussion}></CatFetch>
                        </Box>
                    );
                })}
            </div>
        </div>)
}

export default LoadAllDiscussions;

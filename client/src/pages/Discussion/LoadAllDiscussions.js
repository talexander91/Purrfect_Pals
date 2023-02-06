import { React } from "react";
import CatFetch from "../Fetch/catFetch";
import { useQuery } from "@apollo/client";
import { QUERY_DISCUSSIONS } from "../../utils/queries";
import DiscussionPage from "./DiscussionPage";
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom"





function LoadAllDiscussions() {
  const { loading, err, data } = useQuery(QUERY_DISCUSSIONS);
  const navigate = useNavigate();

  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error!</p>;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        flexDirection: "column",
        m: 1,
      }}
      id="discussion-section"
    >
      <DiscussionPage></DiscussionPage>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {data.discussions.map((discussions) => {
          const catName = discussions.title;
          const discussion = discussions._id;
                    const handleClick = () => {
                        navigate(`/discussion/${discussion}`, { state: { discussion: discussion }});
                    };
          return (
            <Box onClick={handleClick}>
          <CatFetch catName={catName} discussion={discussion}></CatFetch>
          </Box>);
        })}
      </Box>
    </Box>
  );
}

export default LoadAllDiscussions;

import { React, useEffect, useState } from "react";
import DiscussionBoard from "../Discussion/DiscussionBoard";
import CatFetch from "../Fetch/catFetch";
import Box from "@mui/material/Box";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_DISCUSSION } from "../../utils/mutations";
import { QUERY_DISCUSSIONS } from "../../utils/queries";
import { Typography } from "@mui/material";

function DiscussionPage() {
  const [formState, setFormState] = useState("");
  const [makeDiscussion, { error, info }] = useMutation(CREATE_DISCUSSION);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    try {
      const { info } = await makeDiscussion({
        variables: { ...formState },
      });
      console.log(info);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        m: 1,
      }}
    >
      <Box>
        <Typography>
          Start a cat breed discussion by entering a breed here!
        </Typography>
      </Box>
      <Box>
        <form onSubmit={handleFormSubmit}>
          <input
            type="title"
            name="title"
            value={formState.name}
            onChange={handleInputChange}
          />
          <button>Submit</button>
        </form>
      </Box>
    </Box>
  );
}

export default DiscussionPage;

// function DiscussionSection() {
//     const { loading, error, data } = useQuery(GET_DISCUSSIONS);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error!</p>;

//     return (
//         <div id="discussion-section">
//             {data.discussions.map(discussion => {
//                 const [catData, setCatData] = useState(null);

//                 useEffect(() => {
//                     async function fetchCatData() {
//                         const data = CatFetch(discussion.title);
//                         setCatData(data);
//                     }

//                     fetchCatData();
//                 }, [discussion.title]);

//                 return (
//                     <div key={discussion.id}>
//                         <h2>{discussion.title}</h2>
//                         {catData ? (
//                             <p>{catData.content}</p>
//                         ) : (
//                             <p>Loading data...</p>
//                         )}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

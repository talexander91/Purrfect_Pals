import { React, useEffect, useState } from "react";
import DiscussionBoard from "../Discussion/DiscussionBoard";
import CatFetch from "../Fetch/catFetch";
import Box from '@mui/material/Box';
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_DISCUSSION } from "../../utils/mutations";
import { QUERY_DISCUSSIONS } from "../../utils/queries";



function DiscussionPage() {
    const [formState, setFormState] = useState("");
    const [makeDiscussion, { error, data }] = useMutation(CREATE_DISCUSSION);
    const { loading, err, info } = useQuery(QUERY_DISCUSSIONS);
    console.log(data)
    if (loading) return <p>Loading...</p>;
    if (err) return <p>Error!</p>;


    const handleInputChange = ({ target: { name, value } }) => {
        setFormState({ ...formState, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(event)

        try {
            const { data } = await makeDiscussion({
                variables: { ...formState },
            });
            console.log(data)
        } catch (err) {
            console.error(err);
        }
    };
    
    return (
        <Box>
            <h1>Start a cat breed discussion by entering a breed here!</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="title"
                    name="title"
                    value={formState.name}
                    onChange={handleInputChange}
                />
                <button>Submit</button>
            </form>

            <div id="discussion-section">
                {info.map(discussions => {
                    // const [catData, setCatData] = useState(null);

                    // useEffect(() => {
                        async function fetchCatData() {
                            const data = CatFetch(discussions.title);
                            // setCatData(data);
                        }

                        fetchCatData();
                    // }, [discussion.title]);

                    return (
                        <div key={discussions._id}>
                            <h2>{discussions.title}</h2>
                            {data ? (
                                <p>{data.content}</p>
                            ) : (
                                <p>Loading data...</p>
                            )}
                        </div>
                    );
                })}
            </div>
            <DiscussionBoard></DiscussionBoard>
        </Box>
    );
}

export default DiscussionPage


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
import { useState } from "react";
import DiscussionBoard from "../Discussion/DiscussionBoard";
import CatFetch from "../Fetch/catFetch";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useMutation } from "@apollo/client";
import { CREATE_DISCUSSION } from "../../utils/mutations";



function DiscussionPage() {
    const [formState, setFormState] = useState("");
    const [makeDiscussion, { error, data }] = useMutation(CREATE_DISCUSSION);

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
            <CatFetch></CatFetch>
            <DiscussionBoard></DiscussionBoard>
        </Box>
    );
}

export default DiscussionPage


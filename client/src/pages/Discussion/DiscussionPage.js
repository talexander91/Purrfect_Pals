import { React, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_DISCUSSION } from "../../utils/mutations";



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
            console.log(info)
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
        </Box>
    );
}

export default DiscussionPage
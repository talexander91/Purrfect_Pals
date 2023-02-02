import { useState } from "react";
import DiscussionBoard from "../Discussion/DiscussionBoard";
import CatFetch from "../Fetch/catFetch";
import CatCreate from "../Discussion/CatCreate";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



function DiscussionPage() {
    const [inputValue, setInputValue] = useState("");
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
    const handleFormSubmit = event => {

    };
    return (
        <Box>
            <h1>Start a cat breed discussion by entering a breed here!</h1>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button >Submit</button>
            <CatFetch></CatFetch>
            <DiscussionBoard></DiscussionBoard>
        </Box>
    );
}

export default DiscussionPage

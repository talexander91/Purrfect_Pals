import * as React from 'react';
import Box from '@mui/material/Box';
import CatFetch from '../../pages/Fetch/catFetch';
import CatAvatar from '../../pages/Fetch/catAvatar';

function DiscussionHeader(){
    return (
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
          <CatFetch></CatFetch>
      
    </Box>
    )
};

export default DiscussionHeader;
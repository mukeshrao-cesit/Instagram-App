import { TextField } from '@mui/material';
import React, { useState } from 'react';

export const Caption = ({ handleNewPost, filteredImg, setIsBackDropOpen }: any) => {
  const [caption, setCaption] = useState('');
  return (
    <div>
      <h1>Caption</h1>
      <TextField
        id="outlined-basic"
        value={caption}
        label="Caption"
        onChange={(e) => setCaption(e.target.value)}
        variant="outlined"
      />
      <button
        onClick={() => {
          handleNewPost(filteredImg, caption);
        }}
      >
        Submit
      </button>
    </div>
  );
};

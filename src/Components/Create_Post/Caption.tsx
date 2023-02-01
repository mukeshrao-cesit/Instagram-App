import { TextField } from '@mui/material';
import { useState } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './CreatePost.css';

export const Caption = ({ handleNewPost, filterName, image, setIsStatus }: any) => {
  const [caption, setCaption] = useState('');

  function sendNewPost() {
    handleNewPost(caption);
  }
  return (
    <div className="Filter-Container">
      <div className="Upload-menu-bar">
        {image && (
          <ArrowBackIcon
            sx={{ color: '#1565C0' }}
            onClick={() => {
              setIsStatus((prev: number) => prev - 1);
            }}
          />
        )}
        <p style={{ color: 'black' }}>Caption</p>

        {image && (
          <p className="next-btn" onClick={sendNewPost}>
            Submit
          </p>
        )}
      </div>
      <div className="filter-main-container">
        <div className="preview-img-container">
          <img id="preview-filter-img" className={filterName} src={image} alt="image" />
        </div>

        <div className="caption-container">
          <TextField
            id="outlined-multiline-flexible"
            sx={{ height: '100px' }}
            value={caption}
            placeholder="Write a caption..."
            multiline
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

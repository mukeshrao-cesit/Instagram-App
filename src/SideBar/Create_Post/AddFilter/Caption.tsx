import { TextField } from '@mui/material';
import '../CreatePost.css';

export const Caption = ({ caption, setCaption }: any) => {
  return (
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
  );
};

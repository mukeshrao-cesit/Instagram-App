import Button from '@mui/material/Button';
import './CreatePost.css';

export const CropImg = ({ setIsStatus }: any) => {
  return (
    <div className="Upload-Container">
      <Button
        variant="contained"
        component="label"
        onClick={() => setIsStatus((prev: number) => prev + 1)}
      >
        Crop File
      </Button>
    </div>
  );
};

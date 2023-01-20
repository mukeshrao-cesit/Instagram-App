import Button from '@mui/material/Button';
import './CreatePost.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const UploadFile = ({ handleImage, image, setIsBackDropOpen, setIsStatus }: any) => {
  return (
    <div className="Upload-Container">
      <div className="Uploaded-img">
        {image ? (
          <img src={image} />
        ) : (
          <p className="Un-UploadImg">Select Your Image From Your Computer</p>
        )}
      </div>
      <div className="Upload-btn">
        {image && (
          <ArrowBackIosNewIcon
            sx={{ color: '#1565C0' }}
            onClick={() => {
              setIsStatus(0);
              setIsBackDropOpen((prev: any) => !prev);
            }}
          />
        )}
        <Button variant="contained" component="label">
          Upload File
          <input type="file" onChange={(event) => handleImage(event)} hidden />
        </Button>
        {image && (
          <ArrowForwardIosIcon
            sx={{ color: '#1565C0' }}
            onClick={() => setIsStatus((prev: number) => prev + 1)}
          ></ArrowForwardIosIcon>
        )}
      </div>
    </div>
  );
};

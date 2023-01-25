import Button from '@mui/material/Button';
import './CreatePost.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const UploadFile = ({
  setImage,
  handleImage,
  image,
  setIsBackDropOpen,
  setIsStatus
}: any) => {
  return (
    <div className="Upload-Container">
      <div className="Upload-menu-bar">
        {image && (
          <ArrowBackIcon
            sx={{ color: '#1565C0' }}
            onClick={() => {
              setIsStatus(0);
              setImage('');
              setIsBackDropOpen((prev: any) => !prev);
            }}
          />
        )}

        {image !== '' ? (
          <p style={{ color: 'black' }}>create post</p>
        ) : (
          <p className="center-title" style={{ color: 'black' }}>
            create post
          </p>
        )}
        {image && (
          <p className="next-btn" onClick={() => setIsStatus((prev: number) => prev + 1)}>
            Next
          </p>
        )}
      </div>
      <div className="Uploaded-img">
        {image ? (
          <img src={image} />
        ) : (
          <p className="Un-UploadImg">Select Your Image From Your Computer</p>
        )}
      </div>
      <div className="Upload-btn">
        <Button variant="contained" component="label">
          {image ? 'Choose File' : 'Upload Files'}
          <input type="file" onChange={(event) => handleImage(event)} hidden />
        </Button>
      </div>
    </div>
  );
};

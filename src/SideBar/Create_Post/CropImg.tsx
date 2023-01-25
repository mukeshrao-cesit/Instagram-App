import Button from '@mui/material/Button';
import './CreatePost.css';
import { useState } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop, Crop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const CropImg = ({ setIsStatus, image }: any) => {
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

  function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: '%',
          width: 90
        },
        aspect,
        mediaWidth,
        mediaHeight
      ),
      mediaWidth,
      mediaHeight
    );
  }

  function onImageLoad(e: any) {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, 16 / 9));
  }
  return (
    <div className="Upload-Container">
      <div className="Upload-menu-bar">
        {image && (
          <ArrowBackIcon
            sx={{ color: '#1565C0' }}
            onClick={() => {
              setIsStatus((prev: number) => prev - 1);
            }}
          />
        )}
        <p style={{ color: 'black' }}>Crop</p>
        {image && (
          <p className="next-btn" onClick={() => setIsStatus((prev: number) => prev + 1)}>
            Next
          </p>
        )}
      </div>
      <div className="crop-func">
        <ReactCrop crop={crop} onChange={(c) => setCrop(c)} onComplete={(c) => setCompletedCrop(c)}>
          <img className="crop-preview-img" src={image} onLoad={onImageLoad} />
        </ReactCrop>
      </div>
      <div className="crop-btn">
        <Button
          variant="contained"
          component="label"
          onClick={() => setIsStatus((prev: number) => prev + 1)}
        >
          Crop File
        </Button>
      </div>
    </div>
  );
};

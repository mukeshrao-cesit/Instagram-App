import { useState, useRef } from 'react';
import './Filter.css';
import '../CreatePost.css';
import { FilterList } from './FilterList';
import { Caption } from '../Caption';
import { domToImage } from '../../resusable/domToImage';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const AddFilter = ({ image, setIsStatus, setFinalImage, handleNewPost }: any) => {
  const ref = useRef(null);
  const [filteredImg, setFilteredImg] = useState('');
  const [caption, setCaption] = useState('');
  const [isCaptionOpened, setIsCaptionOpened] = useState(false);

  function sendNewPost() {
    handleNewPost(caption);
    setIsCaptionOpened((prev) => !prev);
  }

  async function setImageFile() {
    const image = await domToImage(ref.current);

    setFinalImage(image);
    setIsStatus((prev: number) => prev + 1);
    setIsCaptionOpened((prev) => !prev);
  }

  return (
    <div className="Crop-Container">
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

        {image && isCaptionOpened ? (
          <p className="next-btn" onClick={sendNewPost}>
            Submit
          </p>
        ) : (
          <p className="next-btn" onClick={setImageFile}>
            Next
          </p>
        )}
      </div>
      <div style={{ display: 'flex', gap: '8px', padding: '15px' }}>
        <img id="preview-filter-img" ref={ref} className={filteredImg} src={image} alt="image" />
        {!isCaptionOpened ? (
          <FilterList image={image} setFilteredImg={setFilteredImg} />
        ) : (
          <Caption caption={caption} setCaption={setCaption} filteredImg={filteredImg} />
        )}
      </div>
    </div>
  );
};

import { useState, useRef } from 'react';
import './Filter.css';
import '../CreatePost.css';
import { FilterList } from './FilterList';
import { domToImage } from '../../resusable/domToImage';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const AddFilter = ({
  image,
  setFilterName,
  setIsStatus,
  setFinalImage,
  handleNewPost
}: any) => {
  const ref = useRef(null);
  const [filteredImg, setFilteredImg] = useState('');

  async function setImageFile() {
    const image = await domToImage(ref.current);
    setFinalImage(image);
    setFilterName(filteredImg);
    setIsStatus((prev: number) => prev + 1);
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
        <p style={{ color: 'black' }}> Filter</p>

        {image && (
          <p className="next-btn" onClick={setImageFile}>
            Next
          </p>
        )}
      </div>
      <div className="filter-main-container">
        <div className="preview-img-container">
          <img id="preview-filter-img" ref={ref} className={filteredImg} src={image} alt="image" />
        </div>
        <FilterList image={image} setFilteredImg={setFilteredImg} />
      </div>
    </div>
  );
};

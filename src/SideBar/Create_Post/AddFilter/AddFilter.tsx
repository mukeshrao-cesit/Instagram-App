import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../Filter.css';
import '../CreatePost.css';
import { FilterList } from './FilterList';
import { Caption } from './Caption';

export const AddFilter = ({ image, setIsStatus, handleNewPost }: any) => {
  const [filteredImg, setFilteredImg] = useState('');
  const [isCaptionOpened, setIsCaptionOpened] = useState(false);
  return (
    <div className="Crop-Container">
      <div style={{ display: 'flex', gap: '8px' }}>
        <img id="preview-filter-img" className={filteredImg} src={image} alt="image" />
        {!isCaptionOpened ? (
          <FilterList image={image} setFilteredImg={setFilteredImg} />
        ) : (
          <Caption handleNewPost={handleNewPost} filteredImg={filteredImg} />
        )}
      </div>
      <div className="AddedFilter-btn">
        <ArrowBackIosNewIcon
          sx={{ color: '#1565C0' }}
          onClick={() => {
            setIsStatus((prev: number) => prev - 1);
            setIsCaptionOpened((prev: any) => !prev);
          }}
        />
        <ArrowForwardIosIcon
          sx={{ color: '#1565C0' }}
          onClick={() => {
            setIsCaptionOpened((prev) => !prev);
            setIsStatus((prev: number) => prev + 1);
          }}
        />
      </div>
    </div>
  );
};

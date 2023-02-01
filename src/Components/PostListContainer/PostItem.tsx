import './PostList.css';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ActionBar } from '../resusable/Action_Bar';
import { height } from '@mui/system';

export const PostItem = ({ elem }: any) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="post-item-container">
      <Card
        sx={{
          width: '100%',
          justifyContent: 'center',
          boxShadow: 'none',
          borderBottom: '1px solid #8080806b',
          borderRadius: '0px'
        }}
      >
        <div className="post-item-img" style={{}}>
          <img
            onDoubleClick={() => setIsLiked((prev) => !prev)}
            style={{ height: '400px', borderRadius: '15px' }}
            src={`http://${elem?.attachments[0]?.url}`}
          />
        </div>
        <ActionBar isLiked={isLiked} setIsLiked={setIsLiked} />
        <CardContent style={{ padding: '0px' }}>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ display: 'flex', gap: '10px', alignItems: 'center', margin: '10px 0px' }}
          >
            MukeshRao{'----'}
            {elem.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

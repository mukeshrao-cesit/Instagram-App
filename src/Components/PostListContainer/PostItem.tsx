import './PostList.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ActionBar } from '../resusable/Action_Bar';

export const PostItem = ({ elem }: any) => {
  return (
    <div className="post-item-container">
      <Card
        sx={{
          width: '100%',
          boxShadow: 'none',
          borderBottom: '1px solid #8080806b',
          borderRadius: '0px'
        }}
      >
        <CardMedia
          sx={{ height: '300px', borderRadius: '5px' }}
          image={`http://${elem?.attachments[0]?.url}`}
        />
        <ActionBar />
        <CardContent style={{ padding: '0px' }}>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ display: 'flex', gap: '10px', alignItems: 'center', margin: '10px 0px' }}
          >
            <h3>MukeshRao</h3>
            <p>{elem.description}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

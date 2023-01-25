import { useAppSelector } from '../../Store/hook';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const PostList = () => {
  const posts = useAppSelector((state) => state.post.post);
  return (
    <div>
      {posts.length > 0 &&
        posts.map((elem: any) => {
          return (
            <Card key={elem.className} sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 240 }} image={elem.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mukesh
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {elem.caption}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
};

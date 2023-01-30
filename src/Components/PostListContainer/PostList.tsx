import { useEffect, useState } from 'react';
import { getPosts } from '../Http-request';
import { PostItem } from './PostItem';
import './PostList.css';

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const postsList = await getPosts('mukeshRao');
    setPosts(postsList?.data?.data?.results[0]?.response);
  };
  return (
    <div className="post-list-container">
      {posts.length > 0
        ? posts.map((elem: any) => {
            return <PostItem key={elem.id} elem={elem} />;
          })
        : ''}
    </div>
  );
};

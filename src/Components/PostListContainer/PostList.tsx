import { useEffect, useState } from 'react';
import { getPosts } from '../Http-request';
import { PostItem } from './PostItem';
import './PostList.css';
import { useAppDispatch, useAppSelector } from '../Store/hook';
import { postsList } from '../Store/slice';

export const PostList = () => {
  const postArray = useAppSelector((state) => state.post);
  const [posts, setPosts] = useState(postArray);
  const dispatch = useAppDispatch();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const postList = await getPosts('mukeshRao');
    dispatch(postsList(postList?.data?.data?.results[0]?.response));
    setPosts(postList?.data?.data?.results[0]?.response);
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

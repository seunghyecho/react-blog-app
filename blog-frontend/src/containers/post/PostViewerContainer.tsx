import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { readPost, unloadPost } from '../../modules/post';
import { setOriginalPost } from '../../modules/write';

const PostViewerContainer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { postId } = router.query;
  
  const { post, error, loading, user } = useSelector(({ post, loading, user }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
    user: user.user,
  }));

  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () =>{
    dispatch(setOriginalPost(post));
    router.push('/write');
  }

  const onRemove = () =>{
    router.push('/write');
  }
  const ownPost = (user && user._id) == (post && post.user._id);

  return (
    <PostViewer 
      post={post} 
      loading={loading} 
      error={error} 
      actionButtons={ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove}/>}
    />
  );
};

export default PostViewerContainer;

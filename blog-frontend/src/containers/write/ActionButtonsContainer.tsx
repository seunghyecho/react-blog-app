import { useEffect } from 'react';
import ActionButtons from '../../components/post/ActionButtons';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { updatePost, writePost } from '../../modules/write';

const ActionButtonsContainer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { title, body, tags, post, postError, originalPostId } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
    originalPostId:write.originalPostId,
  }));

  const onPublish = () => {
    if(originalPostId){
      dispatch(updatePost({title, body, tags, id:originalPostId}));
      return;
    }

    dispatch(
      writePost({
        title,
        body,
        tags
      }));
  };

  const onCancel = () => {
    router.back();
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      router.push(`/posts/${_id}`);
    }
    if (postError) {
      console.log('postError', postError);
    }
  }, [router, post, postError]);

  return (
    <ActionButtons onPublish={onPublish} onCancel={onCancel} isEdit={!!originalPostId}/>
  );
};
export default ActionButtonsContainer;
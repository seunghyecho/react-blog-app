import { useEffect } from 'react';
import ActionButtons from '../../components/post/ActionButtons';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { writePost } from '../../modules/write';

const ActionButtonsContainer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { title, body, tags, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError
  }));

  const onPublish = () => {
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
      router.push(`/post/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log('postError', postError);
    }
  }, [router, post, postError]);

  return (
    <ActionButtons onPublish={onPublish} onCancel={onCancel} />
  );
};
export default ActionButtonsContainer;
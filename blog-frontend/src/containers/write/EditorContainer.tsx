import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize } from '@/modules/write';
import TitleBodyBox from '@/components/write/TitleBodyBox';

function EditorContainer(){
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body
  }));

  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch
  ]);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <TitleBodyBox
      onChangeField={onChangeField}
      title={title}
      body={body}
    />
  );
};

export default EditorContainer;
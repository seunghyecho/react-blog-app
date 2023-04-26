import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Responsive from '@/components/common/Responsive';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>
});

const EditorBlock = styled(Responsive)`
  padding: 2rem 0 3rem;
`;
const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }

  .ql-editor.ql-blank::before {
    left: 0;
  }
`;

function Editor({ title, body, onChangeField }) {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(()=>{
    quillInstance.current = new Quill(quillElement.current,{
      theme:'snow',
      placeholder:'내용을 작성하세요.',
      modules:{
        toolbar: {
          container: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
            [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
            ['image', 'video'],
            ['clean']
          ]
        }
      },
      formats:[
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video'
      ]
    });

    const quill = quillInstance.current;
    quill.on('text-change',(delta, oldDelta, source)=>{
      if(source === 'user'){
        onChangeField({ key: 'body', value: quill.root.innerHTML });
      }
    })
  },[onChangeField]);

  const mounted = useRef(false);
  useEffect(()=>{
    if(mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = body;
  },[body]);

  const onChangeTitle = (event) => {
    onChangeField({ key: 'title', value: event.currentTarget.value });
  };

  return (
    <EditorBlock>
      <QuillWrapper>
        <input
          type='text'
          name='post-title'
          id='post-title'
          value={title}
          onChange={onChangeTitle}
          placeholder='제목을 입력해주세요.'
        />
        <div ref={quillElement}/>
      </QuillWrapper>
    </EditorBlock>
  );
}

export default Editor;
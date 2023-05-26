import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import palette from '@/lib/styles/palette';
import 'react-quill/dist/quill.bubble.css';

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>
});

const Wrapper = styled.div`
  padding: 2rem 0;
  > * {
    margin: .5rem 0;
  }

  input {
    padding: 0;
    width: 100%;
    line-height: 1.5;
    border-bottom: 4px solid ${palette.cyan[5]};
    font-size: 2.75rem;
    font-weight: bold;;
  }

  .ql-editor {
    min-height: 150px;
    font-size: 1.3rem;
  }
`;

function TitleBodyBox({ title, body, onChangeField }) {
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const formats = [
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
    'video',
  ]

  const onChangeTitle = (event) => {
    onChangeField({ key: 'title', value: event.currentTarget.value });
  };

  const onChangeBody = (event) => {
    onChangeField({ key: 'body', value: event });
  };

  return (
    <>
      <Wrapper>
        <input
          type='text'
          placeholder='제목을 입력하세요.'
          value={title}
          onChange={onChangeTitle}
        />
        <QuillNoSSRWrapper
          theme='bubble'
          placeholder='내용을 입력하세요.'
          value={body}
          onChange={onChangeBody}
          modules={modules}
          formats={formats}
        />
      </Wrapper>
    </>
  );
}

export default TitleBodyBox;
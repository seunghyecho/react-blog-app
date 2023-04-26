import styled from 'styled-components';

const Layout = styled.li`
  margin: 20px 0;
  display: flex;

  .thumbnail{
    display: block;
  width: 160px;
  height: 100px;
  overflow: hidden;
  border-radius: 3px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  }
`;


const Content = styled.div`
  padding: 0 10px;
  width: 70%;

  h2 {
    margin: 0;
  }

  b {
    padding-top: 5px;
    display: block;
    font-size: 10px;
    color: #9c9c9c;
  }

  p {
    display: -webkit-box;
    margin-top: 0.5rem;
    height: 64px;
    line-height: 1.5;
    white-space: normal;
    word-wrap: break-word;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export { Layout, Content };
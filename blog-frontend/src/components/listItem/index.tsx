import styledComponents from 'styled-components';
import { postT } from '../../types/post';
import Link from 'next/link';

const ListItemBlock = styledComponents.li`
margin:40px 0;
`;
const Title = styledComponents.strong`
margin-bottom: 5px;
font-size: 16px;
font-weight: 500;
line-height: 1.67;
`;
const Body = styledComponents.p`
max-height: 40px;
margin-bottom: 5px;
font-size: 13px;
font-weight: 400;
line-height: 1.53;
-webkit-line-clamp: 2;
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
word-break: break-word;
`;
const Tags = styledComponents.div`
span{
  font-size: 12px;
  line-height: 1.67;
}
`;

function ListItem({ title, body, username, publishedDate, tags }: postT) {
  return (
    <ListItemBlock>
      <Title>{title} {publishedDate} {username} </Title>
      <Body>{body}</Body>
      <Tags>
        {tags.map(tag => (
          <Link href={`/?tag=${tag}`} key={tag}>
            <a className='tag'>
              {tag}
            </a>
          </Link>
        ))}
      </Tags>
    </ListItemBlock>
  );
}

export default ListItem;

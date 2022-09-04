import styledComponents from "styled-components";
import { postT } from "../../types/post";
const ArticleLayout = styledComponents.article`
margin:40px 0;
`;
const ArticleTitle = styledComponents.strong`
margin-bottom: 5px;
font-size: 16px;
font-weight: 500;
line-height: 1.67;
`;
const ArticleBody = styledComponents.p`
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
const ArticleMeta = styledComponents.div`
span{
  font-size: 12px;
  line-height: 1.67;
}
.date{
  color: #999;
}
`;

function List({ userId, id, title, body }: postT) {
  return (
    <ArticleLayout>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleBody>{body}</ArticleBody>
      <ArticleMeta>
        <span className="category">
          {id} | {userId} | {title}
        </span>
      </ArticleMeta>
    </ArticleLayout>
  );
}
export default List;

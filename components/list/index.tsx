import styledComponents from "styled-components";
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
// max-width: 620px;
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
.category{
  margin-right: 14px;
  font-size: 12px;
  line-height: 1.67;
}
.date{
  margin-left: 15px;
  margin-right: 15px;
  font-size: 12px;
  line-height: 1.67;
  color: #999;
}
`;

interface ListProp {
  id: any;
  title: string;
  body: string;
  category?: string;
  created_at?: string;
}

function List({ id, title, body, category, created_at }: ListProp) {
  return (
    <ArticleLayout id={id}>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleBody>{body}</ArticleBody>
      <ArticleMeta>
        <span className="category">{category}</span>|
        <span className="date">{created_at}</span>
      </ArticleMeta>
    </ArticleLayout>
  );
}
export default List;

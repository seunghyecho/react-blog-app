import Categories from '@/components/Main/News/Categories';
import NewsItem from '@/components/Main/News/NewsItem';
import { NewsT } from '@/types/news';

interface Props {
  data: Array<NewsT>;
  category: string;
  handleSelect: (category: string) => void;
}

function News({ data, category, handleSelect }: Props) {
  return (
    <>
      <Categories category={category} handleSelect={handleSelect} />
      <ul>
        {data.map((d, i) =>
          <NewsItem data={d} key={i} />,
        )}
      </ul>
    </>
  );
}

export default News;
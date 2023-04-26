import Link from 'next/link';
import { Layout, Content } from '@/components/Main/News/NewsItem.styled';
import { NewsT } from '@/types/news';
interface Props {
  data: NewsT;
}

function NewsItem({ data }: Props) {
  const { author, description, source, title, url, urlToImage } = data;
  return (
    <Layout key={url}>
      <Link href={url} target='_blank' className='thumbnail'>
          <img src={urlToImage} alt='thumbnail' />
      </Link>
      <Content>
        <h2>
          <Link href={url} target='_blank'>
            {title}
          </Link>

        </h2>
        <p>{description}</p>
        <b>{author || source && (author || '' + source.name)}</b>
      </Content>
    </Layout>
  );
}

export default NewsItem;
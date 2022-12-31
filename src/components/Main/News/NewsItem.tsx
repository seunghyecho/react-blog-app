import { NewsT } from '@/types/news';
import Link from 'next/link';
import { Layout, Thumbnail, Content } from './NewsItem.styled';

interface Props {
  data: NewsT;
}

function NewsItem({ data }: Props) {
  const { author, description, source, title, url, urlToImage } = data;
  return (
    <Layout key={url}>
      <Link href={url}>
        <Thumbnail target='_blank'>
          <img src={urlToImage && urlToImage} alt='thumbnail' />
        </Thumbnail>
      </Link>
      <Content>
        <h2>
          <Link href={url}>
            <a target='_blank'>{title}</a>
          </Link>

        </h2>
        <p>{description}</p>
        <b>{author || source && (author || '' + source.name)}</b>
      </Content>
    </Layout>
  );
}

export default NewsItem;
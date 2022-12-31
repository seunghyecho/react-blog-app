interface NewsT {
  author: string;
  content?: string;
  description: string;
  source: {
    id: number | null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export type{ NewsT };
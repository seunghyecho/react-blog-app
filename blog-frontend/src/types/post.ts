interface postT {
  userId: number | string;
  id: number | string;
  title: string;
  body: string;
  username: string;
  publishedDate: string;
  tags: Array<string>;
}

export type { postT };

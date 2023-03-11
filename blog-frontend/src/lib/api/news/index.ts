import axios from 'axios';

const { NEXT_PUBLIC_API_KEY } = process.env;

const fetchNews = async ({ params, category }) => {
  return await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${NEXT_PUBLIC_API_KEY}`, {
    params,
  });
};
export { fetchNews };
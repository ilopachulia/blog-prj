import { useQuery } from '@tanstack/react-query';
import { getAllBlogs } from '../api/blogApi';
import { useLocation } from 'react-router-dom';

function Home() {

  const {pathname} = useLocation()

  const {
    isLoading,
    error,
    data: blogs,
  } = useQuery({
    queryKey: [],
    queryFn: () => getAllBlogs(pathname),
  });

  console.log(blogs);

  return <div></div>;
}

export default Home;

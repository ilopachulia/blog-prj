import { useQuery } from '@tanstack/react-query';
import { getAllBlogs } from '../api/blogApi';

function Home() {
  const {
    isLoading,
    error,
    data: blogs,
  } = useQuery({
    queryKey: [],
    queryFn: getAllBlogs,
  });

  console.log(blogs);

  return <div>Home</div>;
}

export default Home;

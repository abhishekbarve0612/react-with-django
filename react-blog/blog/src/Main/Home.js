
import './Home.css';
import PostList from './Posts';
import useFetch from '../CustomHooks/useFetch';

const Home = () => {


  const { data: blogs, isLoading, error} = useFetch('http://localhost:8000/post/');
  


  return ( 
    <div className="home">
      {error && <h3>{error}</h3> }
      {isLoading && <h3>Loading...</h3>}
      {blogs && <PostList blogs={blogs} />}
    </div>
   );
}
 
export default Home;
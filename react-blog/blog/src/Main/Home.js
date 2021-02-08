import {useState, useEffect} from 'react';
import axios from 'axios';
import './Home.css';
import PostList from './Posts';

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
  };
  useEffect(() => {
    axios.get('http://localhost:8000/post/')
    .then(res => {
      return res.data
    })
    .then(data => {
      console.log(data);
      setBlogs(data);
    })
  }, [])

  function handleDelete(id){
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  return ( 
    <div className="home">
      {blogs && <PostList blogs={blogs} handleDelete={handleDelete} />}
    </div>
   );
}
 
export default Home;
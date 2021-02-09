import { useParams, Link, useHistory } from "react-router-dom";
import useFetch from './../CustomHooks/useFetch';
const DetailPost = () => {
  const {id} = useParams();
  const { data: blog, isLoading, error} = useFetch(`http://localhost:8000/post-details/${id}`);
  const history = useHistory();
  const deletePost = () => {
    fetch(`http://localhost:8000/post-details/${blog.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      console.log(`Blog with id ${blog.id} is Deleted`);
      history.push('/');
    })
  }

  return ( 
    <div className="container">
      <h3>Detail Post - {id} </h3>
      {error && <h3>{error}</h3> }
      {isLoading && <h3>Loading...</h3>}
      {blog && <div className="post" key={blog.id}>
          <div className="post-header">
            <div className="post-title">
              <Link to={`/post/${blog.id}`}>
              {blog.title}
              </Link>
            </div>
            <div className="post-author">
              {blog.author}
            </div>
          </div>
          <div className="post-body">
            {blog.description}
          </div>
          
          <div className="delete-post">
            <button onClick={deletePost} >DELETE</button>
            </div>
        </div>
      }
    </div>
   );
}
 
export default DetailPost;
import {useState, useEffect} from 'react';
import { useHistory} from 'react-router-dom';
const NewPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const history = useHistory();
  const createPost = (e) => {
    e.preventDefault();
    const blog = {title, description, author};
    fetch('http://localhost:8000/post/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("New Blog Added");
      history.push('/');
    })
  }
  return ( 
    <div className="container">
      <h2>Add a New Blog Post</h2>
      <form 
      onSubmit={createPost}
      className="add-post">
        <label>Post Title:</label>
        <input 
        type="text" 
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        />
        <label>Post Description:</label>
        <textarea
        required
        onChange={
          (e) => {
            setDescription(e.target.value);
          }
        }
        >
          {description}
        </textarea>
        <label>Post Author:</label>
        <input 
        type="text" 
        required
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        />
        <button 
        type="submit" 
        value="">
          ADD NEW POST
          </button>
      </form>
    </div>
   );
}
 
export default NewPost;
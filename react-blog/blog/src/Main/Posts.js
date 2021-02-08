const PostList = ({blogs, handleDelete}) => {
  return ( 
    <div className="post-list">
      {blogs.map((blog) => (
        <div className="post" key={blog.id}>
          <div className="post-header">
            <div className="post-title">
              {blog.title}
            </div>
            <div className="post-author">
              {blog.author}
            </div>
            <div className="delete-post">
              <button onClick={ () => {handleDelete(blog.id)} }>DELETE</button>
            </div>
          </div>
          <div className="post-body">
            {blog.description}
          </div>
        </div>
      ))}
    </div>
   );
}
 
export default PostList;
const { Link } = require("react-router-dom")

const PostList = ({blogs}) => {
  return ( 
    <div className="post-list">
      {blogs.map((blog) => (
        <div className="post" key={blog.id}>
          <div className="post-header">
            <div className="post-title">
              <Link to={`post/${blog.id}`}>
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
        </div>
      ))}
    </div>
   );
}
 
export default PostList;
const BlogDetails = ({ blog }) => {
  return (
    <>
      <div className="card-header dark page-title">{blog.title}</div>
      <div className="body">
        <div className="blog__image dark">
          <img src={blog.picture.url} alt={blog.title} />
        </div>
        <div className="card-body dark">
          <p>{blog.description}</p>
          <div dangerouslySetInnerHTML={{ __html: blog.body.html }} />
        </div>
      </div>
    </>
  );
};

export { BlogDetails };

// Import external modules
import { gql, useQuery } from '@apollo/client';

// Import custom modules
import { GET_ALL_BLOGS } from '../../graphql';

const BlogsList = () => {
  const { loading, error, data } = useQuery(GET_ALL_BLOGS);

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}</p>;

    return (
      <>
        <div className="card-header dark">Blogs</div>
        <div className="card-body dark">
          {data &&
            data.blogs &&
            data.blogs.map((blog) => (
              <div className="card dark" key={blog.id}>
                <div className="card-header">{blog.title}</div>
                <div className="blog__image">
                  <img src={blog.picture.url} alt={blog.title} />
                </div>
                <div className="card-body">
                  <p>{blog.description}</p>
                  <div dangerouslySetInnerHTML={{ __html: blog.body.html }} />
                </div>
              </div>
            ))}
        </div>
      </>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export { BlogsList };

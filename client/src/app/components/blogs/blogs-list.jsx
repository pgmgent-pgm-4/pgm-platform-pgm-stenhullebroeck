// Import external modules
import { gql, useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';

// Import custom modules
import { GET_ALL_BLOGS } from '../../graphql';
import './blogs.css';

const BlogsList = () => {
  const { loading, error, data } = useQuery(GET_ALL_BLOGS);

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}</p>;

    return (
      <>
        <div className="card-header dark page-title">Blogs</div>
        <div className="card-body dark ">
          {data &&
            data.blogs &&
            data.blogs.map((blog) => (
              <NavLink
                to={'/blog/' + blog.id}
                className="blog-link text-decoration-none"
              >
                <div className="card dark" key={blog.id}>
                  <div className="card-header">{blog.title}</div>
                  <div className="blog__card-body">
                    <div className="blog__image dark">
                      <img src={blog.picture.url} alt={blog.title} />
                    </div>
                    <div className="card-body">{blog.description}</div>
                  </div>
                </div>
              </NavLink>
            ))}
        </div>
      </>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export { BlogsList };

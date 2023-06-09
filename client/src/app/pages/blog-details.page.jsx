// Import external modules
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

// Import custom modules
import { GET_BLOG_BY_ID } from '../graphql';
import { BlogDetails } from '../components/blogs';

const BlogPage = ({ blog }) => {
  let params = useParams();
  let id = params.blogId;

  const { loading, error, data } = useQuery(GET_BLOG_BY_ID, {
    variables: { id: id },
  });

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}</p>;

    return (
      <>
        <BlogDetails blog={data.blog} />
      </>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export default BlogPage;

// Import external modules
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

// Import custom modules
import { GET_COURSE_BY_ID } from '../graphql';
import { CourseDetails } from '../components/courses';

const CoursePage = () => {
  let params = useParams();
  let id = params.courseId;

  const { loading, error, data } = useQuery(GET_COURSE_BY_ID, {
    variables: { id: id },
  });

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}</p>;

    return (
      <>
        <CourseDetails course={data.course} />
      </>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export default CoursePage;

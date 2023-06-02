// Import external modules
import { gql, useQuery } from '@apollo/client';
import { ListGroup, ListGroupItem } from 'reactstrap';

// Import custom modules
import { GET_ALL_COURSES } from '../../graphql';
import './courses.css';

const CoursesList = () => {
  const { loading, error, data } = useQuery(GET_ALL_COURSES);

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}</p>;

    const myData = [].concat(data);

    return (
      <div className="card courses-list">
        <div className="card-header">Courses</div>
        <ListGroup>
          {data &&
            data.courses &&
            data.courses.map((course) => (
              <ListGroupItem
                key={course.id}
                className={
                  'background-' +
                  course.programmeLine.colorCode +
                  ' period-' +
                  course.period
                }
              >
                <h2>{course.name}</h2>
                <p>SP:{course.studyPoints}</p>
              </ListGroupItem>
            ))}
        </ListGroup>
      </div>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export default CoursesList;

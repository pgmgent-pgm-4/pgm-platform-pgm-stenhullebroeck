// Import external modules
import { gql, useQuery } from '@apollo/client';
import { Card, CardHeader, CardBody, CardTitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';

// Import custom modules
import { GET_ALL_PROGRAMME_LINES } from '../../graphql';
import './programme.css';

const ProgrammeList = () => {
  const { loading, error, data } = useQuery(GET_ALL_PROGRAMME_LINES);

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}</p>;

    return (
      <div className=" programme-list">
        <div className="card-header page-title">Programmelijnen</div>
        <div className="card-body">
          {data &&
            data.programmeLines &&
            data.programmeLines.map((programmeLine) => (
              <Card
                key={programmeLine.id}
                className={
                  'programme-card background-' + programmeLine.colorCode
                }
              >
                <CardHeader>{programmeLine.name}</CardHeader>
                <CardBody className="courses">
                  {programmeLine.courses.map((course) => (
                    <NavLink
                      to={'/programma/' + course.id}
                      className="course-link"
                    >
                      <Card key={course.id} course={course} className="course">
                        <CardHeader>{course.name}</CardHeader>
                      </Card>
                    </NavLink>
                  ))}
                </CardBody>
              </Card>
            ))}
        </div>
      </div>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export default ProgrammeList;

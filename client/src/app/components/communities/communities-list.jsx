// Import external modules
import { gql, useQuery } from '@apollo/client';
import { ListGroup, ListGroupItem } from 'reactstrap';

// Import custom modules
import { GET_ALL_LECTURERS } from '../../graphql';

const CommunitiesList = () => {
  const { loading, error, data } = useQuery(GET_ALL_LECTURERS);

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}</p>;
    console.log(data);

    return (
      <div className="card communities-list">
        <div className="card-header">Communities</div>
        <ListGroup>
          {data &&
            data.lecturers &&
            data.lecturers.map((lecturer) => (
              <ListGroupItem key={lecturer.id}>
                <h2>
                  {lecturer.firstName} {lecturer.lastName}
                </h2>
                <p>{lecturer.initials}</p>
              </ListGroupItem>
            ))}
        </ListGroup>
      </div>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export default CommunitiesList;

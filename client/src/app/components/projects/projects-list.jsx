// Import external modules
import { gql, useQuery } from '@apollo/client';
import { ListGroup, ListGroupItem } from 'reactstrap';

// Import custom modules
import { GET_ALL_PROJECTS } from '../../graphql';

const ProjectsList = () => {
  const { loading, error, data } = useQuery(GET_ALL_PROJECTS);

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}</p>;
    console.log(data);

    return (
      <div className="card projects-list">
        <div className="card-header">Projects</div>
        <ListGroup>
          {data &&
            data.projects &&
            data.projects.map((project) => (
              <ListGroupItem key={project.id}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p>{project.body.text}</p>
              </ListGroupItem>
            ))}
        </ListGroup>
      </div>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export default ProjectsList;

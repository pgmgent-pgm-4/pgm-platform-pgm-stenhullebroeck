// Import external modules
import { gql, useQuery } from '@apollo/client';
import { ListGroup, ListGroupItem, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

// Import custom modules
import { GET_ALL_PROJECTS } from '../../graphql';

const ProjectsList = () => {
  const { loading, error, data } = useQuery(GET_ALL_PROJECTS);

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}</p>;

    return (
      <>
        <div className=" projects-list dark">
          <div className="card-header page-title">Portfolio</div>
          <ListGroup>
            {data &&
              data.projects &&
              data.projects.map((project) => (
                <NavLink
                  to={'/project/' + project.id}
                  className="text-decoration-none text-inherit"
                >
                  <ListGroupItem
                    className="list-unstyled dark"
                    key={project.id}
                  >
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p>{project.body.text}</p>
                  </ListGroupItem>
                </NavLink>
              ))}
          </ListGroup>
        </div>
      </>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export default ProjectsList;

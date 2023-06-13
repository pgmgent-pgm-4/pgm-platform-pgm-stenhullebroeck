// Import external modules
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

// Import custom modules
import { GET_PROJECT_BY_ID } from '../graphql';
import { ProjectDetails } from '../components/projects';

const ProjectPage = ({ project }) => {
  let params = useParams();
  let id = params.projectId;

  const { loading, error, data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { id: id },
  });

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}</p>;

    return (
      <>
        <ProjectDetails project={data.project} />
      </>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export default ProjectPage;

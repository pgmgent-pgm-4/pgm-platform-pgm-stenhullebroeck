// Import external modules
import { gql, useQuery } from '@apollo/client';

// Import custom modules
import { GET_AUTH_USER } from '../../graphql';

const Profile = () => {
  const { loading, error, data } = useQuery(GET_AUTH_USER, {
    variables: {
      id: JSON.parse(localStorage.getItem('currentUser')).id,
    },
  });

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}</p>;

    return (
      <>
        <button onClick={() => window.history.back()}>Back</button>
        <p>{data.authUser.email}</p>
        <p>{data.authUser.username}</p>
        <p>{data.authUser.profile.firstName}</p>
        <p>{data.authUser.profile.lastName}</p>
        <p>{data.authUser.profile.dayOfBirth}</p>
      </>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export default Profile;

// Import external modules
import { gql, useQuery } from '@apollo/client';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useEffect, useState } from 'react';

// Import custom modules
// import { GET_ALL_TEAMS } from '../../graphql';

const GET_TEAM_MEMBER = gql`
  query GetTeamMember(
    $memberType: MemberType = Student
    $first: Int = 50
    $_search: String = ""
  ) {
    teamMembers(
      first: $first
      where: { memberType: $memberType, _search: $_search }
    ) {
      id
      firstName
      lastName
      memberType
      jobTitle
      picture {
        id
        url
      }
    }
  }
`;

const TeamsList = () => {
  const [filter, setFilter] = useState('Student');
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('filter', filter);
  }, [filter]);

  const handleMemberSearch = (ev) => {
    const text = ev.target.value;
    setSearch(text);
  };

  useEffect(() => {
    console.log('search', search);
  }, [search]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const { loading, error, data } = useQuery(GET_TEAM_MEMBER, {
    variables: { memberType: filter, _search: search },
  });

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}</p>;

    return (
      <div className="card teams-list dark">
        <div className="card-header">Teams</div>
        <label htmlFor="memberSearch">Zoek:</label>
        <input
          type="text"
          name="memberSearch"
          onChange={(event) => {
            handleMemberSearch(event);
          }}
          value={search}
        />
        <button onClick={handleFilter} value={'Docent'}>
          Docent
        </button>
        <button onClick={handleFilter} value={'Student'}>
          Student
        </button>
        <button onClick={handleFilter} value={'Alumni'}>
          Alumni
        </button>
        <ListGroup>
          {data &&
            data.teamMembers &&
            data.teamMembers.map((teamMember) => (
              <ListGroupItem key={teamMember.id}>
                <img src={teamMember.picture.url} alt="pfp" />
                <h2>
                  {teamMember.firstName} {teamMember.lastName}
                </h2>
                <p>{teamMember.memberType}</p>
                <p>{teamMember.jobTitle}</p>
              </ListGroupItem>
            ))}
        </ListGroup>
      </div>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export default TeamsList;

// Import external modules
import { gql, useQuery } from '@apollo/client';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useEffect, useState } from 'react';

// import styling
import './team-members.css';

// Import custom modules
import { GET_TEAM_MEMBERS } from '../../graphql/queries';

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

  const { loading, error, data } = useQuery(GET_TEAM_MEMBERS, {
    variables: { memberType: filter, _search: search },
  });

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}</p>;

    return (
      <>
        <div className="card-header page-title dark">Teams</div>
        <div className=" teams-list dark body">
          {/* <label htmlFor="memberSearch">Zoek:</label> */}
          {/* <input
          type="text"
          name="memberSearch"
          onChange={(event) => {
            handleMemberSearch(event);
          }}
          value={search}
        /> */}
          <button onClick={handleFilter} value={'Docent'}>
            Docenten
          </button>
          <button onClick={handleFilter} value={'Student'}>
            Studenten
          </button>
          <button onClick={handleFilter} value={'Alumni'}>
            Alumni
          </button>
          <div className="card-body dark">
            <h1>
              {filter === 'Docent' ? 'Docenten' : ''}
              {filter === 'Student' ? 'Studenten' : ''}
              {filter === 'Alumni' ? 'Alumni' : ''}
            </h1>
          </div>
          <ListGroup className="members-list list-unstyled ms-2 pt-2">
            {data &&
              data.teamMembers &&
              data.teamMembers.map((teamMember) => (
                <ListGroupItem
                  className="member-list-member"
                  key={teamMember.id}
                >
                  <img src={teamMember.picture.url} alt="pfp" />
                  <h2>
                    {teamMember.firstName} {teamMember.lastName}
                  </h2>
                  <p>{teamMember.jobTitle}</p>
                </ListGroupItem>
              ))}
          </ListGroup>
        </div>
      </>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export default TeamsList;

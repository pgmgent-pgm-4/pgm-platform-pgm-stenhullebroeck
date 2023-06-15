// Import external modules
import { gql, useQuery } from '@apollo/client';

// Import custom modules
import { GET_ALL_SERVICES } from '../../graphql';
import styles from './services.module.css';

const Services = () => {
  const { loading, error, data } = useQuery(GET_ALL_SERVICES);

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}</p>;

    return (
      <>
        <div className="services-box dark">
          <h1 className="page-title">Services</h1>
          <div className="body">
            {data &&
              data.services &&
              data.services.map((service) => (
                <div className={`services-box__item ${styles.service} dark`}>
                  <h2>{service.title}</h2>
                  <p>{service.description}k</p>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export default Services;

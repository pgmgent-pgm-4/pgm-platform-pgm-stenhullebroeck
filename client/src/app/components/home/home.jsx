// Import external modules
import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

// Import custom modules
import styles from './home.module.css';
import { NavLink } from 'react-router-dom';
import {
  GET_HERO,
  GET_3_PROJECTS,
  GET_3_BLOGS,
  GET_3_SERVICES,
} from '../../graphql';

const Home = () => {
  const { loading, error, data } = useQuery(GET_HERO);
  const {
    loading: loadingProjects,
    error: errorProjects,
    data: dataProjects,
  } = useQuery(GET_3_PROJECTS);
  const {
    loading: loadingBlogs,
    error: errorBlogs,
    data: dataBlogs,
  } = useQuery(GET_3_BLOGS);
  const {
    loading: loadingServices,
    error: errorServices,
    data: dataServices,
  } = useQuery(GET_3_SERVICES);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const gqlResultAsJSX = () => {
    if (loading || loadingProjects || loadingBlogs || loadingServices)
      return <p>Loading...</p>;
    if (error || errorProjects || errorBlogs || errorServices)
      return <p>{error.toString()}</p>;

    return (
      <div className="home dark">
        <div className={styles.hero_box}>
          <div className={styles.hero}>
            <div className={styles.hero_text}>
              <h2>Graduaat Pogrammeren</h2>
              <div className={styles.hero_text_info}>
                <p>
                  Tijdens het Graduaat Programmeren leer je het zichtbare
                  (front-end) en onzichtbare (backend) deel van web- en mobiele
                  toepassingen ontwikkelen. Je wordt specialist in JavaScript,
                  HTML, CSS en vult jouw skills aan met o.a. PHP, Python, UI/UX.
                  Naast deze technische kant, vergaar je ook algemene
                  ICT-skills.
                </p>
                <p>
                  Je leert ook hoe digital agencies werken en wat jouw rol
                  hierbinnen zal zijn. Na deze opleiding kan je aan de slag als
                  front-end developer, full-stack JavaScript developer, PHP
                  developer, Web Designer + Coder of CMS Themer.
                </p>
              </div>
              <button className={styles.button}>Start je inschrijven</button>
            </div>
          </div>
          <div className="map">
            <img src="" alt="map" />
          </div>
        </div>
        <div className={`body ${styles.body}`}>
          <div className={styles.body_box}>
            <h2>Projecten</h2>
            {dataProjects &&
              dataProjects.projects &&
              dataProjects.projects.map((project) => (
                <NavLink
                  to={'/project/' + project.id}
                  className="text-decoration-none text-inherit"
                >
                  <div className={styles.body_box_item}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </NavLink>
              ))}
            <div className={styles.body_box_item}></div>
          </div>
          <div className={styles.body_box}>
            <h2>Blogs</h2>
            {dataBlogs &&
              dataBlogs.blogs &&
              dataBlogs.blogs.map((blog) => (
                <NavLink
                  to={'/blog/' + blog.id}
                  className="text-decoration-none text-inherit"
                >
                  <div className={styles.body_box_item}>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                  </div>
                </NavLink>
              ))}
          </div>
          <div className={`dark ${styles.services}`}>
            <h2>Services</h2>
            {dataServices &&
              dataServices.services &&
              dataServices.services.map((service) => (
                <>
                  <h3
                    onClick={toggle}
                    style={{ cursor: 'pointer', margin: '1rem' }}
                    href={`#${service.id}`}
                  >
                    {service.title}
                  </h3>
                  <Collapse isOpen={false} id={service.id}>
                    <Card>
                      <CardBody className="dark">
                        {service.description}
                      </CardBody>
                    </Card>
                  </Collapse>
                </>
              ))}
          </div>
        </div>
      </div>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export default Home;

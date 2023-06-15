const ProjectDetails = ({ project }) => {
  return (
    <>
      <div className="card-header dark page-title">{project.title}</div>
      <div className="body">
        <div className="project__image dark">
          <img src={project.picture.url} alt={project.title} />
        </div>
        <div className="card-body dark">
          <p>{project.description}</p>
          <div dangerouslySetInnerHTML={{ __html: project.body.html }} />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;

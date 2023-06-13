const ProjectDetails = ({ project }) => {
  return (
    <>
      <div className="card-header dark">{project.title}</div>
      <div className="card-body dark">
        <p>{project.description}</p>
        <div dangerouslySetInnerHTML={{ __html: project.body.html }} />
      </div>
    </>
  );
};

export default ProjectDetails;

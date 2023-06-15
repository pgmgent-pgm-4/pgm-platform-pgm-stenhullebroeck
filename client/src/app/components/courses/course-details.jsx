const CourseDetails = ({ course }) => {
  return (
    <div className="card course-details dark">
      <div className="card-header">{course.name}</div>
      <div className="card-body body">
        <div className="row">
          <div className="col-12 col-md-6">
            <p>{course.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

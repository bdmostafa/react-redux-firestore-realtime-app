import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

const CreateProject = ({ createProject }) => {
  const [project, setProject] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject(project)
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h3 className="grey-text text-darken-3">Create Project</h3>
        <div className="input-field">
          <label htmlFor="title">Project Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject);

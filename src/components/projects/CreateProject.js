import React, { useState } from "react";

const CreateProject = () => {
  const [project, setProject] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(project);
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

export default CreateProject;

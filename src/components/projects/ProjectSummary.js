import React from "react";

const ProjectSummary = ({ project: {id, title, content} }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="car-title">{title}</span>
        <p>{content}</p>
        <p className="grey-text">15th January, 5pm</p>
      </div>
    </div>
  );
};

export default ProjectSummary;

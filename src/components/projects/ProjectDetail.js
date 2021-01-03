import React from 'react';

const ProjectDetail = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title - {id}
                    </span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, saepe!</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Potsed by Mostafa Blog</div>
                    <div>15 January, 7pm</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
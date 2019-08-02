import React, { Component} from 'react'
import {Link} from "react-router-dom";
import routes from "../../../config/routes";

class Tab extends Component {
    render() {
        const {project} = this.props;
        return (
            <div className="tab">
                <img src={project.photo} alt="project" className="image"/>
                <div className="overlay">
                    <div className="tab-title">{project.name}</div>
                    <div className="tab-description">{project.description}</div>
                    <div className="tab-languages">Languages: {project.languages[0]}</div>
                    <div className="arrow"><Link to={{pathname: `${routes.projectDetails}/${project.name}`, state: {project}}}>Learn More &#x2192;</Link></div>
                </div>
            </div>
        )
    }
}

export default Tab
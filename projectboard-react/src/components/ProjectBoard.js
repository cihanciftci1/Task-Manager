import React, { Component } from 'react';
import { Link } from "react-router-dom";
import DoneProjectTasks from './ProjectTask/DoneProjectTasks';
import InProgressProjectTasks from './ProjectTask/InProgressProjectTasks';
import ToDoProjectTasks from './ProjectTask/ToDoProjectTasks';

class ProjectBoard extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <Link to={"/add-project-task"} className="btn btn-primary mb-3 ">
                        <i className="fas fa-plus-circle justify-content-md-center"> Create Project Task</i>
                    </Link>
                </div>
                <br />
                <hr />
                {//<!-- Backlog STARTS HERE -->
                }
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-secondary text-white">
                                    <h3>TO DO</h3>
                                </div>
                            </div>

                            {//<!-- SAMPLE PROJECT TASK STARTS HERE -->
                            }
                            <ToDoProjectTasks />

                            {//<!-- SAMPLE PROJECT TASK ENDS HERE -->
                            }
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-primary text-white">
                                    <h3>In Progress</h3>
                                </div>
                            </div>
                            {//<!-- SAMPLE PROJECT TASK STARTS HERE -->
                            }
                            <InProgressProjectTasks />
                            {//<!-- SAMPLE PROJECT TASK ENDS HERE -->
                            }
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-success text-white">
                                    <h3>Done</h3>
                                </div>
                            </div>
                            {//<!-- SAMPLE PROJECT TASK STARTS HERE -->
                            }
                            <DoneProjectTasks />
                            {//<!-- SAMPLE PROJECT TASK ENDS HERE -->
                            }
                        </div>
                    </div>
                </div>

                {//<!-- Backlog ENDS HERE -->
                }
            </div>
        )
    }
}
export default ProjectBoard;
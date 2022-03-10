import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as projectTaskActions from "../../redux/actions/projectTaskActions";
import { Link } from "react-router-dom";

class InProgressProjectTasks extends Component {
    componentDidMount() {
        this.props.actions.getProjectTasks()
    }
    render() {
        return (
            <div>
                {this.props.projectTasks.project_tasks.map(pt => (pt.status === "IN_PROGRESS" ?

                    (
                        <div className="card mb-1 bg-light" key={pt.id}>
                            <div className="card-header text-primary text-center">
                                ID : {pt.id}
                            </div>
                            <div className="card-body bg-light text-center">
                                <h5 className="card-title">Summary : {pt.summary}</h5>
                                <p className="card-text text-truncate ">
                                    Acceptance Criteria : {pt.acceptanceCriteria}
                                </p>
                                <div className='row'>
                                    <div className='col-sm-6 text-end'>
                                        <Link to={"/update-project-task/?pt_id=" + pt.id} className="btn btn-primary ml-4">
                                            View/Update
                                        </Link>
                                    </div>
                                    <div className='col-sm-1'></div>
                                    <div className='col-sm-5 text-start'>
                                        <button className="btn btn-danger ml-4" onClick={() => this.props.actions.deleteProjectTask(pt.id)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div key={pt.id}></div>
                    )
                ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        projectTasks: state.projectTask
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProjectTasks: bindActionCreators(projectTaskActions.getProjectTasks, dispatch),
            deleteProjectTask: bindActionCreators(projectTaskActions.deleteProjectTask, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InProgressProjectTasks);
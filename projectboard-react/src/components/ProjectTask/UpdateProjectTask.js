import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as projectTaskActions from "../../redux/actions/projectTaskActions";
import { bindActionCreators } from "redux";
import classnames from 'classnames';

class UpdateProjectTask extends Component {
    state = {
        projectTask: {
            id: "",
            summary: "",
            acceptanceCriteria: "",
            status: ""
        }

    }
    async componentDidMount() {
        const queryParams = new URLSearchParams(window.location.search);
        const ptId = queryParams.get("pt_id");
        await this.props.actions.getProjectTask(ptId);
        this.setState({ projectTask: this.props.projectTasks.project_task })
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            ...prevState, projectTask: { ...prevState.projectTask, [name]: value }
        }))
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.actions.updateProjectTask(this.state.projectTask, this.props.navigate);
    }
    render() {
        return (
            <div className="updateProjectTask">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={"/"} className="btn btn-light">
                                Back to Board
                            </Link>
                            <h4 className="display-4 text-center">Add/Update Project Task</h4>
                            <br />
                            <form onSubmit={this.handleSubmit} >
                                <div className="form-group">
                                    <input onChange={this.handleChange} type="text" className={classnames("form-control form-control-lg", { "is-invalid": this.props.errors.summary })} name="summary" value={this.state.projectTask.summary} placeholder="Project Task summary" />
                                    {this.props.errors.summary && (<div className='invalid-feedback'>{this.props.errors.summary}</div>)}
                                </div>
                                <br />
                                <div className="form-group">
                                    <textarea onChange={this.handleChange} className="form-control form-control-lg" name="acceptanceCriteria" value={this.state.projectTask.acceptanceCriteria}></textarea>
                                </div>
                                <br />
                                <div className="form-group">
                                    <select onChange={this.handleChange} className="form-control form-control-lg" name="status" value={this.state.projectTask.status}>
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">TO DO</option>
                                        <option value="IN_PROGRESS">IN PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value={"Save"} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        errors: state.errors,
        projectTasks: state.projectTask
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProjectTask: bindActionCreators(projectTaskActions.getProjectTask, dispatch),
            updateProjectTask: bindActionCreators(projectTaskActions.addProjectTask, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProjectTask);
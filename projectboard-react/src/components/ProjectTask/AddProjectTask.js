import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as projectTaskActions from "../../redux/actions/projectTaskActions";
import { bindActionCreators } from "redux";
import classnames from 'classnames';

class AddProjectTask extends Component {
    state = {
        summary: "",
        acceptanceCriteria: "",
        status: ""
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const newPT = {
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status
        }
        this.props.actions.addPT(newPT,this.props.navigate);
    }
    render() {
        return (
            <div className="addProjectTask">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={"/"} className="btn btn-light">
                                Back to Board
                            </Link>
                            <h4 className="display-4 text-center">Add/Update Project Task</h4>
                            <br />
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input onChange={this.handleChange} type="text" className={classnames("form-control form-control-lg",{"is-invalid":this.props.errors.summary})} name="summary" value={this.state.summary} placeholder="Project Task summary" />
                                {this.props.errors.summary&&(<div className='invalid-feedback'>{this.props.errors.summary}</div>)}
                                </div>
                                <br/>
                                <div className="form-group">
                                    <textarea onChange={this.handleChange} className="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria" value={this.state.acceptanceCriteria}></textarea>
                                </div>
                                <br />
                                <div className="form-group">
                                    <select className="form-control form-control-lg" onChange={this.handleChange} name="status" value={this.state.status}>
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">TO DO</option>
                                        <option value="IN_PROGRESS">IN PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value={"Save"}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        errors:state.errors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            addPT: bindActionCreators(projectTaskActions.addProjectTask, dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProjectTask);
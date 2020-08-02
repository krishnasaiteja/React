import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { addStudent, deleteStudent } from "./Redux/action";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
class DisplayStudents extends Component {
  render() {
    return (
      <div className="rightsection">
        <h5 align="left">
          <Link to={"/"} className="nav-link">
            {" "}
            GO BACK TO ADD STUDENT{" "}
          </Link>
        </h5>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Depatment Name</th>
              <th>Phone No.</th>
              <th>CGPA</th>
              <th>Action(s)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.hasOwnProperty("students") &&
              this.props.students.map((data, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{data.studentName}</td>
                    <td>{data.studentDepartment}</td>
                    <td>{data.phoneNo}</td>
                    <td>{data.CGPA}</td>
                    <td>
                      <button>
                        <Link
                          to={"/showStudId/" + data.studentName}
                          className="nav-link"
                        >
                          {" "}
                          View Stud Det{" "}
                        </Link>
                      </button>{" "}
                      <button onClick={() => this.deleteStudent(data.id)}>
                        DELETE
                      </button>{" "}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }

  deleteStudent = (id) => {
    this.props.deleteStudent(id);
  };
}

export default connect(mapStateToProps, {
  addStudent,
  deleteStudent,
})(DisplayStudents);

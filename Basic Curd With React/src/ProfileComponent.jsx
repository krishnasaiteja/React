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

class ProfileComponent extends React.Component {
  render() {
    var id = this.props.students;
    var st = "";
    let i;
    for (i in this.props.students) {
      if (
        this.props.students[i].studentName.localeCompare(
          this.props.username
        ) === 0
      ) {
        st = this.props.students[i];
      }
    }
    return (
      <div>
        <h5 align="left">
          <Link to={"/showStudents"} className="nav-link">
            {" "}
            GO BACK VIEW STUDENTS{" "}
          </Link>
        </h5>
        <h2>STUDENT DETAILS</h2>
        Name :: {this.props.username}
        <br />
        Dept :: {st.studentDepartment}
        <br />
        Phone no. :: {st.phoneNo}
        <br />
        EMAIL :: {st.email}
        <br />
        CGPA :: {st.CGPA}
        <br />
      </div>
    );
  }
}
export default connect(mapStateToProps, {
  addStudent,
  deleteStudent,
})(ProfileComponent);

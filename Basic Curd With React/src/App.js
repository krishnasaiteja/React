import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import { addStudent, deleteStudent } from "./Redux/action";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      studentName: "",
      studentDepartment: "",
      phoneNo: "",
      CGPA: "",
      email: "",
    };
  }

  submitData = () => {
    if (
      this.state.studentName &&
      this.state.studentDepartment &&
      !this.state.id
    ) {
      const newStudent = {
        id: 0,
        studentName: this.state.studentName,
        studentDepartment: this.state.studentDepartment,
        phoneNo: this.state.phoneNo,
        CGPA: this.state.CGPA,
        email: this.state.email,
      };

      this.props.addStudent(newStudent);
      alert("Added Student!");
    } else {
      alert("Enter student Details.");
    }

    this.clearData();
  };

  handleNameChange = (e) => {
    this.setState({
      studentName: e.target.value,
    });
  };

  handlePhoneNoChange = (e) => {
    this.setState({
      phoneNo: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleCGPAChange = (e) => {
    this.setState({
      CGPA: e.target.value,
    });
  };

  handleDepartmentChange = (e) => {
    this.setState({
      studentDepartment: e.target.value,
    });
  };

  clearData = () => {
    this.setState({
      id: 0,
      studentName: "",
      studentDepartment: "",
    });
  };

  render() {
    return (
      <div className="App">
        <h4 align="center">
          <Link to={"/showStudents"} className="nav-link">
            {" "}
            GO TO Students List{" "}
          </Link>
        </h4>
        <p className="App-intro">
          <div className="leftsection">
            Student Name :{" "}
            <input
              onChange={this.handleNameChange}
              value={this.state.studentName}
              type="text"
              placeholder="Student Name"
            />{" "}
            <br />
            Department :{" "}
            <input
              onChange={this.handleDepartmentChange}
              value={this.state.studentDepartment}
              type="text"
              placeholder="Department"
            />
            <br />
            EMAIL :{" "}
            <input
              onChange={this.handleEmailChange}
              value={this.state.email}
              type="text"
              placeholder="EMAIL"
            />
            <br />
            Phone No. :{" "}
            <input
              onChange={this.handlePhoneNoChange}
              value={this.state.phoneNo}
              type="text"
              placeholder="Phone No"
            />
            <br />
            Student CGPA :{" "}
            <input
              onChange={this.handleCGPAChange}
              value={this.state.CGPA}
              type="text"
              placeholder="CGPA"
            />
            <br />
            {this.state.id ? (
              <button onClick={this.submitData}>UPDATE</button>
            ) : (
              <button onClick={this.submitData}>ADD</button>
            )}{" "}
            &nbsp;&nbsp;<button onClick={this.clearData}>CLEAR</button>
          </div>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {
  addStudent,
  deleteStudent,
})(App);

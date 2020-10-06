import React, { Component } from "react";
//import {Form, Button, FormGroup, FormControl } from "react-bootstrap";
//import Bootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
 /* validateForm = () => {
     const errors = {};

     if(this.state.email.trim() === '')
      this.state.errors.email= "email is required";
     if(this.state.password.trim() === '')
      this.state.errors.password="password is required"; 

     return Object.keys(errors).length === 0 ? null : errors;
    
    };*/

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("Sumbitted");

   /* const errors = this.validateForm();
    console.log(errors);
    this.setState({ errors });
    if(errors) return;*/
  }

  render() {
    return (
     /* <div className="Login">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email" bsSize="large">
            <lable>Email</lable>
            <Form.Control
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <lable>Password</lable>
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </Form.Group>
          <Button
            block
            bsSize="large"
            //disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>*/

     <form onSubmit= {this.handleSubmit}>
        <div className="form-group">
          <lable htmlFor="inputUserName">Username</lable>
          <input  id="inputUserName"type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <lable htmlFor="imputPassword">Password</lable>
          <input  id="imputPassword" type="text" className="form-control"/>
        </div>
        <button className="btn btn-primary">Login</button>
      </form> 
    );
  }
}
import React, { Component } from "react";

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.props.history.push("/"));
  }

  nameField() {
    return this.props.formType === "Register" ? (
      <label className="form-input-container">
        Name
        <input
          type="text"
          onChange={this.update("name")}
          value={this.state.name}
        />
      </label>
    ) : null;
  }

  password2Field() {
    return this.props.formType === "Register" ? (
      <label className="form-input-container">
        Confirm Password
        <input
          type="password"
          onChange={this.update("password2")}
          value={this.state.password2}
        />
      </label>
    ) : null;
  }

  render() {
    return (
      <div className="session-form-container">
        <h1>{this.props.formType}</h1>
        <form className="session-form" onSubmit={this.handleSubmit}>
          {this.nameField()}
          <label className="form-input-container">
            Email
            <input
              type="text"
              onChange={this.update("email")}
              value={this.state.email}
            />
          </label>
          <label className="form-input-container">
            Password
            <input
              type="password"
              onChange={this.update("password")}
              value={this.state.password}
            />
          </label>
          {this.password2Field()}
          <input type="submit" value={this.props.formType} />
          {this.props.navLink}
        </form>
      </div>
    );
  }
}

export default SessionForm;

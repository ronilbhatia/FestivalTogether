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
    this.props.processForm(this.state);
  }

  nameField() {
    return this.props.formType === "signup" ? (
      <label>
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
    return this.props.formType === "signup" ? (
      <label>
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
      <div>
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.nameField()}
          <label>
            Email
            <input
              type="text"
              onChange={this.update("email")}
              value={this.state.email}
            />
          </label>
          <label>
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

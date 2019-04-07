import React, { Component } from 'react';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .processForm(this.state)
      .then(() => this.props.closeModal())
      .then(() => this.props.history.push('/'));
  }

  nameField() {
    const { errors } = this.props;
    return this.props.formType === 'Register' ? (
      <label className="form-input-container">
        <div className="form-input-title">Name</div>
        <input
          type="text"
          onChange={this.update('name')}
          value={this.state.name}
        />
        <div className="form-input-error">{errors.name}</div>
      </label>
    ) : null;
  }

  password2Field() {
    const { errors } = this.props;
    return this.props.formType === 'Register' ? (
      <label className="form-input-container">
        <div className="form-input-title">Confirm Password</div>
        <input
          type="password"
          onChange={this.update('password2')}
          value={this.state.password2}
        />
        <div className="form-input-error">{errors.password2}</div>
      </label>
    ) : null;
  }

  render() {
    const { formType, navLink, errors } = this.props;
    return (
      <div className="session-form-container">
        <h1>{formType}</h1>
        <form className="session-form" onSubmit={this.handleSubmit}>
          {this.nameField()}
          <label className="form-input-container">
            <div className="form-input-title">Email</div>
            <input
              type="text"
              onChange={this.update('email')}
              value={this.state.email}
            />
            <div className="form-input-error">{errors.email}</div>
          </label>
          <label className="form-input-container">
            <div className="form-input-title">Password</div>
            <input
              type="password"
              onChange={this.update('password')}
              value={this.state.password}
            />
            <div className="form-input-error">{errors.password}</div>
          </label>
          {this.password2Field()}
          <input type="submit" value={formType} />
        </form>
        {navLink}
      </div>
    );
  }
}

export default SessionForm;

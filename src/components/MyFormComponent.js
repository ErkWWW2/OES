import React from 'react';

class MyFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }

  validateForm() {
    const { name, email } = this.state;

    if (name === '') {
      alert('Name must be filled out!');
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      alert('Invalid email address!');
      return false;
    }

    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validateForm()) {
      // Perform any action you want upon successful form submission
      alert('Form submitted successfully!');
    }
  }

  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Center vertically in the viewport
      
    };

    const formStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };

    const inputStyle = {
      marginBottom: '10px',
      padding: '5px',
      width: '300px',
    };

    const buttonStyle = {
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    };

    return (
      <div id="login" style={containerStyle}>
        <form onSubmit={(event) => this.handleSubmit(event)} style={formStyle}>
          <h1>Login</h1>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            style={inputStyle}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default MyFormComponent;

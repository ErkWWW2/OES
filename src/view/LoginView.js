import React, { useState } from 'react';

function LoginForm({ onSubmit, errors }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, email);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1 style={styles.title}>Login</h1>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
            {errors.name && <div style={styles.error}>{errors.name}</div>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            {errors.email && <div style={styles.error}>{errors.email}</div>}
          </div>

          <input type="submit" value="Submit" style={styles.submitButton} />
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  formWrapper: {
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '10px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default LoginForm;

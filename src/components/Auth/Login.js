import React, { useState } from 'react';

const Login = ({ setUserRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For simplicity, I'm using local password
    if (username === 'manager' && password === 'managerpassword') {
      localStorage.setItem('userRole', 'manager');
      setUserRole('manager');
    } else if (username === 'assistant' && password === 'assistantpassword') {
      localStorage.setItem('userRole', 'assistant');
      setUserRole('assistant');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={styles.input}
        />
      </div>
      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>
    </div>
  );
};

export default Login;

// Inline styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '300px',
    margin: '0 auto',
  },
  inputContainer: {
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

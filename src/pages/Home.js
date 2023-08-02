import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Inventory Management System</h1>
      <p>
        <Link to="/manager">Manager Dashboard</Link>
      </p>
      <p>
        <Link to="/assistant">Assistant Dashboard</Link>
      </p>
    </div>
  );
};

export default Home;

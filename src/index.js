import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';  // If you plan to use React Router

// Render the App component into the root element in index.html
ReactDOM.render(
  <React.StrictMode>
    <Router>  {/* Wrap in Router if you're using react-router */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')  // Mount the React app in the root div
);


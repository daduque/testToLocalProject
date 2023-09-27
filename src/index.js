import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Game from './components/TicTacGame';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App nombre='Daniel' saludo={1+1} /> */}
    <Game />
    
  </React.StrictMode>
);

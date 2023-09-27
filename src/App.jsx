import './App.css';
import PropTypes from 'prop-types'
import { useState } from 'react';


const App =({ nombre, saludo}) => {
  const [value, setValue] = useState(saludo);

  const handleIncrease = (event) => {
    setValue(value + 1);
  };

  const handleDecrease = (event) => {
    setValue(value - 1);
  };

  const handleReset = (event) => {  
    setValue(saludo);
  }

  return (
    <> 
      <div className="App">
        <h1>Hola { nombre }</h1>
      </div>

      <div className="App">
        <p>{ value }</p>
        <button 
          className='btn-add' 
          onClick={(event) => handleDecrease(event)}
          > -1 </button>
        <button className='btn-add' onClick={ handleIncrease }> +1 </button>
        <button className='btn-add' onClick={ handleReset }> Reset </button>
      </div>
    </>
  );
}

App.propTypes = {
  nombre: PropTypes.string.isRequired,
  saludo: PropTypes.number
}

App.defaultProps = {
  nombre: 'Pepe',
}

export default App;

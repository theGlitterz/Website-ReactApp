import React from 'react';

function Greet() {
  return(
    <div>
      <button onClick={window['alertHello']}>ALERT</button>
    </div>
  ); 
}

export default Greet;

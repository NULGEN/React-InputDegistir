import React, { useState } from 'react';

export default function Input() {
  const [input, setInput] = useState('');

  const inputDegistir = (event) => {
    const value = event.target.value;
    setInput(value);
  };
  const reset = () => {
    setInput('');
  };

  const stil = {
    fontSize: '1.5em',
    marginButton: '0.3em',
    color: input.length > 10 ? 'crimson' : 'royalBlue',
  };

  return (
    <div className="widget-input container">
      <h2>Input</h2>
      <div data-testid="output" style={stil}>
        {input.toUpperCase()}
      </div>
      <div>
        <input
          type="text"
          data-testid="input"
          onChange={inputDegistir}
          value={input}
        />
        <button id="resetInput" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

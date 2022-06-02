import React from 'react';
import ReactDOM from 'react-dom/client';

import data from './data/elements.json';
import Element from './components/Element';

const root = ReactDOM.createRoot(document.getElementById('periodicTable'));
const elements = data.elements.map(element => element);

const clickElement = (el) => {
  const { name, symbol, atomic_number, group, state } = el;
  return root.render(
    <React.StrictMode>
      <div className="element-card">
        <div className="element-popup">
          <div className="popup-text">
            <div id="popup-symbol">{symbol}</div>
            <div id="popup-name">{name}</div>
            <div id="popup-atomicNum">{atomic_number}</div>
          </div>
        </div>
      </div>
      {table}
    </React.StrictMode>
  )
}

const table = (
  <div className='elements'>
      {elements.map(element => {

        const { name, symbol, atomic_number, group, state } = element;

        return (
          <Element
            key={name}
            onClick={clickElement}
            name={name}
            symbol={symbol}
            atomic_number={atomic_number}
            group={group}
            state={state}
          />
        );
      })}
    </div>
)

root.render(
  <React.StrictMode>
    {table}
  </React.StrictMode>
);

/*
<div className="element-card">
        <div className="element-popup">
          <div className="popup-text">
            <div id="popup-symbol">H</div>
            <div id="popup-name">Hydrogen</div>
            <div id="popup-atomicNum">1</div>
          </div>
        </div>
      </div>
*/
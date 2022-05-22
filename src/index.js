import React from 'react';
import ReactDOM from 'react-dom/client';

import PeriodicTable from './PeriodicTable';
import Element from './components/Element';

import data from './data/elements.json';

const root = ReactDOM.createRoot(document.getElementById('root'));

const elements = data.elements.map(element => element);
console.log(elements)

root.render(
  <React.StrictMode>
    <PeriodicTable />
    {elements.map(element => {
      return (
        <Element
          key={element.name}
          name={element.name}
        />
      )
    })}
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';

import data from './data/elements.json';

import Element from './components/Element';

const root = ReactDOM.createRoot(document.getElementById('body'));
const elements = data.elements.map(element => element);
const lan_att = data.lantanidi_attinidi.map(element => element);

root.render(
  <React.StrictMode>
    <div className='elements'>
      {elements.map(element => {
        return (
          <Element
            key={element.name}
            name={element.name}
            symbol={element.symbol}
          />
        )
      })}
    </div>
    <div className="lan-att">
      {lan_att.map(element => {
        return (
          <Element
            key={element.name}
            name={element.name}
            symbol={element.symbol}
          />
        );
      })}
    </div>
  </React.StrictMode>
);

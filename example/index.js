import React from 'react';
import {render} from 'react-dom';
import Roundabout from '../src/index';

const Example = () => (
  <Roundabout loop={true} showNav={false} selected={2}>
    <div style={{ background: '#21BB9A' }}>1</div>
    <div style={{ background: '#329ADD' }}>2</div>
    <div style={{ background: '#9A5CB9' }}>3</div>
    <div style={{ background: '#E64C3C' }}>4</div>
    <div style={{ background: '#2D3F52' }}>5</div>
  </Roundabout>
);

render(
  <Example />,
  document.getElementById('root')
);

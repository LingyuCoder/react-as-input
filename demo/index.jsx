import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../src/index.jsx';

ReactDOM.render(
  <div className="fields">
    <div className="field">
      <Input defaultValue="normal input"/>
    </div>
    <div className="field">
      <Input defaultValue="success" skin="success"/>
    </div>
    <div className="field">
      <Input defaultValue="error" skin="error"/>
    </div>
    <div className="field">
      <Input defaultValue="disabled" disabled/>
    </div>
    <div className="field">
      <Input defaultValue="readonly" readOnly/>
    </div>
    <div className="field">
      <Input placeholder="Password" type="password"/>
    </div>
  </div>
  , document.getElementById('demo'));

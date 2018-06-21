import React from 'react';
import logo from './images/logo.png';

export default () => (
  <nav className="dt w-100 border-box pv4 ph3 ph5-ns bg-transparent">
    <a href="/" className="link dim dtc v-mid w-15" name="home">
      <img src={logo} className="h2 w2" alt="" />
    </a>
  </nav>
);

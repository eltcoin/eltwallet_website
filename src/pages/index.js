import React from 'react';
import { Header, Hero, Meta } from '../components';
import './styles/index.css';

export default () => (
  <div>
    <Meta />
    <Header />
    <div className="app-container cf">
      <Hero />
    </div>
  </div>
);

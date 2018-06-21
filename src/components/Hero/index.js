import React from 'react';
import logo from './images/logo.png';
import iphone from './images/iphone.png';
import eltwalletVideo from './videos/eltwallet.mp4';
import appStoreLogo from './images/app-store.svg';
import googlePlayLogo from './images/google-play.png';

export default () => (
  <section className="tc mw9 center">
    <img className="w4" src={logo} alt="Eltwallet" />
    <h1 className="f1 tracked-mega mb1 mt2">Eltwallet</h1>
    <h4 className="silver mt2">The Ethereum wallet</h4>
    <div
      className="w5 center pt1 z-3"
      style={{
        position: 'relative',
      }}
    >
      <img alt="iPhone" className="w5 z-1" src={iphone} />
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          left: '0',
          margin: 'auto',
          position: 'absolute',
          right: '0',
          bottom: '33px',
          width: '202px',
          zIndex: -1,
        }}
      >
        <source src={eltwalletVideo} type="video/mp4" />
        <track kind="captions" />
      </video>
    </div>

    <div className="pt3 mb4">
      <a
        href="https://eltwallet.eltcoin.tech"
        target="_blank"
        rel="noopener noreferrer"
        className="dim"
      >
        <img className="mr2 h3-ns h2" src={appStoreLogo} alt="" />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=tech.eltcoin.eltwallet"
        target="_blank"
        rel="noopener noreferrer"
        className="dim"
      >
        <img className="ml2 h3-ns h2" src={googlePlayLogo} alt="" />
      </a>
    </div>
  </section>
);

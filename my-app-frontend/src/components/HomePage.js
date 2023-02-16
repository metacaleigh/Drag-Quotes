import '../index.css';
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import RandomQuote from './RandomQuote';
import HomeNavBar from './HomeNavBar';

function HomePage({ quotesArr }) {

  return (
    <div className="HomePage">
        <HomeNavBar />
        <div id="home-page-flex-column">
          <Logo />
          <RandomQuote quotesArr={quotesArr}/>
        </div>
    </div>
  );
}

export default HomePage;
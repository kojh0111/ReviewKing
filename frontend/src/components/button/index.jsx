import React from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import './index.scss';

export default function Button(props) {
  const scrollToServiceSection = () => {
    scroller.scrollTo('ServicePageContainer', { smooth: true, duration: 1500 });
  };

  return (
    <Link to="/reviews" onClick={scrollToServiceSection}>
      <div type="button" className="ButtonWrapper" {...props}>
        {props.children}
      </div>
    </Link>
  );
}

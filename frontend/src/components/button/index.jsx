import React from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import './index.scss';

export default function Button(props) {
  const scrollToServiceSection = () => {
<<<<<<< HEAD
    scroller.scrollTo('ServicePageContainer', { smooth: true, duration: 1500 });
  };

  return (
    <Link to="/reviews" onClick={scrollToServiceSection}>
      <div type="button" className="ButtonWrapper" {...props}>
=======
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  };
  return (
    <Link to="/what-to-eat" onClick={scrollToServiceSection}>
      <div className="ButtonWrapper" {...props}>
>>>>>>> ccd512c58b85d96c2b4b5928fad279df40de9a83
        {props.children}
      </div>
    </Link>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default function Button(props) {
  const scrollToServiceSection = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  };
  return (
    <Link to="/what-to-eat" onClick={scrollToServiceSection}>
      <div className="ButtonWrapper" {...props}>
        {props.children}
      </div>
    </Link>
  );
}

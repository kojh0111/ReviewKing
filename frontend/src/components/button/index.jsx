import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default function Button(props) {
  return (
    <Link to="/what-to-eat/">
      <button type="button" className="ButtonWrapper" {...props}>
        {props.children}
      </button>
    </Link>
  );
}

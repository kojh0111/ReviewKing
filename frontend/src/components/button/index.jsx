import React from 'react';
import './index.scss';

export default function Button(props) {
  return (
    <button type="button" className="ButtonWrapper" {...props}>
      {props.children}
    </button>
  );
}

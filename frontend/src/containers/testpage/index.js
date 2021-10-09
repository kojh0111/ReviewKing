import './index.scss';
import React from 'react';
import Marginer from '../../components/marginer';
import TestContent from './testContent';

export default function TestPage() {
  return (
    <div className="ServicePageContainer" name="servicePageContainer">
      <Marginer direction="vertical" margin="2rem" />

      <TestContent />
    </div>
  );
}

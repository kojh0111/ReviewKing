import React from 'react';
import Data from '../../const/data';
import './accordion.scss';

export default function Accordion() {
  return (
    <div className="accordion_section">
      <div className="accorionContainer">
        {Data.map(option => (
          <>
            <div className="Wrapper">
              <h1>{option.name}의 워드 클라우드</h1>
            </div>
            <img alt="" className="ResultImage" />
          </>
        ))}
      </div>
    </div>
  );
}

// TODO. 현재 오늘 뭐먹지 부분에서 워드 클라우드를 보여주는 accordion component를 제작 중에 있음.

/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import Marginer from '../marginer';
import './Tabs.scss';

export default function WordCloudTabs(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index);
  };

  useEffect(() => {}, [props]);

  return (
    <div className="WordCloudcontainer">
      <div className="bloc-tabs">
        <button
          type="button"
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          카카오
        </button>
        <button
          type="button"
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          망고플레이트
        </button>
        <button
          type="button"
          className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(3)}
        >
          네이버
        </button>
        <button
          type="button"
          className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(4)}
        >
          식신
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >
          <Marginer direction="vertical" margin="1rem" />
          <h2>평점: {props.data.kakao}</h2>
          <Marginer direction="vertical" margin="1rem" />

          <img
            src={props.data.kakaoWC}
            className="svg"
            style={{ width: '100%' }}
          />
        </div>

        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >
          <Marginer direction="vertical" margin="1rem" />
          <h2>평점: {props.data.mango}</h2>
          <Marginer direction="vertical" margin="1rem" />

          <img
            src={props.data.mangoWC}
            className="svg"
            style={{ width: '100%' }}
          />
        </div>

        <div
          className={toggleState === 3 ? 'content  active-content' : 'content'}
        >
          <Marginer direction="vertical" margin="1rem" />
          <h2>평점: {props.data.naver}</h2>
          <Marginer direction="vertical" margin="1rem" />

          <img
            src={props.data.naverWC}
            className="svg"
            style={{ width: '100%' }}
          />
        </div>

        <div
          className={toggleState === 4 ? 'content  active-content' : 'content'}
        >
          <Marginer direction="vertical" margin="1rem" />
          <h2>평점: {props.data.siksin}</h2>
          <Marginer direction="vertical" margin="1rem" />

          <img
            src={props.data.siksinWC}
            className="svg"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}

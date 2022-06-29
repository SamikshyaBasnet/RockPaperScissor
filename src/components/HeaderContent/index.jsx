import React, { useEffect, useRef } from 'react';
import './style.css';
import Logo from '../../images/logo.svg';
import { useAppContext } from '../../contexts/AppContext';

export const Header = () => {
  const [AppState, actions] = useAppContext();
  let scoreClass = AppState.result === 'W' ? 'won' : AppState.result === 'L' ? 'lost' : '';
  let isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      actions.getPreviousScore();
    }

    return () => {
      isMounted.current = false;
    };
  }, [actions]);

  return (
    <div className="headerWrapper">
      <div className="titlesWrapper">
        {/* <img src={Logo} /> */}
        <h2>Let's Play Rock Paper Scissors</h2>
      </div>
      <div className={`scoreWrapper ${scoreClass}`}>
        <span>Your Score 👉</span>
        <p>{AppState.score}</p>
      </div>
    </div>
  );
};

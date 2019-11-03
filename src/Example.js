import React, { useState,useCallback } from 'react';

const Example = ({text, flag, action}) => {
  const [count, countChange] = useState(0);
  const countUp = useCallback(() => countChange(prev => prev+1), []);
  const countDown = useCallback(() => countChange(prev => prev-1), []);
  return (
      <div>
        {flag && <p>{text}</p>}
        <button onClick={action}>botan</button>
        <p>count:{count}</p>
        <button onClick={countUp}>+</button>
        <button onClick={countDown}>-</button>
      </div>
    );
};

export default Example;
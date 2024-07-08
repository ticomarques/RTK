import { useState } from 'react';
import { useStore } from 'react-redux';

import { increment, decrement } from './slices';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const store = useStore();

  const incrementData = () => {
    store.dispatch(increment());
    setCount(store.getState().counter.count);
  };

  const decrementData = () => {
    store.dispatch(decrement());
    setCount(store.getState().counter.count);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={incrementData}>+</button>
      <button onClick={decrementData}>-</button>
    </div>
  );
};
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCount,
  increaseCount,
  decreaseCount,
} from './features/counter-slice';

const Counter = () => {
  const { count } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
       <div>
        <button onClick={() => dispatch(decreaseCount())}>decrease</button>
        <button onClick={() => dispatch(clearCount())}>clear</button>
        <button onClick={() => dispatch(increaseCount())}>increase</button>
      </div>
    </div>
  );
};

export default Counter;

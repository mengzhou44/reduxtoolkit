import React, {useEffect} from 'react';

import { getTodos } from './features/todos-slice';

import { useDispatch, useSelector } from 'react-redux';

const Todos = () => {
  const { items, loading } = useSelector((store) => store.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      {loading && <h2>Loading ... </h2>}

      {!loading && items.map((item) => <div key={item.id}> {item.title}</div>)}
    </div>
  );
};

export default Todos;

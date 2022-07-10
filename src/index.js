import { createRoot } from 'react-dom/client';

import React from 'react';
import App from './app';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter-slice';
import todosReducer from './features/todos-slice';
import photoReducer from './features/photo-slice';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    photo: photoReducer,
  },
});

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from '.';
const windowExist = typeof window === 'object';

const createStore = () => reduxCreateStore(rootReducer, windowExist && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);
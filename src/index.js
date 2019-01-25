import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import './style.css';
import { reducers } from './Redux/Reducers/reducers'
import { loadState, saveState } from './localStorage'
import Main from './Components/main'

localStorage.clear()

let store = createStore(reducers, loadState())
store.subscribe(() => {
  saveState(store.getState());
})
// store.dispatch({type: 'ADD_TAREA', text: 'Comprar comida', id: 1})
// store.dispatch({type: 'ADD_TAREA', text: 'Comprar bebida', id: 2})
// store.dispatch({type: 'DELETE_TAREA', text: '', id: 2})

render(
  <Provider store={store}>
    <div>
      <Main />
    </div>
  </Provider>,
  document.getElementById('root'),
);
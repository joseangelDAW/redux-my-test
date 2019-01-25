import { combineReducers } from 'redux';
import { visibleMenu } from './Menu/menu'
import { tareas } from './Tareas/tareas'

/* CON COMBINEREDUCERS */
// const reducers = combineReducers({
//   tareas,
//   visibleMenu
// });

/* RETORNANDO UN OBJETO */
const reducers = (state = {}, action) => {
  return {
    tareas: tareas(state.tareas, action),
    visibleMenu: visibleMenu(state.visibleMenu, action)
  }
}

export { reducers }
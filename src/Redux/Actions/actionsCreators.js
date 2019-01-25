const TAREAS = {
  ADD_TAREA: 'ADD_TAREA',
  DELETE_TAREA: 'DELETE_TAREA'
}

const MENU_VISIBLE = {
  MENU_USER: 'MENU_USER',
  MENU_ADMIN: 'MENU_ADMIN',
}

const setVisibilityAction = (menu) => ({type: MENU_VISIBLE, menu})

const tareasAction = (type, text, id) => ({ type, text, id })

export { TAREAS, MENU_VISIBLE, setVisibilityAction, tareasAction }
import { TAREAS } from '../../Actions/actionsCreators'

export const tareas = (tareas = [], action) => {
  switch (action.type) {
    case TAREAS.ADD_TAREA:
      // tareas = tareas.concat([{ text: action.text, id: action.id }])
      return [...tareas, { text: action.text, id: action.id }]
    case TAREAS.DELETE_TAREA:
      const index = tareas.findIndex((item) => item.id === action.id)
      index !== -1 && tareas.splice(index, 1)
      return tareas
    default:
      return tareas;
  }
}
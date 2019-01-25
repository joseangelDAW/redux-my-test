const loadState = () => {
  const defaultState = {
    tareas: [],
    visibleMenu: 'MENU_USER'
  }

  try {
    return localStorage.getItem('state') === null ?
      defaultState :
      JSON.parse(localStorage.getItem('state'))
  } catch (err) {
    console.log(err)
  }
}

const saveState = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state))
  } catch (err) {
    console.log(err)
  }
}

export { loadState, saveState }
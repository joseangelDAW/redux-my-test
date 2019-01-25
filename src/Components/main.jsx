import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tareasAction, setVisibilityAction } from '../Redux/Actions/actionsCreators'
import { generateId } from '../Util/generateId'
import { MENU_VISIBLE, TAREAS } from '../Redux/Actions/actionsCreators'

class Main extends Component {
  constructor(props) {
    super(props);
    // saveState(tareas(state, tareasAction('ADD_TAREA', 'Poner lavadora', generateId())))
    // saveState(tareas(state, tareasAction('ADD_TAREA', 'Tender la ropa', generateId())))
    // console.log(loadState())
    // saveState(tareas(state, tareasAction('DELETE_TAREA', '', 2)))
    // console.log(loadState())

    this.props.addTarea('Comprar cerveza')
    this.props.addTarea('Comprar comida')
    this.props.addTarea('Pasear al perro')
    console.log(JSON.parse(localStorage.getItem('state')))
    this.props.deleteTarea(2)
    this.props.setMenuAdmin()
    console.log(JSON.parse(localStorage.getItem('state')))
    this.props.setMenuUser()
    console.log(JSON.parse(localStorage.getItem('state')))
  }
  render() {
    return (
      <div></div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTarea: (text) => {
    dispatch(tareasAction(TAREAS.ADD_TAREA, text, generateId()));
  },
  deleteTarea: (id) => {
    dispatch(tareasAction(TAREAS.DELETE_TAREA, '', id));
  },
  setMenuAdmin: () => {
    dispatch(setVisibilityAction(MENU_VISIBLE.MENU_ADMIN))
  },
  setMenuUser: () => {
    dispatch(setVisibilityAction(MENU_VISIBLE.MENU_USER))
  }
});

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

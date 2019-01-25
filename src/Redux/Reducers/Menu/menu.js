import { MENU_VISIBLE } from '../../Actions/actionsCreators'

const { MENU_USER } = MENU_VISIBLE

export const visibleMenu = (visibleMenu = MENU_USER, action) => {
  switch (action.type) {
    case MENU_VISIBLE:
      return action.menu
    default:
      return visibleMenu;
  }
}
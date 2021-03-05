import { userConstants } from '../userConstants/user.constants';
const initialState = {
    ListData:{},
    detailsview:{}
 }
 export function listallsearchdetails(state = initialState, action) {
    switch (action.type) {
        case userConstants.LIST_DATA_REQUEST:
          return { ...state, ListData:action.payload}
        case userConstants.LIST_DATA_SUCCESS:
          return { ...state, ListData:action.payload}
        case userConstants.LIST_DATA_FAILURE:
          return { ...state, ListData:action.payload}
        case userConstants.SELECTED_DETAILVIEW_REQUEST:
            return { ...state, detailsview:action.payload}
        default:
          return state
      }
  }
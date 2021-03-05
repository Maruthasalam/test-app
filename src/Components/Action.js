import { userConstants } from '../userConstants/user.constants';
import {userService} from '../Services/user.service';
export const ListSearchAction = {
    listsearchdetails,
    selectedproperty
};
function listsearchdetails(){
    return dispatch =>{
        dispatch(listsearchDetailsRequest({}))
        userService.listsearchresults().then(
            results =>{
                dispatch(listsearchDetailsResponse(results));
            },
            error =>{
                dispatch(listsearchDetailsError(error))
            }
         )
      }
    }
function selectedproperty(params) {
    return dispatch =>{
        dispatch(selectedDetailResponse(params))
      } 
}
  const listsearchDetailsRequest = userObj =>({
        type: userConstants.LIST_DATA_REQUEST,
        payload: userObj
    })
  const listsearchDetailsResponse = userObj => ({
     type: userConstants.LIST_DATA_SUCCESS,
     payload:userObj
 })
    const listsearchDetailsError = userObj =>({
        type: userConstants.LIST_DATA_FAILURE,
        payload: userObj
    })
    const selectedDetailResponse = userObj =>({
        type: userConstants.SELECTED_DETAILVIEW_REQUEST,
        payload: userObj
    })
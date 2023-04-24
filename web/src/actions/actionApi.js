import * as ActionCreators from './actionCreators'

/** Auth */

export function userLoggedIn(token) {
    return dispatch => dispatch(ActionCreators.userLoggedIn(token))
}

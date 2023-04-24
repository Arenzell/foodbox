import * as ActionTypes from './actionTypes'

/** Auth */

export const userLoggedIn = token =>
    ({ type: ActionTypes.USER_LOGGED_IN, token, loggedAt: Date.now() })

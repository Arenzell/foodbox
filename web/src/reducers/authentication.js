import * as ActionTypes from '../actions/actionTypes'

const authState = {
    token: null
}

export const authentication = (state = authState, action) => {
    switch (action.type) {
        case ActionTypes.USER_LOGGED_IN:
            return {
                ...state,
                token: action.token
            }
        default:
            return { ...state }
    }
}

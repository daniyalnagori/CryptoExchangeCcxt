import {
    BTCDATA, BTCDATA_SUCCESS, BTCDATA_FAILURE, BTCGET, BTCGET_SUCCESS, BTCGET_FAILURE
} from '../constants'
const initialState = {
    user: {},
    authUser: {},
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
}

export default function btcReducer(state = initialState, action) {
    switch (action.type) {
        case BTCDATA:
            console.log('------', BTCDATA);
            return {
                ...state,
                authUser: {},
                user: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case BTCDATA_SUCCESS:
            console.log('------', BTCDATA_SUCCESS);
            return {
                ...state,
                authUser: action.payload,
                isLoading: false,
            }
        case BTCDATA_FAILURE:
            console.log('------', BTCDATA_FAILURE);
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }

        case BTCGET:
            console.log('------', BTCGET);
            return {
                ...state,
                authUser: {},
                user: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case BTCGET_SUCCESS:
            console.log('------', BTCGET_SUCCESS);
            return {
                ...state,
                authUser: action.payload,
                isLoading: false,
            }
        case BTCGET_FAILURE:
            console.log('------', BTCGET_FAILURE);
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
        default:
            return state
    }
}
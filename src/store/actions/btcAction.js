import {
    BTCDATA, BTCDATA_SUCCESS, BTCDATA_FAILURE,BTCGET,BTCGET_SUCCESS,BTCGET_FAILURE
} from '../constants'

export default class BtcActions {

    static btcData(user) {
        return {
            type: BTCDATA,
            payload: user
        }
    }

    static btcDataSuccess(data) {
        return {
            type: BTCDATA_SUCCESS,
            payload: data
        }
    }

    static btcDataFailure(error) {
        return {
            type: BTCDATA_FAILURE,
            error: error
        }
    }

    static btcGet() {
        return {
            type: BTCGET,
        }
    }

    static btcGetSuccess() {
        return {
            type:BTCGET_SUCCESS,
        }
    }

    static btcGetFailure() {
        return {
            type: BTCGET_FAILURE,
        }
    }
}
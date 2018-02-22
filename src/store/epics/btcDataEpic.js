import {
    BTCDATA, BTCDATA_SUCCESS, BTCDATA_FAILURE,BTCGET,BTCGET_SUCCESS,BTCGET_FAILURE
} from '../constants'
import 'rxjs';
import { Observable } from 'rxjs';
import { HttpService } from './../../services/http';
import Path from './../../config/path';

//** Epic Middlewares For Auth **//
export default class BTCDATAEpic {

    //Epic middleware for login
    static btc = (action$) =>
        action$.ofType(BTCDATA)
            .switchMap(({ payload }) => {
                return HttpService.post(Path.BTCDATA, payload)
                    .switchMap(({ response }) => {
                        console.log(response)
                        if (response) {
                            return Observable.of({
                                type: BTCDATA_SUCCESS,
                                payload: response
                                
                            });
                        }
                        return Observable.of({
                            type: BTCDATA_FAILURE,
                            payload: "email and password not matched ! Try Again "
                        });
                    });
            })


            static btcGet = (action$) =>
            action$.ofType(BTCGET)
                .switchMap(({ payload }) => {
                    return HttpService.get(Path.BTCGET)
                        .switchMap(({ response }) => {
                            console.log(response)
                            if (response) {
                                return Observable.of({
                                    type: BTCGET_SUCCESS,
                                    payload: response
                                    
                                });
                            }
                            return Observable.of({
                                type: BTCGET_FAILURE,
                                payload: "email and password not matched ! Try Again "
                            });
                        });
                })
    

    // //Epic middleware for signup
    // static signupEpic = (action$) =>
    //     action$.ofType(SIGNUP)
    //         .switchMap(({ payload }) => {
    //             return HttpService.post(Path.SIGNUP, payload)
    //                 .switchMap(({ response }) => {
    //                     if (response.err) {
    //                         return Observable.of({
    //                             type: SIGNUP_FAILURE,
    //                             payload: response.err
    //                         });
    //                     }
    //                     return Observable.of({
    //                         type: SIGNUP_SUCCESS,
    //                         payload: response
    //                     });
    //                 });
    //         })
}
import { combineEpics } from 'redux-observable';

import AuthEpic from './authEpic';
import  btcDataEpic from './btcDataEpic';
const rootEpic = combineEpics(
    AuthEpic.signupEpic,
    AuthEpic.signinEpic,
    btcDataEpic.btc,
    btcDataEpic.btcGet,
);

export default rootEpic;
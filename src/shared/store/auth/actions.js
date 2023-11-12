import jwtDecode from 'jwt-decode';
import axios from 'axios';
import {SUCCESS, ERROR} from "../../constants/loadingStatueses.constants";

export default {
    LOGIN(context, payload) {
        return login(context, payload);
    },

    VERIFY_LOGIN(context) {
        return verifyLogin(context);
    },

    LOGOUT({commit}) {
        commit('SESSION_END');
    },

    RESET_PASSWORD(context, payload) {
        return sendResetPasswordEmail(context, payload);
    },

    UPDATE_PASSWORD(context, payload) {
        return updatePassword(payload);
    }
}

const login = async ({commit}, {data}) => {
    const authUrl = `${process.env.VUE_APP_SERVICE_URL}/authenticate`;
    const timeoutInMilli = 10000;
    const requestConfig = {};
    requestConfig.timeout = timeoutInMilli;

    let jwt = '';
     await axios.post(authUrl, data, requestConfig).then((response) => {
        jwt = response.data.jwt;
    }).catch((error) => {
        commit('SESSION_FAIL')
         if(error.code === 'ERR_NETWORK')
             commit('SET_AUTH_FAILED_REASON', 'Unable to log in, please check back again')
         if(error.code === 'ERR_BAD_RESPONSE' || error.code === 'ECONNABORTED')
             commit('SET_AUTH_FAILED_REASON', 'Problem occurred, try again later')
         if(error.code === 'ERR_BAD_REQUEST')
             commit('SET_AUTH_FAILED_REASON', 'Invalid Username or Password')
        console.log(error);
    });
    if(jwt){
        try {
            const {id, email, firstname, lastname, authorities, exp} = jwtDecode(jwt);

            if (isJwtExpired(exp)) {
                commit('SESSION_END');
            } else {
                const user = {
                    id: id,
                    username: email,
                    givenName: firstname,
                    familyName: lastname,
                    fullName: firstname + ' ' + lastname,
                    exp: exp,
                    authorities: authorities
                };
                commit('SESSION_START', {jwt, user});

                // setup roles in the state from jwt roles
                if (authorities && authorities.length > 0) {
                    if (authorities.indexOf('ROLE_COACH') > -1) {
                        commit('SET_COACH_ROLE', true);
                    }
                    if (authorities.indexOf('ROLE_MANAGER') > -1) {
                        commit('SET_MANAGER_ROLE', true);
                    }
                }
            }
        } catch (e) {
            commit('SESSION_FAIL');
        }
    }
    else {
        commit('SESSION_FAIL');
    }
}

const verifyLogin = ({state, commit}) => {
    if (isJwtExpired(state.user?.exp)) {
        commit('SESSION_END');
    }
}

const isJwtExpired = (exp) => {
    if (exp) {
        return exp * 1000 < Date.now();
    }
    return true;
}

const sendResetPasswordEmail = async ({commit}, {data}) => {
    const sendResetPasswordEmailUrl = `${process.env.VUE_APP_SERVICE_URL}/reset/sendEmail`;
    const timeoutInMilli = 10000;
    const requestConfig = {};
    requestConfig.timeout = timeoutInMilli;

    // eslint-disable-next-line no-unused-vars
    await axios.post(sendResetPasswordEmailUrl, data, requestConfig).then((response) => {
        commit('SET_RESET_PASSWORD_RESPONSE', SUCCESS)
        // eslint-disable-next-line no-unused-vars
    }).catch((error) => {
        commit('SET_RESET_PASSWORD_RESPONSE', ERROR)
    });
}

const updatePassword = async ({data}) => {
    const updatePasswordUrl = `${process.env.VUE_APP_SERVICE_URL}/reset/updatePassword`;
    const timeoutInMilli = 10000;
    const requestConfig = {};
    requestConfig.timeout = timeoutInMilli;

    try {
        const response = await axios.post(updatePasswordUrl, data, requestConfig)
        if(response.status === 200)
            return SUCCESS;
    } catch(error) {
        console.log(error);
        return ERROR;
    }
}

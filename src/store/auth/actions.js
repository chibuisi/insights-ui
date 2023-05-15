import jwtDecode from 'jwt-decode';
import axios from 'axios';

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
        console.log(error);
    });
    if(jwt){
        try {
            const {id, email, firstName, lastName, authorities, exp} = jwtDecode(jwt);

            if (isJwtExpired(exp)) {
                commit('SESSION_END');
            } else {
                const user = {
                    id: id,
                    username: email,
                    givenName: firstName,
                    familyName: lastName,
                    fullName: firstName + ' ' + lastName,
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
export default {
    SESSION_START(state, {jwt, user}) {
        state.failed = false;
        state.jwt = jwt;
        state.user = user;
    },

    SESSION_END(state) {
        state.failed = false;
        state.jwt = null;
        state.user = {};
    },

    SESSION_FAIL(state) {
        state.failed = false;
        state.jwt = null;
        state.user = {};
    },

    SET_COACH_ROLE(state, hasCoachRole) {
        state.hasCoachRole = hasCoachRole;
    },

    SET_MANAGER_ROLE(state, hasManagerRole) {
        state.hasManagerRole = hasManagerRole;
    },

}
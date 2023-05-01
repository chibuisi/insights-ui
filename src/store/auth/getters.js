export default {
    isLoggedIn: ({ jwt, user }) => {
        return Boolean(jwt && user?.id);
    },

    getUserGivenName: ({ user }) => {
        const { givenName, familyName, username } = user;
        const name = givenName || familyName;

        return name ? name.charAt(0).toUpperCase() + name.slice(1) : username;
    },

    hasCoachRole: ({ hasCoachRole }) => {
        return hasCoachRole;
    }
}
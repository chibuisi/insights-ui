export default {
    isLoggedIn: ({ jwt, user }) => {
        return Boolean(jwt && user?.id);
    },

    getUserGivenName: ({ user }) => {
        const { givenName, familyName, username } = user;
        const name = givenName || familyName;

        return name ? name.charAt(0).toUpperCase() + name.slice(1) : username;
    },

    getUserProfile: ({ user }) => {
        return {
            firstname: user.givenName,
            lastname: user.familyName,
            fullname: `${user.givenName} ${user.familyName}`,
            title: user.title,
            jobTitle: user.jobTitle,
        }
    },

    getUserId: ({ user }) => {
        return user.id
    },

    hasCoachRole: ({ hasCoachRole }) => {
        return hasCoachRole;
    },

    getAuthFailedReason: ({ failedReason }) => {
        return failedReason;
    },

    getResetPasswordEmailResponse: ( { sendResetPasswordEmailResponse }) => {
        return sendResetPasswordEmailResponse;
    },

}
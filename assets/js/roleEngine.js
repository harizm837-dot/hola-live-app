// ROLE ENGINE

const RoleEngine = (() => {

    const ROLES = {
        VIEWER: "viewer",
        STREAMER: "streamer",
        MODERATOR: "moderator",
        ADMIN: "admin"
    };

    function getRole() {
        return localStorage.getItem("hola_role") || ROLES.VIEWER;
    }

    function setRole(role) {
        localStorage.setItem("hola_role", role);
        location.reload();
    }

    function is(role) {
        return getRole() === role;
    }

    function hasAccess(allowedRoles) {
        return allowedRoles.includes(getRole());
    }

    return {
        ROLES,
        getRole,
        setRole,
        is,
        hasAccess
    };

})();

// PERMISSION GUARD

function requireRole(allowedRoles) {
    if (!RoleEngine.hasAccess(allowedRoles)) {
        alert("Access Denied ❌");
        window.location.href = "index.html";
    }
}

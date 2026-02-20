const RoleEngine = (() => {
  const ROLES = { VIEWER:'viewer', STREAMER:'streamer', MODERATOR:'moderator', ADMIN:'admin' };
  let currentRole = localStorage.getItem('role') || ROLES.VIEWER;

  const setRole = (role) => {
    if(!Object.values(ROLES).includes(role)) return;
    currentRole = role;
    localStorage.setItem('role', currentRole);
    document.getElementById('currentRole').innerText = currentRole;
  }

  const getRole = () => currentRole;
  const is = (role) => currentRole === role;

  return {ROLES, setRole, getRole, is};
})();

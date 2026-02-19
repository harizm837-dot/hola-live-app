// MODERATOR PANEL

function openModPanel(){

    if(!RoleEngine.is(RoleEngine.ROLES.MODERATOR)){
        alert("Only Moderator allowed ❌");
        return;
    }

    const panel = document.createElement("div");
    panel.style.position="fixed";
    panel.style.inset="0";
    panel.style.background="rgba(0,0,0,0.9)";
    panel.style.color="white";
    panel.style.padding="20px";
    panel.innerHTML=`
        <h2>🛡 Moderator Panel</h2>
        <button onclick="alert('User muted')">Mute User</button>
        <button onclick="alert('User banned')">Ban User</button>
        <button onclick="this.parentElement.remove()">Close</button>
    `;
    document.body.appendChild(panel);
}

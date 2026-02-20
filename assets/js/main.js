document.addEventListener('DOMContentLoaded', () => {
  // Initialize UI
  Economy.updateUI();
  RoleEngine.setRole(RoleEngine.getRole());

  if(RoleEngine.is(RoleEngine.ROLES.STREAMER)){
    StreamerEngine.toggleLive(true);
  }

  if(VIP.isVIP()){
    document.getElementById('vipBadge').innerText = '👑 VIP ACTIVE';
  }

  // Service worker
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('service-worker.js')
      .then(()=>console.log('SW Registered'))
      .catch(err=>console.error(err));
  }
});

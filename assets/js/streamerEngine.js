const StreamerEngine = (() => {
  const panel = document.getElementById('streamerPanel');

  const toggleLive = (state) => {
    panel.style.display = state ? 'block' : 'none';
  }

  const updateEarnings = () => {
    document.getElementById('earnings').innerText = Economy.streamerEarnings;
  }

  const startLive = () => {
    if(!RoleEngine.is(RoleEngine.ROLES.STREAMER)) return alert('Streamer биш байна');
    toggleLive(true);
    ChatEngine.sendMessage("🔴 Live started!");
  }

  const stopLive = () => {
    toggleLive(false);
    ChatEngine.sendMessage("⛔ Live ended");
  }

  return {startLive, stopLive, updateEarnings};
})();

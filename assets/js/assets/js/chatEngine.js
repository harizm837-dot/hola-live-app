const ChatEngine = (() => {
  const chatContainer = document.getElementById('chat');
  const messages = [];

  const sendMessage = (text, user = RoleEngine.getRole()) => {
    const msg = {text, user, timestamp: Date.now()};
    messages.push(msg);
    displayMessage(msg);
  }

  const displayMessage = (msg) => {
    const div = document.createElement('div');
    div.className = 'msg';
    div.innerHTML = `<span>${msg.user}:</span> ${msg.text}`;
    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  const sendGift = (amount = 20) => {
    if(!Economy.spendTokens(amount)) return;
    Economy.addEarnings(amount);
    Ledger.addTransaction('gift', amount, RoleEngine.getRole(), 'streamer');
    showGiftEffect(amount);
  }

  const showGiftEffect = (amount) => {
    const el = document.createElement('div');
    el.className = 'gift-pop';
    el.innerText = `🎁 +${amount}`;
    document.body.appendChild(el);
    el.animate([
      {transform:'translateY(50px) scale(0.5)', opacity:0},
      {transform:'translateY(-50px) scale(1.2)', opacity:1},
      {transform:'translateY(-100px) scale(1)', opacity:0},
    ], {duration:2000, easing:'ease-out'});
    setTimeout(()=>el.remove(),2000);
  }

  return {sendMessage, sendGift};
})();

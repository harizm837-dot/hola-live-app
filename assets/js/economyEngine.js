const Economy = (() => {
  let wallet = parseInt(localStorage.getItem('wallet')) || 5000;
  let streamerEarnings = parseInt(localStorage.getItem('streamerEarnings')) || 0;

  const updateUI = () => {
    document.getElementById('walletTokens').innerText = wallet;
    document.getElementById('earnings').innerText = streamerEarnings;
  }

  const spendTokens = (amount) => {
    if(wallet >= amount){
      wallet -= amount;
      localStorage.setItem('wallet', wallet);
      updateUI();
      return true;
    }
    alert("Wallet-д хүрэлцэхгүй байна");
    return false;
  }

  const addEarnings = (amount) => {
    streamerEarnings += amount;
    localStorage.setItem('streamerEarnings', streamerEarnings);
    updateUI();
  }

  const topUp = (amount) => {
    wallet += amount;
    localStorage.setItem('wallet', wallet);
    updateUI();
  }

  return {wallet, updateUI, spendTokens, addEarnings, topUp};
})();

const Ledger = (() => {
  const addTransaction = (type, amount, from, to) => {
    let ledger = JSON.parse(localStorage.getItem('ledger')) || [];
    ledger.push({type, amount, from, to, timestamp: Date.now()});
    localStorage.setItem('ledger', JSON.stringify(ledger));
  }

  const getTransactions = () => {
    return JSON.parse(localStorage.getItem('ledger')) || [];
  }

  return {addTransaction, getTransactions};
})();

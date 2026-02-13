const ledgerKey = "hola_ledger";

export const Ledger = {
  getAll(){
    return JSON.parse(localStorage.getItem(ledgerKey)) || [];
  },
  addTransaction(tx){
    const all = Ledger.getAll();
    all.push(tx);
    localStorage.setItem(ledgerKey, JSON.stringify(all));
  },
  getTransactionsFor(userId){
    return Ledger.getAll().filter(tx => tx.from===userId || tx.to===userId);
  }
};

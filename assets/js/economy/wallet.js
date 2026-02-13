import { Ledger } from "./ledger.js";

export const Wallet = {

  getBalance(userId){
    const txs = Ledger.getTransactionsFor(userId);

    let balance = 0;

    txs.forEach(tx => {
      if(tx.to === userId) balance += tx.amount;
      if(tx.from === userId) balance -= tx.amount;
    });

    return balance;
  }

};

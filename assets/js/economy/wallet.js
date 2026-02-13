import { Ledger } from "./ledger.js";

export const Wallet = {
  getBalance(userId){
    const txs = Ledger.getTransactionsFor(userId);
    const balance = txs.reduce((acc,tx)=>{
      if(tx.to===userId) acc+=tx.amount;
      if(tx.from===userId) acc-=tx.amount;
      return acc;
    },0);
    return balance;
  },
  credit(userId,amount){
    Ledger.addTransaction({
      from:null,
      to:userId,
      type:"SYSTEM_CREDIT",
      amount,
      createdAt:Date.now()
    });
  },
  debit(userId,amount){
    Ledger.addTransaction({
      from:userId,
      to:null,
      type:"SYSTEM_DEBIT",
      amount,
      createdAt:Date.now()
    });
  }
};

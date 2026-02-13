import { Wallet } from "./wallet.js";
import { Ledger } from "./ledger.js";

export const Referral = {

  applyBonus(userId, amount){

    const user = JSON.parse(localStorage.getItem("hola_user"));
    if(!user || !user.invitedBy) return;

    const bonus = Math.floor(amount * 0.05);

    Ledger.addTransaction({
      id: "tx_" + (Date.now()+2),
      from: null,
      to: user.invitedBy,
      type: "REFERRAL_BONUS",
      amount: bonus,
      createdAt: Date.now()
    });

  }

};

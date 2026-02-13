import { Wallet } from "./wallet.js";

export const Referral = {
  applyBonus(userId, amount){
    const user = JSON.parse(localStorage.getItem("hola_user"));
    if(user.invitedBy){
      const bonus = Math.floor(amount*0.05); // 5%
      Wallet.credit(user.invitedBy, bonus);
      Ledger.addTransaction({
        from:null,
        to:user.invitedBy,
        type:"REFERRAL_BONUS",
        amount:bonus,
        createdAt:Date.now()
      });
    }
  }
};

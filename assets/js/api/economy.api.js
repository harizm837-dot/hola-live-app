import { Wallet } from "../economy/wallet.js";
import { Ledger } from "../economy/ledger.js";
import { Referral } from "../economy/referral.js";
import { GiftAPI } from "./gift.api.js";

export const EconomyAPI = {

  async getBalance(userId){
    return Wallet.getBalance(userId);
  },

  async sendGift(fromUserId, toUserId, giftId){

    const gift = await GiftAPI.getGift(giftId);
    if(!gift) throw new Error("Gift олдсонгүй");

    const cost = gift.price;

    const balance = Wallet.getBalance(fromUserId);
    if(balance < cost){
      throw new Error("Токен хүрэлцэхгүй байна");
    }

    // Sender debit
    Ledger.addTransaction({
      id: "tx_" + Date.now(),
      from: fromUserId,
      to: null,
      type: "GIFT_SENT",
      amount: cost,
      giftId,
      createdAt: Date.now()
    });

    // Receiver credit
    Ledger.addTransaction({
      id: "tx_" + (Date.now()+1),
      from: null,
      to: toUserId,
      type: "GIFT_RECEIVED",
      amount: cost,
      giftId,
      createdAt: Date.now()
    });

    Referral.applyBonus(fromUserId, cost);

    return { success:true };
  }

};

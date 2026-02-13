// Backend-ready API interface
import { Wallet } from "../economy/wallet.js";
import { Ledger } from "../economy/ledger.js";
import { Referral } from "../economy/referral.js";

export const EconomyAPI = {
  async getBalance(userId){
    return Wallet.getBalance(userId);
  },
  async sendGift(fromUserId, toUserId, giftId){
    const gift = await GiftAPI.getGift(giftId);
    const cost = gift.price;

    if(Wallet.getBalance(fromUserId) < cost){
      throw new Error("Токен хүрэлцэхгүй байна");
    }

    // Deduct from sender
    Wallet.debit(fromUserId, cost);

    // Add to receiver
    Wallet.credit(toUserId, cost);

    // Add to ledger
    Ledger.addTransaction({
      from: fromUserId,
      to: toUserId,
      type: "GIFT_SENT",
      amount: cost,
      giftId,
      createdAt: Date.now()
    });

    // Referral bonus
    Referral.applyBonus(fromUserId, cost);

    return { success:true };
  }
};

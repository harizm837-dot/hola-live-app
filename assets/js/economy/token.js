window.TokenEngine = {

  add(amount, reason=""){
    let state = State.get();
    state.user.tokens += amount;

    state.ledger = state.ledger || [];
    state.ledger.push({
      type:"credit",
      amount,
      reason,
      date:new Date().toISOString()
    });

    State.update(state);
    Notify.toast("+" + amount + " токен");
  },

  spend(amount, reason=""){
    let state = State.get();
    if(state.user.tokens < amount){
      Notify.toast("Токен хүрэлцэхгүй");
      return false;
    }

    state.user.tokens -= amount;

    state.ledger = state.ledger || [];
    state.ledger.push({
      type:"debit",
      amount,
      reason,
      date:new Date().toISOString()
    });

    State.update(state);
    Notify.toast("-" + amount + " токен");
    return true;
  }

};

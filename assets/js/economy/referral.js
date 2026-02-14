window.ReferralEngine = {

  generate(){
    let state = State.get();
    if(!state.user.refCode){
      state.user.refCode = "HOLA" + Math.floor(Math.random()*100000);
      State.update(state);
    }
    return state.user.refCode;
  },

  apply(code){
    let state = State.get();
    if(state.user.usedReferral){
      Notify.toast("Та аль хэдийн код ашигласан");
      return;
    }

    state.user.usedReferral = true;
    State.update(state);

    TokenEngine.add(200,"Referral bonus");
    Notify.toast("Referral амжилттай!");
  }

};

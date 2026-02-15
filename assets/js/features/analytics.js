window.AnalyticsEngine = {

  recordGift(amount){
    let state = State.get();
    state.streamer = state.streamer || {
      totalGifts:0,
      totalEarnings:0,
      viewers:0
    };

    state.streamer.totalGifts += 1;
    state.streamer.totalEarnings += amount;

    State.update(state);
  },

  getStats(){
    let state = State.get();
    return state.streamer || {
      totalGifts:0,
      totalEarnings:0,
      viewers:0
    };
  }

};

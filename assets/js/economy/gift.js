window.GiftEngine = {

  send(cost=50){
    if(TokenEngine.spend(cost,"Бэлэг илгээв")){
      AnalyticsEngine.recordGift(cost);
      this.animate();
    }
  },

  animate(){
    const div = document.createElement("div");
    div.style.position="fixed";
    div.style.top="40%";
    div.style.left="50%";
    div.style.transform="translate(-50%,-50%) scale(1)";
    div.style.fontSize="50px";
    div.style.transition="0.5s";
    div.innerText="🎁";
    document.body.appendChild(div);

    setTimeout(()=>{
      div.style.transform="translate(-50%,-50%) scale(1.5)";
      div.style.opacity="0";
    },300);

    setTimeout(()=>{
      div.remove();
    },1000);
  }

};

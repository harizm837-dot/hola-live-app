window.GiftEngine = {

  send(cost=50){
    if(TokenEngine.spend(cost,"Бэлэг илгээв")){
      this.animate();
    }
  },

  animate(){
    const div = document.createElement("div");
    div.style.position="fixed";
    div.style.top="40%";
    div.style.left="50%";
    div.style.transform="translate(-50%,-50%)";
    div.style.fontSize="40px";
    div.innerText="🎁";
    document.body.appendChild(div);

    setTimeout(()=>{
      div.remove();
    },1500);
  }

};

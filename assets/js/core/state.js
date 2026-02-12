const defaultState = {
  user:{
    tokens:1000,
    vip:false
  },
  app:{
    currentPage:"home"
  }
};

if(!StorageEngine.get("hola_state")){
  StorageEngine.set("hola_state",defaultState);
}

window.State = {
  get(){
    return StorageEngine.get("hola_state");
  },
  update(newData){
    StorageEngine.set("hola_state",newData);
  }
};

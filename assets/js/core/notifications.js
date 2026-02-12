window.Notify = {
  toast(message){
    const toast = document.createElement("div");
    toast.className="toast";
    toast.innerText=message;
    document.getElementById("toast-container").appendChild(toast);
    setTimeout(()=>toast.classList.add("show"),100);
    setTimeout(()=>{
      toast.classList.remove("show");
      setTimeout(()=>toast.remove(),300);
    },3000);
  }
};

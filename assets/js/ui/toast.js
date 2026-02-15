window.AdvancedToast = {

  show(message,type="normal"){
    const toast = document.createElement("div");
    toast.className="toast";
    toast.innerText=message;

    if(type==="success"){
      toast.style.background="#004d00";
    }
    if(type==="error"){
      toast.style.background="#4d0000";
    }

    document.getElementById("toast-container").appendChild(toast);

    setTimeout(()=>toast.classList.add("show"),100);

    setTimeout(()=>{
      toast.classList.remove("show");
      setTimeout(()=>toast.remove(),300);
    },3000);
  }

};

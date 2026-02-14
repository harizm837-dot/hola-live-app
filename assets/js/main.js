import { initLivePage } from "./pages/live.page.js";

function detectPage(){

  const page = window.location.hash.replace("#","");

  if(page === "live"){
    setTimeout(() => {
      initLivePage();
    }, 50);
  }

}

window.addEventListener("hashchange", detectPage);
window.addEventListener("load", detectPage);

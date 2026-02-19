// GROWTH / REFERRAL SYSTEM

function getMyRefCode(){
    let code = localStorage.getItem("hola_refcode");
    if(!code){
        code = "HL" + Math.floor(Math.random()*99999);
        localStorage.setItem("hola_refcode", code);
    }
    return code;
}

function applyReferral(){
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");

    if(ref && !localStorage.getItem("hola_ref_applied")){
        localStorage.setItem("hola_ref_applied", ref);
        Economy.addTokens(100);
        alert("Referral bonus +100 tokens 🎉");
    }
}

function shareReferral(){
    const link = window.location.origin + "?ref=" + getMyRefCode();
    navigator.clipboard.writeText(link);
    alert("Referral link copied 🔗");
}

document.addEventListener("DOMContentLoaded", applyReferral);

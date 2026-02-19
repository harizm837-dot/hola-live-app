// VIP SYSTEM

const VIP = (()=>{

    function isVIP(){
        return localStorage.getItem("hola_vip") === "true";
    }

    function activateVIP(){
        if(Economy.spendTokens(300)){
            localStorage.setItem("hola_vip","true");
            alert("VIP Activated 👑");
            location.reload();
        }
    }

    function badge(){
        return isVIP() ? "👑 VIP" : "";
    }

    return {
        isVIP,
        activateVIP,
        badge
    };

})();

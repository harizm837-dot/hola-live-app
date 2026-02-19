// ECONOMY ENGINE

const Economy = (() => {

    function getTokens(){
        return parseInt(localStorage.getItem("hola_tokens") || "500");
    }

    function setTokens(val){
        localStorage.setItem("hola_tokens", val);
        updateWalletUI();
    }

    function addTokens(val){
        setTokens(getTokens() + val);
    }

    function spendTokens(val){
        if(getTokens() >= val){
            setTokens(getTokens() - val);
            return true;
        }
        alert("Not enough tokens ❌");
        return false;
    }

    function updateWalletUI(){
        const el = document.getElementById("walletTokens");
        if(el) el.innerText = getTokens();
    }

    return {
        getTokens,
        addTokens,
        spendTokens,
        updateWalletUI
    };

})();

document.addEventListener("DOMContentLoaded", ()=>{
    Economy.updateWalletUI();
});

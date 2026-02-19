// STREAMER ANALYTICS

const Analytics = (()=>{

    function recordGift(amount){
        let total = parseInt(localStorage.getItem("hola_total_gifts")||"0");
        total += amount;
        localStorage.setItem("hola_total_gifts", total);
    }

    function getStats(){
        return {
            totalGifts: localStorage.getItem("hola_total_gifts") || 0,
            totalTokens: Economy.getTokens(),
            role: RoleEngine.getRole()
        };
    }

    return {
        recordGift,
        getStats
    };

})();

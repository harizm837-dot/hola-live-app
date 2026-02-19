// LEADERBOARD SYSTEM

function getLeaderboard(){
    return JSON.parse(localStorage.getItem("hola_leaderboard") || "[]");
}

function updateLeaderboard(name, amount){
    let board = getLeaderboard();

    let user = board.find(u => u.name === name);
    if(user){
        user.amount += amount;
    } else {
        board.push({name, amount});
    }

    board.sort((a,b)=>b.amount-a.amount);
    board = board.slice(0,10);

    localStorage.setItem("hola_leaderboard", JSON.stringify(board));
}

function renderLeaderboard(){
    const list = document.getElementById("leaderboardList");
    if(!list) return;

    list.innerHTML = "";

    getLeaderboard().forEach((u,i)=>{
        const li = document.createElement("li");
        li.innerText = `${i+1}. ${u.name} — 💎 ${u.amount}`;
        list.appendChild(li);
    });
}

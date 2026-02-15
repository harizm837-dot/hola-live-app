window.BottomNav = {

  init(){
    const nav = document.getElementById("bottom-nav");

    nav.innerHTML = `
      <button class="nav-btn" data-page="home">Нүүр</button>
      <button class="nav-btn" data-page="live">Live</button>
      <button class="nav-btn" data-page="invite">Урилга</button>
      <button class="nav-btn" data-page="ledger">Дэвтэр</button>
      <button class="nav-btn" data-page="streamer">Аналитик</button>
      <button class="nav-btn" data-page="moderator">Mod</button>
      <button class="nav-btn" data-page="profile">Профайл</button>
    `;

    nav.querySelectorAll("button").forEach(btn=>{
      btn.onclick = () => Router.load(btn.dataset.page);
    });
  },

  updateActive(page){
    document.querySelectorAll(".nav-btn").forEach(btn=>{
      btn.classList.toggle("active",btn.dataset.page===page);
    });
  }

};

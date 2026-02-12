window.Router = {
  load(page){
    fetch("pages/" + page + ".html")
      .then(res=>res.text())
      .then(html=>{
        document.getElementById("page-container").innerHTML = html;
        let state = State.get();
        state.app.currentPage = page;
        State.update(state);
        BottomNav.updateActive(page);
      });
  }
};

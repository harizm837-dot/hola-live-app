const UIEngine = (() => {
  const showEntryEffect = (entryId) => {
    const el = document.createElement('div');
    el.className = `entry-effect ${entryId}`;
    el.innerText = `${RoleEngine.getRole().toUpperCase()} ENTERED`;
    document.body.appendChild(el);

    el.animate([
      {transform:'scale(0.3)', opacity:0},
      {transform:'scale(1.2)', opacity:1},
      {transform:'scale(1)', opacity:1},
    ], {duration:1500, easing:'ease-out'});

    setTimeout(()=>el.remove(),1500);
  }
})();

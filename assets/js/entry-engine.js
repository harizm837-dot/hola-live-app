const EntryEngine = (() => {
  const catalog = [
    {id:'glow', name:'Glow', price:500, duration:1*24*60*60*1000},
    {id:'hero', name:'Hero', price:2000, duration:3*24*60*60*1000},
    {id:'vehicle', name:'Vehicle', price:5000, duration:7*24*60*60*1000},
    {id:'legend', name:'Legendary', price:15000, duration:14*24*60*60*1000},
    {id:'elite', name:'Elite', price:50000, duration:30*24*60*60*1000}
  ];

  const purchase = (entryId) => {
    const entry = catalog.find(e => e.id===entryId);
    if(!entry) return alert('Entry олдсонгүй');
    if(!Economy.spendTokens(entry.price)) return;
    let active = JSON.parse(localStorage.getItem('activeEntries')) || {};
    active[entryId] = Date.now() + entry.duration;
    localStorage.setItem('activeEntries', JSON.stringify(active));
    Ledger.addTransaction('entry_purchase', entry.price, RoleEngine.getRole(), 'platform');
    UIEngine.showEntryEffect(entryId);
  }

  const checkActive = (entryId) => {
    const active = JSON.parse(localStorage.getItem('activeEntries')) || {};
    return active[entryId] && active[entryId] > Date.now();
  }

  return {catalog, purchase, checkActive};
})();

const AdminEngine = (() => {
  const toggleEntry = (entryId, state) => {
    let catalog = JSON.parse(localStorage.getItem('entryCatalog')) || {};
    catalog[entryId] = {active: state};
    localStorage.setItem('entryCatalog', JSON.stringify(catalog));
  }

  const setPrice = (entryId, price) => {
    let catalog = JSON.parse(localStorage.getItem('entryCatalog')) || {};
    catalog[entryId] = {...catalog[entryId], price};
    localStorage.setItem('entryCatalog', JSON.stringify(catalog));
  }

  return {toggleEntry, setPrice};
})();

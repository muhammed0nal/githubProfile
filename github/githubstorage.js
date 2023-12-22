class Storage {
  setStorage(name) {
    let storageEl = JSON.stringify(name);
    // lastSearchs.innerHTML = <li class="list-group-item">${name}</li>;
    localStorage.setItem("name", storageEl);
  }
  storageArrPush(data) {
    storageArr.push(data);
  }
  deleteStorage() {
    localStorage.clear();
  }
}

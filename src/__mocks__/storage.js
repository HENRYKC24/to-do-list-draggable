const localStorage = {

  store: [],

  getFromStorage() {
    return this.store;
  },

  storeLocally(tasks) {
    this.store = tasks;
    return true;
  },

  getLastElement() {
    return this.store[this.store.length - 1];
  },

  reorderIndices() {
    let index = 1;
    this.store.forEach((task) => {
      task.index = index;
      index += 1;
    });
  },

  clearAll() {
    this.store = [];
    return this.store;
  },

  clearAllCompleted() {
    this.store = this.store.filter((item) => !item.completed);
  },

};

export default localStorage;
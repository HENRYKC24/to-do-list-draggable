import localStorage from './storage';

const toggleCompleted = (task) => {
  const tasks = localStorage.getFromStorage();
  task.completed = !task.completed;
  localStorage.storeLocally(tasks);
};

export default toggleCompleted;
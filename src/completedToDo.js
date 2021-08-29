const updateCompleted = (task, tasks) => {
  task.completed = !task.completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const addEventListenerToLinks = (addToDo, remove, refresh) => {
  document.querySelector('.item:nth-child(2)').addEventListener('click', addToDo);
  document.querySelector('.item:nth-child(3)').addEventListener('click', remove);
  document.querySelector('.item:nth-child(4)').addEventListener('click', refresh);
};

export default updateCompleted;
export { addEventListenerToLinks };
import localStorage from './storage';

const addToDo = (description) => {
  const tasks = localStorage.getFromStorage();

  const data = {
    description,
    index: tasks.length + 1,
    completed: false,
  };

  tasks.push(data);
  localStorage.storeLocally(tasks);

  return data;
};

const removeOne = (task) => {
  let tasks = localStorage.getFromStorage();

  tasks = tasks.filter((oneTask) => oneTask.index !== task.index);

  localStorage.storeLocally(tasks);

  return tasks;
};

const getTodos = () => localStorage.getFromStorage();

const drag = (draggedIndex, droppedOnIndex) => {
  const tasks = getTodos();
  if (draggedIndex < droppedOnIndex) {
    tasks.splice(droppedOnIndex, 0, tasks[draggedIndex - 1]);
    tasks.splice(draggedIndex - 1, 1);
  } else if (draggedIndex > droppedOnIndex && (droppedOnIndex - draggedIndex !== 1)) {
    tasks.splice(droppedOnIndex - 1, 0, tasks[draggedIndex - 1]);
    tasks.splice(draggedIndex, 1);
  }
  localStorage.reorderIndices();
};

export {
  addToDo, removeOne, getTodos, drag,
};
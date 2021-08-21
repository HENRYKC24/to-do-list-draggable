let dragStore = null;
const reorderIndices = (tasks) => {
  let index = 1;
  tasks.forEach((task) => {
    task.index = index;
    index += 1;
  });
};
const drop = (ev) => {
  ev.preventDefault();
  const elUnder = ev.target;
  const pElement = elUnder.parentElement;
  const parentName = pElement.nodeName;
  if (parentName === 'DIV') {
    const actualDivClass = ev.target.classList[0];
    if (actualDivClass === 'to-do-row') {
      elUnder.parentElement.insertBefore(dragStore, elUnder.nextElementSibling);
    } else if (actualDivClass === 'to-do') {
      elUnder.parentElement.parentElement.parentElement.insertBefore(
        dragStore,
        elUnder.parentElement.parentElement.nextElementSibling,
      );
    } else if (actualDivClass === 'fas') {
      elUnder.parentElement.parentElement.insertBefore(
        dragStore,
        elUnder.parentElement.nextElementSibling,
      );
    } else if (actualDivClass === 'checkbox') {
      elUnder.parentElement.parentElement.parentElement.insertBefore(
        dragStore,
        elUnder.parentElement.parentElement.nextElementSibling,
      );
    }
  }
};

const dragEnd = (showToDo) => {
  setTimeout(() => {
    dragStore.style.backgroundColor = '#fff';
  }, 1000);

  const allToDoElements = Array.from(document.querySelectorAll('.to-do-row'));
  const ids = allToDoElements.map((el) => Number(el.id));
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  const mockTasks = [];
  ids.forEach((id) => {
    mockTasks.push(tasks.filter((task) => task.index === id)[0]);
  });
  tasks = mockTasks;
  reorderIndices(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showToDo(JSON.parse(localStorage.getItem('tasks')));
};

const drag = (ev) => {
  const draggedElement = ev.target;
  dragStore = draggedElement;
  dragStore.style.backgroundColor = '#4c3c3c';
};

const dragStart = (e) => {
  e.target.style.backgroundColor = '#4c3c3c';
};

const removeOne = (task, tasks, showToDo) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  tasks.splice(tasks.indexOf(task), 1);
  reorderIndices(tasks);
  // eslint-disable-next-line no-use-before-define
  showToDo(tasks);
};

const removeSelected = (tasks, showToDo) => {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = tasks.filter((task) => !task.completed);
  reorderIndices(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showToDo(tasks);
  return true;
};

const addToDo = (tasks, showToDo, goToInput) => {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  const description = document.querySelector('.input').value;
  if (!description) {
    goToInput();
    return false;
  }

  const data = {
    description,
    index: tasks.length + 1,
    completed: false,
  };
  tasks.push(data);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showToDo(tasks);
  document.querySelector('.input').value = '';
  goToInput();
  return true;
};

export {
  drop,
  dragEnd,
  drag,
  dragStart,
  removeOne,
  removeSelected,
  addToDo,
};
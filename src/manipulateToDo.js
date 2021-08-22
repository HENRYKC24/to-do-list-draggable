let dragStore = document.querySelector('.to-do-row');
const prevNextIds = {
  prevId: 0,
  nextId: 1,
};

const reorderIndices = (tasks) => {
  let index = 1;
  tasks.forEach((task) => {
    task.index = index;
    index += 1;
  });
};

const drop = (ev) => {
  ev.preventDefault();
  let elUnder = ev.target;
  const classArray = elUnder.classList.value.split(' ');

  if (
    classArray.includes('fa-check')
    || classArray.includes('checkbox')
    || classArray.includes('to-do')
  ) {
    elUnder = elUnder.parentElement.parentElement;
  } else if (
    classArray.includes('fa-arrows-alt')
    || classArray.includes('two')
  ) {
    elUnder = elUnder.parentElement;
  }
  prevNextIds.nextId = Number(elUnder.id);
  prevNextIds.prevId = Number(dragStore.id);

  if (prevNextIds.prevId < prevNextIds.nextId) {
    elUnder.parentElement.insertBefore(
      dragStore,
      elUnder.nextElementSibling,
    );
  } else if (prevNextIds.prevId > prevNextIds.nextId) {
    elUnder.parentElement.insertBefore(dragStore, elUnder);
  }

  const { id } = elUnder;

  if (prevNextIds.prevId < prevNextIds.nextId) {
    setTimeout(() => {
      document.getElementById(id).style.backgroundColor = '#4c3c3c';
      setTimeout(() => {
        document.getElementById(id).style.backgroundColor = '#fff';
      }, 810);
    }, 10);
  } else if (prevNextIds.prevId > prevNextIds.nextId) {
    setTimeout(() => {
      document.getElementById(
        id,
      ).style.backgroundColor = '#4c3c3c';
      setTimeout(() => {
        document.getElementById(
          id,
        ).style.backgroundColor = '#fff';
      }, 810);
    }, 10);
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
  showToDo();
};

const drag = (ev) => {
  const draggedElement = ev.target;
  dragStore = draggedElement;
  dragStore.style.backgroundColor = '#4c3c3c';
};

const dragStart = (e) => {
  e.target.style.backgroundColor = '#4c3c3c';
};

const removeOne = (task, showToDo) => {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = tasks.filter((oneTask) => oneTask.index !== task.index);
  reorderIndices(tasks);
  // eslint-disable-next-line no-use-before-define
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showToDo();
};

const removeSelected = (tasks, showToDo) => {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = tasks.filter((task) => !task.completed);
  reorderIndices(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showToDo();
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
  showToDo();
  document.querySelector('.input').value = '';
  goToInput();
  return true;
};

export {
  drop, dragEnd, drag, dragStart, removeOne, removeSelected, addToDo,
};

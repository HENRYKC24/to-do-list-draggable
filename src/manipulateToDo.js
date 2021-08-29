const tasks = [];
let dragStore = document.querySelector('.to-do-row');
const prevNextIds = {
  prevId: 0,
  nextId: 1,
};
const removable = {
  init: true,
  value: false,
};

const toggleDraggable = () => {
  const allList = Array.from(document.querySelectorAll('.to-do-row'));
  allList.forEach((list) => {
    list.draggable = !list.draggable;
  });
};

const getFromStorage = () => {
  if (localStorage.tasks) {
    return JSON.parse(localStorage.getItem('tasks'));
  }
  return [];
};

const storeLocally = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return true;
};

const reorderIndices = (tasks) => {
  let index = 1;
  tasks.forEach((task) => {
    task.index = index;
    index += 1;
  });
  storeLocally(tasks);
  return tasks;
};

const drag = (ev) => {
  const draggedElement = ev.target;
  dragStore = draggedElement;
  dragStore.style.backgroundColor = '#4c3c3c';
};

const getCorrectEventTarget = (e, id) => {
  let eventTarget = e.target || document.getElementById(id);
  const classArray = eventTarget.classList.value.split(' ');
  if (
    classArray.includes('fa-check')
    || classArray.includes('checkbox')
    || classArray.includes('to-do')
  ) {
    eventTarget = eventTarget.parentElement.parentElement;
  } else if (
    classArray.includes('fa-arrows-alt')
    || classArray.includes('two')
  ) {
    eventTarget = eventTarget.parentElement;
  }
  return eventTarget;
};

const colorElementOnDrag = (element) => {
  element.style.backgroundColor = '#4c3c3c';
  element.style.color = '#fff';
  Array.from(element.childNodes).forEach((node) => {
    if (node.nodeName === 'DIV') {
      const nodes = node.childNodes;
      Array.from(nodes).forEach((one) => {
        one.style.backgroundColor = '#4c3c3c';
        one.style.color = '#fff';
      });
    }
    node.style.backgroundColor = '#4c3c3c';
    node.style.color = '#fff';
  });
};

const removeColorOnDrop = (elUnder, showToDo) => {
  elUnder.style.backgroundColor = '#fff';
  elUnder.style.color = '#fff';
  Array.from(elUnder.childNodes).forEach((node) => {
    if (node.nodeName === 'DIV') {
      const nodes = node.childNodes;
      Array.from(nodes).forEach((one) => {
        one.style.backgroundColor = '#fff';
        one.style.color = 'rgb(134, 122, 122)';
      });
    }
    node.style.backgroundColor = '#fff';
    node.style.color = 'rgb(204, 187, 187)';
    if (node.classList.value.includes('fa-arrows-alt')) {
      node.addEventListener('mouseover', () => {
        node.style.color = 'rgb(75, 66, 66)';
      });
      node.addEventListener('mouseout', () => {
        node.style.color = 'rgb(204, 187, 187)';
      });
    }
  });
  showToDo(getFromStorage());
};

const dragStart = (e) => {
  const elUnder = getCorrectEventTarget(e, false);
  colorElementOnDrag(elUnder);
};

const drop = (ev, showToDo) => {
  ev.preventDefault();
  const elUnder = getCorrectEventTarget(ev, false);
  prevNextIds.nextId = Number(elUnder.id);
  prevNextIds.prevId = Number(dragStore.id);
  if (prevNextIds.prevId < prevNextIds.nextId) {
    elUnder.parentElement.insertBefore(dragStore, elUnder.nextElementSibling);
  } else if (prevNextIds.prevId > prevNextIds.nextId) {
    elUnder.parentElement.insertBefore(dragStore, elUnder);
  }

  const { id } = elUnder;
  if (prevNextIds.prevId < prevNextIds.nextId) {
    setTimeout(() => {
      const elUnder = getCorrectEventTarget(false, id);
      colorElementOnDrag(elUnder);
      setTimeout(() => {
        removeColorOnDrop(getCorrectEventTarget(false, id), showToDo);
      }, 800);
      toggleDraggable();
    }, 10);
  } else if (prevNextIds.prevId > prevNextIds.nextId) {
    setTimeout(() => {
      const elUnder = getCorrectEventTarget(false, id);
      colorElementOnDrag(elUnder);
      setTimeout(() => {
        removeColorOnDrop(elUnder, showToDo);
      }, 800);
      toggleDraggable();
    }, 10);
  }
};

const dragEnd = (showToDo) => {
  setTimeout(() => {
    dragStore.style.backgroundColor = '#fff';
  }, 1000);

  const allToDoElements = Array.from(document.querySelectorAll('.to-do-row'));
  const ids = allToDoElements.map((el) => Number(el.id));
  let tasks = getFromStorage();
  const mockTasks = [];
  ids.forEach((id) => {
    mockTasks.push(tasks.filter((task) => task.index === id)[0]);
  });
  tasks = mockTasks;
  reorderIndices(tasks);
  storeLocally(tasks);
  showToDo(tasks);
};

const removeOne = (task, showToDo) => {
  let tasks = getFromStorage();
  if (removable.value || removable.init) {
    tasks = tasks.filter((oneTask) => oneTask.index !== task.index);
    removable.init = false;
  }

  removable.value = false;

  setTimeout(() => {
    removable.init = false;
    removable.value = true;
  }, 500);

  reorderIndices(tasks);
  storeLocally(tasks);
  return showToDo(tasks);
};

const removeSelected = (tasks, showToDo) => {
  tasks = getFromStorage(tasks);
  tasks = tasks.filter((task) => !task.completed);
  reorderIndices(tasks);
  storeLocally(tasks);
  showToDo(tasks);
  return true;
};

const addToDo = (tasks, showToDo) => {
  tasks = getFromStorage();
  const description = document.querySelector('.input').textContent;
  if (!description) {
    return false;
  }

  const data = {
    description,
    index: tasks.length + 1,
    completed: false,
    timeStamp: new Date().getTime(),
  };

  document.querySelector('.input').innerHTML = '';
  tasks.unshift(data);
  tasks = reorderIndices(tasks);
  storeLocally(tasks);
  showToDo();
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
  getFromStorage,
  storeLocally,
  reorderIndices,
  removable,
  tasks,
};

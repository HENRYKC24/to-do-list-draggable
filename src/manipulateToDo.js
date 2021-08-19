let dragStore = null;
const onDragOver = (ev) => {
  ev.preventDefault();
  const elUnder = ev.target;
  const pElement = elUnder.parentElement;
  const parentName = pElement.nodeName;
  if (parentName === 'DIV') {
    const actualDivClass = ev.target.classList[0];
    if (actualDivClass === 'to-do-row') {
      elUnder.parentElement.insertBefore(dragStore, elUnder);
    } else if (actualDivClass === 'to-do') {
      elUnder.parentElement.parentElement.parentElement.insertBefore(
        dragStore,
        elUnder.parentElement.parentElement,
      );
    } else if (actualDivClass === 'fas') {
      elUnder.parentElement.parentElement.insertBefore(
        dragStore,
        elUnder.parentElement,
      );
    } else if (actualDivClass === 'checkbox') {
      elUnder.parentElement.parentElement.parentElement.insertBefore(
        dragStore,
        elUnder.parentElement.parentElement,
      );
    }
  }
};

const dragEnd = () => {
  setTimeout(() => {
    dragStore.style.backgroundColor = '#fff';
  }, 1000);
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
  // eslint-disable-next-line no-use-before-define
  showToDo(tasks);
};

const removeSelected = (tasks, showToDo, goToInput) => {
  tasks = tasks.filter((task) => !task.completed);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showToDo(tasks);
  goToInput();
  return true;
};

const addToDo = (tasks, showToDo, goToInput) => {
  const description = document.querySelector('.input').value;
  if (!description) {
    goToInput();
    return false;
  }
  const indexArray = tasks.map(({ index }) => index);
  const sortedIndeces = indexArray.sort((a, b) => a - b);
  let highestIndex = sortedIndeces[sortedIndeces.length - 1];
  if (Number.isNaN(highestIndex) || !highestIndex) {
    highestIndex = 0;
  }
  const data = {
    description,
    index: highestIndex + 1,
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
  onDragOver, dragEnd, drag, dragStart, removeOne, removeSelected, addToDo,
};

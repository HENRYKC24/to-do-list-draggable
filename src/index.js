import './style.css';
import _ from 'lodash';
import updateCompleted, { addEventListenerToLinks } from './completedToDo';

document.querySelector('.footer-text').innerHTML = `&copy; ${new Date().getFullYear()} Henry-Kc, built with 💕 from me`;

let dragStore = null;

const drag = (ev) => {
  const draggedElement = ev.target;
  dragStore = draggedElement;
  dragStore.style.backgroundColor = '#4c3c3c';
};

const dragStart = (e) => {
  e.target.style.backgroundColor = '#4c3c3c';
};

const dragEnd = () => {
  setTimeout(() => {
    dragStore.style.backgroundColor = '#fff';
  }, 1000);
};

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
        dragStore, elUnder.parentElement.parentElement,
      );
    } else if (actualDivClass === 'fas') {
      elUnder.parentElement.parentElement.insertBefore(dragStore, elUnder.parentElement);
    } else if (actualDivClass === 'checkbox') {
      elUnder.parentElement.parentElement.parentElement.insertBefore(
        dragStore, elUnder.parentElement.parentElement,
      );
    }
  }
};

let tasks = [];

const goToInput = () => document.querySelector('.input').focus();

const removeOne = (task, tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  tasks.splice(tasks.indexOf(task), 1);
  // eslint-disable-next-line no-use-before-define
  showToDo(tasks);
};

const alternateTickAndCheck = (tick, check, task, input2) => {
  if (task.completed) {
    tick.style.display = 'inline-block';
    check.style.display = 'none';
    input2.classList.add('cross-out');
  } else {
    tick.style.display = 'none';
    check.style.display = 'inline-block';
    input2.classList.remove('cross-out');
  }
};

const generateToDoRows = (text, task, tasks) => {
  const div = document.createElement('div');
  div.classList.add('to-do-row', 'custom-row');
  div.draggable = true;

  const div2 = document.createElement('div');
  div2.classList.add('two');

  const input = document.createElement('input');
  input.classList.add('checkbox');
  input.type = 'checkbox';

  const tick = document.createElement('i');
  tick.classList.add('fas', 'fa-check');

  div2.appendChild(input);
  div2.appendChild(tick);

  const input2 = document.createElement('input');
  input2.contentEditable = true;
  input2.classList.add('to-do');

  input2.type = 'text';
  input2.value = text;
  div2.appendChild(input2);

  div.appendChild(div2);

  const i = document.createElement('i');
  i.classList.add('fas', 'fa-arrows-alt');
  div.appendChild(i);

  input2.addEventListener('focus', () => {
    input2.style.backgroundColor = '#fffeca';
    div.style.backgroundColor = '#fffeca';
    i.classList.remove('fa-arrows-alt');
    i.classList.add('fa-trash-alt');
    i.addEventListener('click', () => {
      removeOne(task, tasks, i);
    });
  });
  tick.addEventListener('click', () => {
    updateCompleted(task, tasks);
    alternateTickAndCheck(tick, input, task, input2);
    return true;
  });

  input.addEventListener('click', (e) => {
    e.preventDefault();
    updateCompleted(task, tasks);
    alternateTickAndCheck(tick, input, task, input2);
    return true;
  });
  if (task.completed) {
    tick.style.display = 'inline-block';
    input.style.display = 'none';
    input2.classList.add('cross-out');
  } else if (!task.completed) {
    tick.style.display = 'none';
    input.style.display = 'inline-block';
    input2.classList.remove('cross-out');
  }

  const editToDo = (input, task, tasks) => {
    const { value } = input;
    if (value === '') {
      removeOne(task, tasks, i);
    }
    task.description = value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // eslint-disable-next-line no-use-before-define
    showToDo(tasks);
  };

  input2.addEventListener('blur', () => {
    input2.style.backgroundColor = '#fff';
    div.style.backgroundColor = '#fff';

    setTimeout(() => {
      i.classList.remove('fa-trash-alt');
      i.classList.add('fa-arrows-alt');
      i.removeEventListener('click', () => removeOne(task, tasks));
    }, 200);
  });

  input2.addEventListener('change', () => {
    editToDo(input2, task, tasks);
  });

  input2.addEventListener('keypress', (e) => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      input2.blur();
    }
  });

  const toDoContainer = document.querySelector('.to-do-list');
  toDoContainer.appendChild(div);
  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  div.addEventListener('drag', drag);
  div.addEventListener('dragstart', dragStart);
  div.addEventListener('dragend', dragEnd);
  div.addEventListener('drop', onDragOver);

  return true;
};

const showToDo = (tasks) => {
  document.querySelector('.to-do-list').innerHTML = '';
  localStorage.setItem('tasks', JSON.stringify(tasks));
  if (tasks[0]) {
    tasks.forEach((task, index, tasks) => generateToDoRows(task.description, task, tasks));
  }
};

const remove = () => {
  tasks = tasks.filter((task) => !task.completed);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showToDo(tasks);
  goToInput();
  return true;
};

document.querySelector('.clear-text').addEventListener('click', remove);

const addToDo = () => {
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

document.querySelector('.return').addEventListener('click', () => addToDo());
document.querySelector('.fa-sync').addEventListener('click', () => {
  document.querySelector('.fa-sync').classList.toggle('rotate-sync');
});

document.querySelector('.item:nth-child(3)').addEventListener('click', () => {
  document.querySelector('.fa-sync').classList.toggle('rotate-sync');
});

const refresh = () => {
  tasks = _.sortBy(tasks, 'index');
  const localTasks = localStorage.getItem('tasks');
  if (localTasks !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  } else {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  showToDo(tasks);
  goToInput();
  return true;
};

const refreshButton = document.querySelector('.fa-sync');
refreshButton.addEventListener('click', () => {
  refresh();
  return true;
});

document.querySelector('.input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addToDo();
  }
  return true;
});

addEventListenerToLinks(addToDo, remove, refresh);

refresh();

showToDo(tasks);

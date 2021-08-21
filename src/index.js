import './style.css';
import _ from 'lodash';
import updateCompleted from './completedToDo';
import {
  drop,
  dragEnd,
  drag,
  dragStart,
  removeOne,
  removeSelected,
  addToDo,
} from './manipulateToDo';

let tasks = [];
const goToInput = () => document.querySelector('.input').focus();

document.querySelector(
  '.footer-text',
).innerHTML = `&copy; ${new Date().getFullYear()} Henry-Kc, built with 💕 from me`;

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

const showToDo = (tasks) => {
  document.querySelector('.to-do-list').innerHTML = '';
  localStorage.setItem('tasks', JSON.stringify(tasks));
  if (typeof tasks[0] === 'object') {
    // eslint-disable-next-line no-use-before-define
    tasks.forEach((task, index, tasks) => generateToDoRows(task.description, task, tasks));
  }
};

const refresh = (showToDo) => {
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

const generateToDoRows = (text, task, tasks) => {
  const div = document.createElement('div');
  div.classList.add('to-do-row', 'custom-row');
  div.id = task.index;
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
      removeOne(task, tasks, showToDo);
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
      removeOne(task, tasks, showToDo);
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
      i.removeEventListener('click', () => removeOne(task, tasks, showToDo));
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
  div.addEventListener('drag', (ev) => drag(ev));
  div.addEventListener('dragstart', (e) => dragStart(e));
  div.addEventListener('dragend', () => dragEnd(showToDo));
  div.addEventListener('drop', (ev) => drop(ev));

  return true;
};

document.querySelector('.clear-text').addEventListener('click', () => {
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  removeSelected(tasks, showToDo);
});

document
  .querySelector('.return')
  .addEventListener('click', () => addToDo(tasks, showToDo, goToInput));
document.querySelector('.fa-sync').addEventListener('click', () => {
  document.querySelector('.fa-sync').classList.toggle('rotate-sync');
});

document.querySelector('.item:nth-child(3)').addEventListener('click', () => {
  document.querySelector('.fa-sync').classList.toggle('rotate-sync');
});

const refreshButton = document.querySelector('.fa-sync');
refreshButton.addEventListener('click', () => {
  refresh(showToDo);
  return true;
});

document.querySelector('.input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addToDo(tasks, showToDo, goToInput);
  }
  return true;
});

document
  .querySelector('.item:nth-child(1)')
  .addEventListener('click', () => addToDo(tasks, showToDo, goToInput));
document
  .querySelector('.item:nth-child(2)')
  .addEventListener('click', () => removeSelected(tasks, showToDo));
document
  .querySelector('.item:nth-child(3)')
  .addEventListener('click', () => refresh(showToDo));

refresh(showToDo);

showToDo(tasks);
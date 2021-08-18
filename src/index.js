import './style.css';
import _ from 'lodash';
import updateCompleted, { addEventListenerToLinks } from './completedToDo';

document.querySelector('.footer-text').innerHTML = `&copy; ${new Date().getFullYear()} Henry-Kc, built with 💕 from me`;

let tasks = [
  {
    description: 'Do the dishes',
    completed: false,
    index: 10,
  },
  {
    description: 'Iron some clothes',
    completed: false,
    index: 7,
  },
  {
    description: 'Arrange some clothes',
    completed: false,
    index: 1,
  },
  {
    description: 'Call the police',
    completed: false,
    index: 12,
  },
];

const goToInput = () => document.querySelector('.input').focus();

const removeOne = (e, task, tasks, i) => {
  e.stopPropagation();
  localStorage.setItem('tasks', JSON.stringify(tasks));
  tasks.splice(tasks.indexOf(task), 1);
  // eslint-disable-next-line no-use-before-define
  showToDo(tasks);
  i.removeEventListener('click', removeOne);
};

const generateToDoRows = (text, task, tasks) => {
  const div = document.createElement('div');
  div.classList.add('to-do-row', 'custom-row');

  const div2 = document.createElement('div');
  div2.classList.add('two');

  const input = document.createElement('input');
  input.classList.add('checkbox');
  input.type = 'checkbox';

  input.checked = task.completed;
  input.addEventListener('click', () => {
    updateCompleted(task, tasks);
    return true;
  });
  div2.appendChild(input);

  const input2 = document.createElement('input');
  input2.classList.add('to-do');

  input2.type = 'text';
  input2.value = text;
  div2.appendChild(input2);

  div.appendChild(div2);

  const i = document.createElement('i');
  i.classList.add('fas', 'fa-ellipsis-v');
  div.appendChild(i);

  input2.addEventListener('focus', () => {
    input2.style.backgroundColor = '#fffeca';
    div.style.backgroundColor = '#fffeca';
    i.classList.remove('fa-ellipsis-v');
    i.classList.add('fa-trash-alt');
    i.addEventListener('click', (e) => removeOne(e, task, tasks, i));
  });

  input2.addEventListener('blur', () => {
    input2.style.backgroundColor = '#fff';
    div.style.backgroundColor = '#fff';
    setTimeout(() => {
      i.classList.remove('fa-trash-alt');
      i.classList.add('fa-ellipsis-v');
      i.removeEventListener('click', (e) => removeOne(e, task, tasks));
    }, 200);
  });

  document.querySelector('.to-do-list').appendChild(div);
  return true;
};

const showToDo = (tasks) => {
  document.querySelector('.to-do-list').innerHTML = '';
  localStorage.setItem('tasks', JSON.stringify(tasks));
  tasks.forEach((task, index, tasks) => generateToDoRows(task.description, task, tasks));
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
  if (localStorage.getItem('tasks') !== null) {
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
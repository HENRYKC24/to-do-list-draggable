import './style.css';
import _ from 'lodash';

document.querySelector('.footer-text').innerHTML = `&copy; ${new Date().getFullYear()} Henry-Kc, built with 💕 from me`;

let toBeDeleted = [];
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

tasks = _.sortBy(tasks, 'index');

const generateToDoRows = (text, index) => {
  const div = document.createElement('div');
  div.classList.add('to-do-row', 'custom-row');

  const div2 = document.createElement('div');
  div2.classList.add('two');

  const input = document.createElement('input');
  input.classList.add('checkbox');
  input.type = 'checkbox';
  input.addEventListener('click', () => {
    const nextToCheckBox = input.nextElementSibling;
    if (input.checked) {
      nextToCheckBox.style.textDecorationLine = 'line-through';
      nextToCheckBox.style.color = '#ccc';
      nextToCheckBox.style.textDecorationThickness = '2px';
      toBeDeleted.push(index);
    } else {
      nextToCheckBox.style.textDecorationLine = 'none';
      nextToCheckBox.style.color = 'rgb(150, 145, 145)';
      toBeDeleted.splice(toBeDeleted.indexOf(index), 1);
    }
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

  document.querySelector('.to-do-list').appendChild(div);
  return true;
};

const showToDo = (tasks) => {
  document.querySelector('.to-do-list').innerHTML = '';
  tasks.forEach((task) => generateToDoRows(task.description, task.index));
};

const remove = () => {
  tasks = tasks.filter((task) => !toBeDeleted.includes(task.index));
  toBeDeleted = [];
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showToDo(tasks);
};

document.querySelector('.clear-text').addEventListener('click', remove);

const addToDo = () => {
  const description = document.querySelector('.input').value;
  if (!description) return;
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
};

document.querySelector('.return').addEventListener('click', () => addToDo());

document.querySelector('.input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addToDo();
  }
  return true;
});

if (localStorage.getItem('tasks') !== null) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

showToDo(tasks);
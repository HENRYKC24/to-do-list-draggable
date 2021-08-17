import './style.css';

document.querySelector('.footer-text').innerHTML = `&copy; ${new Date().getFullYear()} Henry-Kc, built with 💕 from me`;

const toBeDeleted = [];
const generateToDoRows = (text, index) => {
  const div = document.createElement('div');
  div.classList.add('to-do-row', 'custom-row');

  const div2 = document.createElement('div');
  div2.classList.add('two');

  const input = document.createElement('input');
  input.classList.add('checkbox');
  input.type = 'checkbox';
  input.addEventListener('click', () => {
    if (input.checked) {
      toBeDeleted.push(index);
    } else {
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

let tasks = [
  {
    description: 'Example text',
    completed: true,
    index: 0,
  },
];

const showToDo = (tasks) => {
  document.querySelector('.to-do-list').innerHTML = '';
  tasks.forEach((task) => generateToDoRows(task.description, task.index));
};

const remove = () => {
  tasks = tasks.filter((task) => !toBeDeleted.includes(task.index));
  showToDo(tasks);
};

document.querySelector('.clear-text').addEventListener('click', remove);

const addToDo = () => {
  const description = document.querySelector('.input').value;
  if (!description) return;
  const indexArray = tasks.map(({ index }) => index);
  const sortedIndeces = indexArray.sort((a, b) => a - b);
  const highestIndex = sortedIndeces[sortedIndeces.length - 1];
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
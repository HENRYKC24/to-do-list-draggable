import './style.css';
import updateCompleted from './completedToDo';
import {
  drop,
  dragEnd,
  drag,
  dragStart,
  removeOne,
  removeSelected,
  addToDo,
  storeLocally,
  getFromStorage,
  removable,
  tasks,
} from './manipulateToDo';

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
  tasks = getFromStorage(tasks);
  if (typeof tasks[0] === 'object') {
    tasks.forEach((task, index, tasks) => {
      // eslint-disable-next-line no-use-before-define
      generateToDoRows(task.description, task, tasks);
    });
    return true;
  }
  storeLocally(tasks);
  return true;
};

const refresh = (showToDo) => {
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

  const input2 = document.createElement('span');
  input2.contentEditable = true;
  input2.classList.add('to-do');

  input2.textContent = text;
  div2.appendChild(input2);

  div.appendChild(div2);

  const i = document.createElement('i');
  i.classList.add('fas', 'fa-arrows-alt');
  div.appendChild(i);

  const input2TrashRemoveEvent = () => {
    removable.value = true;
    removeOne(task, showToDo, removable);
    return true;
  };

  input2.addEventListener('focus', () => {
    input2.style.backgroundColor = '#fffeca';
    div.style.backgroundColor = '#fffeca';
    i.classList.remove('fa-arrows-alt');
    i.classList.add('fa-trash-alt');
    i.addEventListener('mousedown', input2TrashRemoveEvent);
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
    const { textContent } = input;
    task.description = textContent;
    storeLocally(tasks);
    return true;
  };

  input2.addEventListener('blur', () => {
    input2.style.backgroundColor = '#fff';
    div.style.backgroundColor = '#fff';
    if (input2.textContent === '') {
      removable.value = true;
      removeOne(task, showToDo, removable);
    }
    i.classList.remove('fa-trash-alt');
    i.classList.add('fa-arrows-alt');
    i.removeEventListener('mousedown', input2TrashRemoveEvent);
  });

  input2.addEventListener('keyup', () => {
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
  div.addEventListener('drop', (ev) => drop(ev, showToDo));

  return true;
};

document.querySelector('.clear-text').addEventListener('click', (tasks) => {
  tasks = getFromStorage(tasks);
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
    addToDo(tasks, showToDo, goToInput, e);
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

showToDo();
document.querySelector('.input').addEventListener('keypress', (e) => {
  if (e.key !== 'Enter') {
    document.querySelector('.input').classList.remove('placeholder');
  }
});
document.querySelector('.input').addEventListener('click', () => {
  document.querySelector('.input').classList.remove('placeholder');
});

document.querySelector('.input').addEventListener('blur', () => {
  document.querySelector('.input').classList.add('placeholder');
});

document.querySelector('.fa-sync').title = 'remove tasks completed more than one month ago';
document.querySelector('.item:nth-child(3)').title = 'remove tasks completed more than one month ago';
document.querySelector('.item:nth-child(2)').title = 'remove completed tasks';
document.querySelector('.item:nth-child(1)').title = 'add tasks';
document.querySelector('.clear-text').title = 'remove completed tasks';
const allCheckboxes = Array.from(document.querySelectorAll('.checkbox'));
allCheckboxes.forEach((checkbox) => {
  checkbox.title = 'mark as completed';
  return true;
});
const allTickMarks = Array.from(document.querySelectorAll('.fa-check'));
allTickMarks.forEach((tickMark) => {
  tickMark.title = 'unmark as completed';
  return true;
});
const allTodoItems = Array.from(document.querySelectorAll('.to-do'));
allTodoItems.forEach((todo) => {
  todo.title = 'click to delete/edit, drag to move';
  return true;
});
const allMoveButtons = Array.from(document.querySelectorAll('fa-arrows-alt'));
allMoveButtons.forEach((moveButton) => {
  moveButton.title = 'drag within the box to move';
  return true;
});
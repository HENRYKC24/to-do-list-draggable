let dragStore = document.querySelector('.to-do-row');
const prevNextIds = {
  prevId: 0,
  nextId: 1,
};
const removable = {
  init: true,
  value: false,
};

const reorderIndices = (tasks) => {
  let index = 1;
  tasks.forEach((task) => {
    task.index = index;
    index += 1;
  });
};

const drag = (ev) => {
  const draggedElement = ev.target;
  dragStore = draggedElement;
  dragStore.style.backgroundColor = '#4c3c3c';
};

const dragStart = (e) => {
  let elUnder = e.target;
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
  elUnder.style.backgroundColor = '#4c3c3c';
  elUnder.style.color = '#fff';
  Array.from(elUnder.childNodes).forEach((node) => {
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
    elUnder.parentElement.insertBefore(dragStore, elUnder.nextElementSibling);
  } else if (prevNextIds.prevId > prevNextIds.nextId) {
    elUnder.parentElement.insertBefore(dragStore, elUnder);
  }

  const { id } = elUnder;

  if (prevNextIds.prevId < prevNextIds.nextId) {
    setTimeout(() => {
      let elUnder = document.getElementById(id);
      // document.getElementById(id).style.backgroundColor = "#4c3c3c";
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

      elUnder.style.backgroundColor = '#4c3c3c';
      elUnder.style.color = '#fff';
      Array.from(elUnder.childNodes).forEach((node) => {
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
      setTimeout(() => {
        // document.getElementById(id).style.backgroundColor = "#fff";
        let elUnder = document.getElementById(id);
        // document.getElementById(id).style.backgroundColor = "#4c3c3c";
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
        elUnder.style.backgroundColor = '#fff';
        elUnder.style.color = '#fff';
        Array.from(elUnder.childNodes).forEach((node) => {
          if (node.nodeName === 'DIV') {
            const nodes = node.childNodes;
            Array.from(nodes).forEach((one) => {
              one.style.backgroundColor = '#fff';
              one.style.color = 'rgb(134, 122, 122)';
            });
            // if (task.completed) {
            //   Array.from(Array.from(elUnder.childNodes)[0].childNodes)[2].style.color = '#ccc';
            // } else {

            // }
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
      }, 810);
    }, 10);
  } else if (prevNextIds.prevId > prevNextIds.nextId) {
    setTimeout(() => {
      let elUnder = document.getElementById(id);
      // document.getElementById(id).style.backgroundColor = "#4c3c3c";
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
      elUnder.style.backgroundColor = '#4c3c3c';
      elUnder.style.color = '#fff';
      Array.from(elUnder.childNodes).forEach((node) => {
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
      setTimeout(() => {
        // document.getElementById(id).style.backgroundColor = "#fff";
        let elUnder = document.getElementById(id);
        // document.getElementById(id).style.backgroundColor = "#4c3c3c";
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
        elUnder.style.backgroundColor = '#fff';
        elUnder.style.color = '#fff';
        Array.from(elUnder.childNodes).forEach((node) => {
          if (node.nodeName === 'DIV') {
            const nodes = node.childNodes;
            Array.from(nodes).forEach((one) => {
              one.style.backgroundColor = '#fff';
              one.style.color = 'rgb(134, 122, 122)';
            });
            // if (task.completed) {
            //   Array.from(Array.from(elUnder.childNodes)[0].childNodes)[2].style.color = '#ccc';
            // } else {
            //   Array.from(Array.from(elUnder.childNodes)[0].childNodes)[2].style.color = '#add';
            // }
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

const removeOne = (task, showToDo) => {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  // tasks = tasks.filter((oneTask) => oneTask.index !== task.index);
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
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return showToDo();
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
  drop,
  dragEnd,
  drag,
  dragStart,
  removeOne,
  removeSelected,
  addToDo,
  removable,
};

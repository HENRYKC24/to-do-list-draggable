import { getFromStorage, reorderIndices, storeLocally } from './manipulateToDo';

let previousChoice = '';

const sortBy = (criteria, showToDo) => {
  if (criteria === previousChoice) {
    return false;
  }
  let tasks = getFromStorage();
  switch (criteria) {
    case 'timeasc':
      tasks = tasks.sort((a, b) => a.timeStamp - b.timeStamp).reverse();
      break;
    case 'timedes':
      tasks = tasks.sort((a, b) => a.timeStamp - b.timeStamp);
      break;
    case 'doneasc':
      tasks = tasks.sort((a, b) => a.completed - b.completed).reverse();
      break;
    case 'donedes':
      tasks = tasks.sort((a, b) => a.completed - b.completed);
      break;
    case 'sizeasc':
      tasks = tasks
        .sort((a, b) => a.description.length - b.description.length)
        .reverse();
      break;
    case 'sizedes':
      tasks = tasks.sort((a, b) => a.description.length - b.description.length);
      break;
    default:
      tasks = tasks.sort();
  }

  previousChoice = criteria;
  tasks = reorderIndices(tasks);
  storeLocally(tasks);
  showToDo(tasks);
  return true;
};

export default sortBy;

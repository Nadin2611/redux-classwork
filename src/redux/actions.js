// файл оголошення екшенів програми
import { nanoid } from 'nanoid';

export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      text: 'User entered text',
      completed: false,
    },
  };
};

export const deleteTask = taskId => {
  return { type: 'tasks/deleteTask', payload: 'Task id' };
};

export const toggleCompleted = taskId => {
  return { type: 'tasks/toggleCompleted', payload: 'Task id' };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: 'Filter value',
  };
};

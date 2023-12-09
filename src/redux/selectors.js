// файл оголошення функцій-селекторів

export const getTasks = state => state.tasks;
console.log(getTasks);
export const getStatusFilter = state => state.filters.status;

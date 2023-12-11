import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, fetchTasks, toggleCompleted } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const hendleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, hendleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.items = actions.payload;
      })
      .addCase(addTask.rejected, hendleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === actions.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteTask.rejected, hendleRejected)
      .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === actions.payload.id
        );
        state.items.splice(index, 1, actions.payload);
      })
      .addCase(toggleCompleted.rejected, hendleRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;

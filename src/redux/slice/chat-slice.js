import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as chatApi from '@/api/chat';

const initialState = {
  messages: [],
  typist: null,
  joined: false,
};

export const getHistoryChat = createAsyncThunk(
  'chat/get-history',
  async (receiverId) => {
    try {
      const response = await chatApi.getHistoryChat(receiverId);
      return response.data.chats;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    appendMessage: (state, action) => {
      console.log(action.payload);
      console.log(state.messages);
      state.messages = [...state.messages, action.payload];
      console.log(state.messages);
    },
    isTyping: (state, action) => {
      state.typist = action.payload.handle;
    },
    notTyping: (state, action) => {
      state.typist = null;
    },
    justJoined: (state, action) => {
      state.joined = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHistoryChat.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHistoryChat.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload;
      })
      .addCase(getHistoryChat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { appendMessage, isTyping, notTyping } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;

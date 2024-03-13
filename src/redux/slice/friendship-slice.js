import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as friendshipApi from '../../api/friendship';

//initial state

const initialState = {
  friends: null,
  loadingFriends: false,
  friendStatus: null,
  loadingFriendStatus: false,
  pendings: null,
  loadingPending: false,
  friendsAdded: null,
  loadingfriendsAdded: false,
  actionMessage: null,
  loadingActionMessage: false,
  error: null,
};

export const checkFriendshipStatus = createAsyncThunk(
  'friendships/checkStatus',
  async (targetUserId) => {
    try {
      const response = await friendshipApi.checkFriendshipStatus(targetUserId);
      // console.log(response.data,targetUserId)
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getAllFriend = createAsyncThunk(
  'friendships/getfriends',
  async (userId) => {
    try {
      const response = await friendshipApi.getAllFriendbyUserId(userId);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getAllMyPending = createAsyncThunk(
  'friendships/getPendings',
  async () => {
    try {
      const response = await friendshipApi.getAllMyPending();
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getFriendsAdded = createAsyncThunk(
  'friendships/getFriendsAdded',
  async () => {
    try {
      const response = await friendshipApi.getFriendsAdded();
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const requestFriend = createAsyncThunk(
  'friendships/requestFriend',
  async (targetUserId) => {
    try {
      const response = await friendshipApi.requestFriend(targetUserId);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const acceptFriend = createAsyncThunk(
  'friendships/acceptFriend',
  async (targetUserId) => {
    try {
      const response = await friendshipApi.acceptFriend(targetUserId);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const rejectFriend = createAsyncThunk(
  'friendships/rejectFriend',
  async (targetUserId) => {
    try {
      const response = await friendshipApi.rejectFriend(targetUserId);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const cancelRequest = createAsyncThunk(
  'friendships/cancelRequest',
  async (targetUserId) => {
    try {
      const response = await friendshipApi.cancelRequest(targetUserId);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const friendshipSlice = createSlice({
  name: 'friendships',
  initialState,
  extraReducers: (builder) => {
    //check status
    builder
      .addCase(checkFriendshipStatus.pending, (state) => {
        state.loadingFriendStatus = true;
        state.error = null;
      })
      .addCase(checkFriendshipStatus.fulfilled, (state, action) => {
        state.friendStatus = action.payload;
        state.loadingFriendStatus = false;
      })
      .addCase(checkFriendshipStatus.rejected, (state, action) => {
        state.loadingFriendStatus = false;
        state.error = action.error.message;
      });
    //get all friends
    builder
      .addCase(getAllFriend.pending, (state) => {
        state.loadingFriends = true;
        state.error = null;
      })
      .addCase(getAllFriend.fulfilled, (state, action) => {
        state.friends = action.payload;
        state.loadingFriends = false;
      })
      .addCase(getAllFriend.rejected, (state, action) => {
        state.loadingFriends = false;
        state.error = action.error.message;
      });
    //get all pending
    builder
      .addCase(getAllMyPending.pending, (state) => {
        state.loadingPending = true;
        state.error = null;
      })
      .addCase(getAllMyPending.fulfilled, (state, action) => {
        state.pendings = action.payload;
        state.loadingPending = false;
      })
      .addCase(getAllMyPending.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingPending = false;
      });
    //get friendsAdded
    builder
      .addCase(getFriendsAdded.pending, (state) => {
        state.loadingfriendsAdded = true;
        state.error = null;
      })
      .addCase(getFriendsAdded.fulfilled, (state, action) => {
        state.friendsAdded = action.payload;
        state.loadingfriendsAdded = false;
      })
      .addCase(getFriendsAdded.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingfriendsAdded = false;
      });
    //request friend
    builder
      .addCase(requestFriend.pending, (state) => {
        state.loadingActionMessage = true;
        state.error = null;
      })
      .addCase(requestFriend.fulfilled, (state, action) => {
        state.actionMessage = action.payload;
        state.loadingActionMessage = false;
      })
      .addCase(requestFriend.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingActionMessage = false;
      });
    //accept friend
    builder
      .addCase(acceptFriend.pending, (state) => {
        state.loadingActionMessage = true;
        state.error = null;
      })
      .addCase(acceptFriend.fulfilled, (state, action) => {
        state.actionMessage = action.payload;
        state.loadingActionMessage = false;
      })
      .addCase(acceptFriend.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingActionMessage = false;
      });
    //reject friend
    builder
      .addCase(rejectFriend.pending, (state) => {
        state.loadingActionMessage = true;
        state.error = null;
      })
      .addCase(rejectFriend.fulfilled, (state, action) => {
        state.actionMessage = action.payload;
        state.loadingActionMessage = false;
      })
      .addCase(rejectFriend.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingActionMessage = false;
      });
    //cancelRequest
    builder
      .addCase(cancelRequest.pending, (state) => {
        state.loadingActionMessage = true;
        state.error = null;
      })
      .addCase(cancelRequest.fulfilled, (state, action) => {
        state.actionMessage = action.payload;
        state.loadingActionMessage = false;
      })
      .addCase(cancelRequest.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingActionMessage = false;
      });
  },
});

// Reducer
export const friendshipReducer = friendshipSlice.reducer;

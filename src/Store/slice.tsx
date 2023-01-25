import { createSlice } from '@reduxjs/toolkit';
interface postState {
  post: [];
}
const initialState: postState = {
  post: []
};

const postSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {
    initiateNewPost: (state: any, action: any) => {
      state.post = [action.payload, ...state.post];
      console.log(state.post);
    }
  }
});

export const { initiateNewPost } = postSlice.actions;

export default postSlice.reducer;

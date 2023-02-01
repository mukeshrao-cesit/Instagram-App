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
    postsList: (state: any, action: any) => {
      return void (state.post = action.payload);
    },
    newPostCreated: (state: any) => (state.post = state.post)
  }
});

export const { postsList, newPostCreated } = postSlice.actions;

export default postSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
interface postState {
  post: [];
  isNewPostCreated: boolean;
}
const initialState: postState = {
  post: [],
  isNewPostCreated: false
};

const postSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {
    newPostCreated: (state: any, action: any) => {
      return (state.isNewPostCreated = action.payload);
    }
  }
});

export const { newPostCreated } = postSlice.actions;

export default postSlice.reducer;

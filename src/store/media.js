import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const media = createSlice({
  name: 'media',
  initialState: {
    isLoading: false,
    error: null,
    media: null
  },
  reducers: {
    getMediaStart(state) {
      state.isLoading = true;
    },
    getMediaSuccess(state, { payload }) {
      state.media = payload;
      state.isLoading = false;
      state.error = null;
    },
    getMediaFailed(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    }
  }
});

export const { getMediaStart, getMediaSuccess, getMediaFailed } = media.actions;

export default media.reducer;

export const getMedia = (search) => async (dispatch) => {
  try {
    dispatch(getMediaStart());
    const { data } = await axios.get(`https://itunes.apple.com/search?term=${search}`);
    dispatch(getMediaSuccess(data.results));
  } catch (error) {
    dispatch(getMediaFailed(error.toString()));
  }
};

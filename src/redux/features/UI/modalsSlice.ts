import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Modals {
  modalActive: boolean;
  newTask: boolean;
}

const initialState: Modals = {
  modalActive: false,
  newTask: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setModalActive: (state, action: PayloadAction<boolean>) => {
      state.modalActive = action.payload;
    },
  },
});

export const { setModalActive } = modalsSlice.actions;

export default modalsSlice.reducer;

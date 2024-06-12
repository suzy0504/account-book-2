import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMonth: localStorage.getItem("selectedMonth") || "1월",
};

const selectedMonthSlice = createSlice({
  name: "selectedMonth",
  initialState,
  reducers: {
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
      localStorage.setItem("selectedMonth", action.payload);
    },
  },
});

export const { setSelectedMonth } = selectedMonthSlice.actions;
export default selectedMonthSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../../data/dummyData.json";

// const expenses = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

const initialState = dummyData;
const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setExpenses: (state, action) => {
      return action.payload;
    },
    editedExpense: (state, action) => {
      const { id, date, item, amount, description } = action.payload;
      const detailExpense = expenses.find((expense) => expense.id === param.id);
      if (detailExpense) {
        detailExpense.date = date;
        detailExpense.item = item;
        detailExpense.amount = amount;
        detailExpense.description = description;
      }
    },
    newExpenses: (state, action) => {
      const { id } = action.payload;
      return state.filter((expense) => expense.id !== id);
    },
  },
});

export const { setExpenses, editedExpense, newExpenses } =
  expensesSlice.actions;
export default expensesSlice.reducer;

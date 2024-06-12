import expenses from "../modules/expenses";
import selectedMonth from "../modules/selectedMonth";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
//   expenses,
// });
// const store = createStore(rootReducer);

const store = configureStore({
  reducer: { expenses: expenses, selectedMonth: selectedMonth },
});

export default store;

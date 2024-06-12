// import { createContext, useState } from "react";
// import dummyData from "../data/dummyData.json";

// export const ExpensesContext = createContext();

// export const ExpensesProvider = ({ children }) => {
//   const [expenses, setExpenses] = useState(dummyData);

//   const [selectedMonth, setSelectedMonth] = useState(() => {
//     return localStorage.getItem("selectedMonth") || "1월";
//   });

//   return (
//     <ExpensesContext.Provider
//       value={{ expenses, setExpenses, selectedMonth, setSelectedMonth }}
//     >
//       {children}
//     </ExpensesContext.Provider>
//   );
// };

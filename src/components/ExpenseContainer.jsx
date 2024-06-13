import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Month from "./Month";
import { useState } from "react";

const ExpenseContainer = ({ user }) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  return (
    <div>
      <ExpenseForm user={user} />
      <Month setSelectedMonth={setSelectedMonth} />
      <div className="bg-nude p-5 rounded-lg flex flex-col items-center mt-5">
        <ExpenseList selectedMonth={selectedMonth} />
      </div>
    </div>
  );
};

export default ExpenseContainer;

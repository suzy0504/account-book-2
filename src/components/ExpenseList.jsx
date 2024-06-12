import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses);
  console.log(expenses);

  const selectedMonth = useSelector(
    (state) => state.selectedMonth.selectedMonth
  );

  const [filterList, setFilterData] = useState([]);

  useEffect(() => {
    if (selectedMonth) {
      const month = selectedMonth.slice(0, -1);
      const filtered = expenses.filter(
        (expense) => new Date(expense.date).getMonth() + 1 === parseInt(month)
      );
      setFilterData(filtered);
    } else {
      setFilterData([]);
    }
  }, [expenses, selectedMonth]);

  return (
    <div>
      {filterList.length === 0 ? (
        <p>지출이 없습니다.</p>
      ) : (
        filterList.map((expense) => (
          <div key={expense.id}>
            <Link to={`/DetailHome/${expense.id}`}>
              <ExpenseItem expense={expense} />
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ExpenseList;

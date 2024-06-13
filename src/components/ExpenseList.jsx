import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../lib/api/expense";

const ExpenseList = ({ selectedMonth }) => {
  const {
    data: expenses = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["expense"],
    queryFn: getExpenses,
  });

  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    let filtered = [];
    if (selectedMonth) {
      const monthNumber = parseInt(selectedMonth.slice(0, -1));
      filtered = expenses.filter(
        (expense) => new Date(expense.date).getMonth() + 1 === monthNumber
      );
    } else {
      filtered = expenses;
    }

    setFilterList(filtered);
  }, [expenses, selectedMonth]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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

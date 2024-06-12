import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailHomeBtn from "../components/DetailHomeBtn";
import { useDispatch, useSelector } from "react-redux";
import { setExpenses } from "../redux/modules/expenses";

const DetailBox = styled.div`
  background-color: #be6674;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  padding: 20px;
  border-radius: 10px;
  flex-direction: column;
  color: white;
`;

const DetailSmallBox = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailHome = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);

  const param = useParams();

  const detailExpense = expenses.find((expense) => expense.id === param.id);

  const [editedExpense, setEditedExpense] = useState({ ...detailExpense });

  const expensesChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount" && !numberCheck(value)) {
      alert("금액란에는 숫자만 입력하세요.");
      return;
    }
    setEditedExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const numberCheck = (value) => {
    return /^\d+$/.test(value);
  };

  const saveHandle = () => {
    const newExpenses = expenses.map((expense) =>
      expense.id === detailExpense.id ? editedExpense : expense
    );
    dispatch(setExpenses(newExpenses));
    console.log(newExpenses);
  };

  if (!detailExpense) {
    return <div>해당 지출 내역을 찾을 수 없습니다.</div>;
  }
  return (
    <DetailBox>
      <DetailSmallBox>
        <label>날짜</label>
        <input
          type="date"
          defaultValue={detailExpense.date}
          onChange={expensesChange}
          name="date"
        />
      </DetailSmallBox>
      <DetailSmallBox>
        <label>항목</label>
        <input
          type="text"
          defaultValue={detailExpense.item}
          onChange={expensesChange}
          name="item"
        />
      </DetailSmallBox>
      <DetailSmallBox>
        <label>금액</label>
        <input
          type="number"
          defaultValue={detailExpense.amount}
          onChange={expensesChange}
          name="amount"
        />
      </DetailSmallBox>
      <DetailSmallBox>
        <label>내용</label>
        <input
          type="text"
          defaultValue={detailExpense.description}
          onChange={expensesChange}
          name="description"
        />
      </DetailSmallBox>
      <div>
        <DetailHomeBtn detailExpense={detailExpense} saveHandle={saveHandle} />
      </div>
    </DetailBox>
  );
};

export default DetailHome;

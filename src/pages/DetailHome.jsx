import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import DetailHomeBtn from "../components/DetailHomeBtn";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getExpense, putExpense } from "../lib/api/expense";

const DetailBox = styled.div`
  background-color: #be6674;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  border-radius: 10px;
  flex-direction: column;
  padding: 10px;
`;

const DetailSmallBox = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailHome = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: detailExpense = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["expense", id],
    queryFn: getExpense,
    enabled: !!id,
  });

  const mutationEdit = useMutation({
    mutationFn: putExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenses"]);
      navigate("/");
    },
  });

  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (detailExpense) {
      setDate(detailExpense.date || "");
      setItem(detailExpense.item || "");
      setAmount(detailExpense.amount || "");
      setDescription(detailExpense.description || "");
    }
  }, [detailExpense]);

  const expensesChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount" && !numberCheck(value)) {
      alert("금액란에는 숫자만 입력하세요.");
      return;
    }
    switch (name) {
      case "date":
        setDate(value);
        break;
      case "item":
        setItem(value);
        break;
      case "amount":
        setAmount(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const numberCheck = (value) => {
    return /^\d+$/.test(value);
  };

  const saveHandle = () => {
    const updatedExpense = {
      id,
      date,
      item,
      amount: parseInt(amount, 10),
      description,
    };
    mutationEdit.mutate(updatedExpense);
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>오류가 발생했습니다: {error.message}</div>;
  }

  if (!detailExpense.id) {
    return <div>해당 지출 내역을 찾을 수 없습니다.</div>;
  }

  return (
    <DetailBox>
      <DetailSmallBox>
        <label>날짜</label>
        <input
          type="date"
          defaultValue={date}
          onChange={expensesChange}
          name="date"
        />
      </DetailSmallBox>
      <DetailSmallBox>
        <label>항목</label>
        <input
          type="text"
          defaultValue={item}
          onChange={expensesChange}
          name="item"
        />
      </DetailSmallBox>
      <DetailSmallBox>
        <label>금액</label>
        <input
          type="number"
          defaultValue={amount}
          onChange={expensesChange}
          name="amount"
        />
      </DetailSmallBox>
      <DetailSmallBox>
        <label>내용</label>
        <input
          type="text"
          defaultValue={description}
          onChange={expensesChange}
          name="description"
        />
      </DetailSmallBox>
      <div>
        <DetailHomeBtn
          detailExpense={detailExpense}
          saveHandle={saveHandle}
          id={id}
        />
      </div>
    </DetailBox>
  );
};

export default DetailHome;

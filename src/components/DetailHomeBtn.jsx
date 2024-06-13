import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import { deleteExpense } from "../lib/api/expense";

const ButtonBox = styled.div`
  width: 800px;
  display: flex;
  gap: 10px;
  padding: 10px;
`;

const Button = styled.button`
  display: flex;
  border-radius: 5px;
  padding: 5px 10px;
  &:hover {
    background-color: #741c28;
    color: white;
  }
`;

const DetailHomeBtn = ({ saveHandle, id }) => {
  const navigate = useNavigate();

  const backBtn = () => {
    navigate(-1);
  };

  const mutationDelete = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      navigate("/");
    },
  });

  const removeHandle = () => {
    const shouldDelete = window.confirm(
      "정말로 이 지출 항목을 삭제하시겠습니까?"
    );
    if (shouldDelete) {
      mutationDelete.mutate(id);
    }
  };

  const changeBtn = () => {
    saveHandle();
    navigate(-1);
  };

  return (
    <ButtonBox>
      <Button onClick={changeBtn}>수정</Button>
      <Button onClick={removeHandle}>삭제</Button>
      <Button onClick={backBtn}>뒤로가기</Button>
    </ButtonBox>
  );
};

export default DetailHomeBtn;

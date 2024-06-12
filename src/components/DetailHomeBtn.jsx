import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setExpenses } from "../redux/modules/expenses";

const ButtonBox = styled.div`
  width: 800px;
  display: flex;
  gap: 10px;
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

const DetailHomeBtn = ({ detailExpense, saveHandle }) => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);

  const navigate = useNavigate();

  const backBtn = () => {
    navigate(-1);
  };

  const removeHandle = () => {
    const shouldDelete = window.confirm(
      "정말로 이 지출 항목을 삭제하시겠습니까?"
    );
    if (shouldDelete) {
      const newExpenses = expenses.filter(
        (expense) => expense.id !== detailExpense.id
      );
      dispatch(setExpenses(newExpenses));
      console.log(newExpenses);
      navigate(-1);
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

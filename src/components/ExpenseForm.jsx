import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setExpenses } from "../redux/modules/expenses";

const FormBox = styled.div`
  background-color: #be6674;
  display: flex;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  padding: 20px;
`;

const InputStyle = styled.form`
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 160px;
  height: 35px;
`;

const ButtonStyle = styled.button`
  margin-top: 23px;
  display: flex;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 76px;
  &:hover {
    background-color: #741c28;
    color: white;
  }
`;

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const date = formData.get("date");
    const item = formData.get("item");
    const amount = formData.get("amount");
    const description = formData.get("description");

    if (!date.trim()) return alert("날짜를 입력해주세요");
    if (!item.trim()) return alert("항목을 입력해주세요");
    if (!amount.trim()) return alert("금액을 입력해주세요");
    if (!description.trim()) return alert("내용을 입력해주세요");

    const nextExpense = {
      id: crypto.randomUUID(),
      date,
      item,
      amount,
      description,
    };

    dispatch(setExpenses([...expenses, nextExpense]));

    e.target.reset();
  };

  return (
    <FormBox>
      <InputStyle onSubmit={onSubmit}>
        <InputDiv>
          날짜
          <Input name="date" type="date" placeholder="YYYY-MM-DD" />
        </InputDiv>
        <InputDiv>
          항목
          <Input name="item" type="text" />
        </InputDiv>
        <InputDiv>
          금액
          <Input name="amount" type="number" />
        </InputDiv>
        <InputDiv>
          내용
          <Input name="description" type="text" />
        </InputDiv>
        <ButtonStyle type="submit">저장</ButtonStyle>
      </InputStyle>
    </FormBox>
  );
};

export default ExpenseForm;

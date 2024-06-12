import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import styled from "styled-components";
import Month from "./Month";

const ItemBox = styled.div`
  background-color: #e8b19d;
  padding: 20px 20px 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const ExpenseContainer = () => {
  return (
    <div>
      <ExpenseForm />
      <Month />
      <ItemBox>
        <ExpenseList />
      </ItemBox>
    </div>
  );
};

export default ExpenseContainer;

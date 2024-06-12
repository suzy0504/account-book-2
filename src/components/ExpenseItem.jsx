import styled from "styled-components";

const ListButton = styled.button`
  margin: 0 0 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 770px;
  height: 60px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    background-color: #be6674;
    color: white;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: start;
`;

const DateBox = styled.span`
  font-size: 15px;
  margin-left: 0;
  display: flex;
`;

const HistoryBox = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ExpenseItem = ({ expense }) => {
  return (
    <div>
      <ListButton>
        <TextBox>
          <DateBox>{expense.date}</DateBox>
          <HistoryBox>
            {expense.item} - {expense.description}
          </HistoryBox>
        </TextBox>
        <span>{expense.amount.toLocaleString()}원</span>
      </ListButton>
    </div>
  );
};

export default ExpenseItem;

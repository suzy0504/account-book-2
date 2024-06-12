import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMonth } from "../redux/modules/selectedMonth";

const MonthBox = styled.div`
  background-color: #bb8c94;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

const Button = styled.button`
  border-radius: 10px;
  height: 80px;
  width: 110px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  &:hover {
    background-color: #be6674;
    color: white;
  }

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #be6674;
      color: white;
    `}
`;

const Month = () => {
  const dispatch = useDispatch();

  const selectedMonth = useSelector(
    (state) => state.selectedMonth.selectedMonth
  );

  const handleMonthClick = (month) => {
    dispatch(setSelectedMonth(month));
  };

  return (
    <div>
      <MonthBox>
        {[
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
        ].map((month, index) => (
          <Button
            onClick={() => handleMonthClick(month)}
            key={index}
            isSelected={selectedMonth === month ? 1 : 0}
          >
            {month}
          </Button>
        ))}
      </MonthBox>
    </div>
  );
};
export default Month;

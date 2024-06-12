import React from "react";
import ExpenseContainer from "../components/ExpenseContainer";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  max-width: 810px;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <Main>
      <ExpenseContainer />
    </Main>
  );
};

export default Home;

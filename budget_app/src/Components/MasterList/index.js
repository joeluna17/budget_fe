import React from "react";
import styled from "styled-components";
import DetailComponent from "./DetailCompoent";

const MasterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin: 4% auto 0 auto;
  width: 100%;
`;

const MasterList = props => {
  return (
    <MasterWrapper>
      {props.accounts.map((account, index) => {
        return (
          <DetailComponent
            id={account.id}
            account={account}
            key={index}
            index={index}
            handleUpdate={props.handleUpdate}
            deleteAccount={props.deleteAccount}
            totalExpensesAmount={props.totalExpensesAmount}
            totalIncomeAmount={props.totalIncomeAmount}
            handleUpdateExpenseValue={props.handleUpdateExpenseValue}
            handleShowToast={props.handleShowToast}
          />
        );
      })}
    </MasterWrapper>
  );
};
export default MasterList;

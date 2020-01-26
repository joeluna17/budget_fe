import React from "react";
import styled from "styled-components";
import SliderProto from "../GlobalComponent/Slider";
import DonutChart from "../GlobalComponent/DonutChart";

const DetailWrapper = styled.div`
  display:flex;
  flex-flow:row wrap;
  position: relative;
  width: 80%;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 2%;
`;

const DetailTopWrapperExspense = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  width:100%;
  height: 50%;
  border-bottom: 1px solid black;
  background-color: rgba(52, 73, 94, 1);
  color: white;
  border-radius: 10px;
`;

const DetailTopWrapperIncome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  width:100%;
  height: 50%;
  border-bottom: 1px solid black;
  background-color: rgba(130, 88, 159, 1);
  color: white;
  border-radius: 10px;
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  height: 50%;
  width: 50%;
  margin-left: 5%;
  
`;

const ChartWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    width:45%;
`

const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: rgba(246, 71, 71, 1);
  color: white;
  border-radius: 100%;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.6);
  border: 2px solid black;
  :hover {
    background-color: rgba(241, 169, 160, 1);
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.8);
  }
`;

const SaveButton = styled.button`
  width: 200px;
  height: 26px;
  color: black;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background-color: rgba(123, 239, 178, 1);
  :hover {
    background-color: rgba(162, 222, 208, 1);
    box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.8);
  }
`;

const DetailCompontent = props => {
  // name, amount, slider

  if (props.account.type === "exspense") {
    return (
      <DetailWrapper>
        <DeleteButton onClick={e => props.deleteAccount(props.id)}>X</DeleteButton>
        <DetailTopWrapperExspense>
          <h2>{props.account.name}</h2>
          <h2>${props.account.value}</h2>
          <h3>EXSPENSE</h3>
        </DetailTopWrapperExspense>
        <SliderWrapper>
          <p>
            <b>Slide for amount:$ {props.account.value}</b>
          </p>
          <SliderProto
            valueLabelDisplay="auto"
            defaultValue={props.account.value || 0.0}
            min={0}
            max={2000.0}
            onChange={(e, value) =>
              props.handleUpdate(e, value, props.index, props.account.type)
            }
          />
          <SaveButton onClick={e => alert("saving")}>SAVE</SaveButton>
        </SliderWrapper>
        <ChartWrapper>
            <DonutChart title = {props.account.name} subTitle = {props.account.name} dataPoints= {[{name: props.account.name, y:props.account.value, exploded:TextTrackCue},{name: "Exspense", y:props.totalExpensesAmount}]}/>
        </ChartWrapper>
      </DetailWrapper>
    );
  } else if (props.account.type === "income") {
    return (
      <DetailWrapper>
        <DeleteButton onClick={e => props.deleteAccount(props.id)}>X</DeleteButton>
        <DetailTopWrapperIncome>
          <h2>{props.account.name}</h2>
          <h2>${props.account.value}</h2>
          <h3>INCOME</h3>
        </DetailTopWrapperIncome>
        <SliderWrapper>
          <p>
            <b>Slide for amount:$ {props.account.value}</b>
          </p>
          <SliderProto
            valueLabelDisplay="auto"
            defaultValue={props.account.value || 0.0}
            min={0}
            max={10000.0}
            onChange={(e, value) =>
              props.handleUpdate(e, value, props.index, props.account.type)
            }
          />
          <SaveButton onClick={e => alert("saving")}>SAVE</SaveButton>
        </SliderWrapper>
      </DetailWrapper>
    );
  }
};

export default DetailCompontent;

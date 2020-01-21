import React from "react";
import styled from "styled-components";
import SliderProto from '../GlobalComponent/Slider';


const DetailWrapper = styled.div`
  width:80%;
  height: 220px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 2%;
`;

const DetailTopWrapperExspense = styled.div `
    display: flex;
    align-items:center;
    justify-content:center;
    flex-flow:column wrap;
    height:50%;
    border-bottom: 1px solid black;
    background-color: rgba(52, 73, 94, 1.0);
    color: white;
    border-radius: 10px;

`

const DetailTopWrapperIncome = styled.div `
    display: flex;
    align-items:center;
    justify-content:center;
    flex-flow:column wrap;
    height:50%;
    border-bottom: 1px solid black;
    background-color: rgba(130, 88, 159,1.0);
    color: white;
    border-radius: 10px;

`

const SliderWrapper = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  flex-flow:column wrap;
  height:50%;
  width:50%;
  margin-left:5%;
`;


const DetailCompontent = props => {
  // name, amount, slider


       if (props.account.type === "exspense"){
      return(  <DetailWrapper>
         <DetailTopWrapperExspense>
             <h2>{props.account.name}</h2>
             <h2>${props.account.value}</h2>
             <h3>EXSPENSE</h3>
        </DetailTopWrapperExspense> 
        <SliderWrapper>
        <p><b>Slide for amount:$ {props.account.value}</b></p>
        <SliderProto valueLabelDisplay="auto" defaultValue={props.account.value || 0.0} min={0} max={2000.0} onChange={(e,value) => props.handleUpdate(e,value,props.index,props.account.type)}/>
      </SliderWrapper>
    </DetailWrapper>
      )
      }

      else if (props.account.type === "income"){
        return(
        <DetailWrapper>
        <DetailTopWrapperIncome>
      <h2>{props.account.name}</h2>
      <h2>${props.account.value}</h2>
      <h3>INCOME</h3>
        </DetailTopWrapperIncome>
        <SliderWrapper>
        <p><b>Slide for amount:$ {props.account.value}</b></p>
        <SliderProto valueLabelDisplay="auto" defaultValue={props.account.value || 0.0} min={0} max={10000.0} onChange={(e,value) => props.handleUpdate(e,value,props.index,props.account.type)}/>
      </SliderWrapper>
    </DetailWrapper>
        )
       }

      

};

export default DetailCompontent;

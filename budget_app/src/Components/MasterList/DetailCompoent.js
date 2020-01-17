import React from "react";
import styled from "styled-components";
import Slider, { createSliderWithTooltip, Range } from 'rc-slider';
import SliderProto from '../GlobalComponent/Slider';
import '../../assets/index.less';
const DetailWrapper = styled.div`
  width:80%;
  height: 220px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 2%;
`;

const DetailTopWrapper = styled.div `
    display: flex;
    align-items:center;
    justify-content:center;
    flex-flow:column wrap;
    height:50%;
    border-bottom: 1px solid black;
    background-color: rgba(52, 73, 94, 1.0);
    color: white;

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
  return (
    <DetailWrapper>
        <DetailTopWrapper>
      <h2>{props.exspense.name}</h2>
      <h2>${props.exspense.paymentAmount}</h2>
        </DetailTopWrapper>
      <SliderWrapper>
        <p><b>Slide for amount:$ {props.exspense.value}</b></p>
        <SliderProto valueLabelDisplay="auto" defaultValue={0.0} min={0} max={2000.0} onChange={(e,value) => props.handleUpdate(e,value,props.index)}/>
      </SliderWrapper>
    </DetailWrapper>

  );
};

export default DetailCompontent;

import React from "react";
import styled from "styled-components";

const DetailWrapper = styled.div`
  width: 90%;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 2%;
`;

const SliderWrapper = styled.div`
  width: 400px;
`;

const DetailCompontent = props => {
  // name, amount, slider
  return (
    <DetailWrapper>
      <h2>{props.exspense.name}</h2>
      <h2>{props.exspense.paymentAmount}</h2>
      <SliderWrapper>
        <p>Slide for amount</p>
      </SliderWrapper>
    </DetailWrapper>
  );
};

export default DetailCompontent;

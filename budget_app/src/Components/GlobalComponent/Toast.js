import React from "react";
import styled, { keyframes } from "styled-components";

const slide = keyframes`
   0%   { right:-300px; top:10px; }
   50%  { right:0px; top:10px; opacity:1; }
  100%  { right:-300px; top:10px; opacity:0.0;}
`;

const ToastWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
  width: 300px;
  height: 50px;
  border-radius: 10px 0 0 10px;
  background-color: rgba(152, 251, 152, 1);
  animation: ${slide};
  animation-duration: 3s; 
`; // IN ORDER TO ADJUST THE DURATION OF A TOAST YOU NEED TO ADJUST THE ANIMATION DURATION, ALSO 
// BE AWARE THAT YOU NEED TO ADD THE ACTION ACTION 'handleShowToast(3000)' TO EACH EVENT YOU WANT TO TARGET FROM 
// THE APPS.JS CLASS. MAKE SURE THAT THAT THE ARGUMENT BEING PASSED IN TO THIS FUNC AND THE ANIMATION-DURATION MATCH

const Toast = props => {
  return (
    <ToastWrapper style={{ display: props.show ? "block" : "none" }}>
      <h2>SAVED!</h2>
    </ToastWrapper>
  );
};

export default Toast;

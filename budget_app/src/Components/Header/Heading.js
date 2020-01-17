import React from 'react';
import styled from 'styled-components';

const HeadingWrapper = styled.div`
    display: flex;
    justify-content: center;

    width:100%;
    height:75px;
    background-color: rgba(167,228,124,0.8);

    border: 1px solid black;;
`;

const Heading = props => {

return(   
         <HeadingWrapper>
            <h2>Budget Maker</h2>
        </HeadingWrapper>
      )
};

export default Heading;
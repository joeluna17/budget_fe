import React from 'react';
import styled from 'styled-components';
import DetailComponent from './DetailCompoent';

const MasterWrapper = styled.div `
    display: flex;
    justify-content:center;
    align-items:center;
    flex-flow: column wrap;
    margin: 0 auto;
    width:100%;
`



const MasterList = props => {
    return(
    <MasterWrapper>
        {props.totalExpenses.map(exspense => {
            return <DetailComponent exspense = {exspense}  />
        })} 

    </MasterWrapper>
    )

}
export default MasterList;
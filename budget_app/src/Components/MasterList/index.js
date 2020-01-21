import React from 'react';
import styled from 'styled-components';
import DetailComponent from './DetailCompoent';

const MasterWrapper = styled.div `
    display: flex;
    justify-content:center;
    align-items:center;
    flex-flow: column wrap;
    margin: 4% auto 0 auto;
    width:100%;
`



const MasterList = props => {
    return(
    <MasterWrapper>
        {props.accounts.map((account, index) => {
            return <DetailComponent account = {account} key={index} index={index} handleUpdate={props.handleUpdate} />
        })} 

    </MasterWrapper>
    )

}
export default MasterList;
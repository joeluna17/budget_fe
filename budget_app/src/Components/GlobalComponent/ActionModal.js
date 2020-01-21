import React, {useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';


const FormBodyWrapper = styled.div`
  display:flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items:left;
  margin:2% auto;
`



const ActionModal = props => {
      const[name, setName ] = useState("");
      const[value, setValue] = useState(0.0);
      const[type, setType] = useState("exspense");

      const account = {
       name :  name.toUpperCase(),
       type : type,
       value: value
      };

    return (
        <>
        <Modal show={props.show} onHide={() => props.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Add Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <FormBodyWrapper>
            <input type="text" name="accountName" placeholder="Account Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <br/>
            <select onChange={(e) =>setType(e.target.value)}>
              <option>income</option>
              <option selected>exspense</option>
            </select>
            <br/>
            <input type="number" name="value" placeholder="$0.0" value={value} onChange={(e)=> setValue(e.target.value)}  />
            </FormBodyWrapper>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() =>props.handleClose()}>
              Close
            </Button>
            <Button variant="primary" onClick={() =>{ return (props.addAccount(account),setName(""), setValue(0.0), setType("exspense") ,props.handleClose())}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default ActionModal;





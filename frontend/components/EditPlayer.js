import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';

const PlayerForm = () => {

  const editURL = "http://localhost:8080/players/";
  const navigate = useNavigate();
  const param = useParams();
  const [pId, setPId] = useState('');
  const [pName, setPName] = useState('');
  const [pRole, setPRole] = useState('');

useEffect(() => {

  axios.get(editURL+param.id).then((response) => {
    const pData = response.data;
    setPId(pId.id);
    setPName(pName.name);
    setPRole(pRole.role);

  }).catch(error => {
    alert("Error Ocurred getting employee detail:"+ error);
  });
}, []);


  const nameChangeHandler = (event) => {
    setPName(event.target.value);
  };

  const roleChangeHandler = (event) => {
    setPRole(event.target.value);
  };


  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .put(editURL+param.id, {
        id: pId,
        name:pName,
        role: pRole
      })
      .then((response) => {
        alert("Player"+ pId +" updated!");
        navigate('/read')

      }).catch(error => {
        alert("Error Ocurred updating player:"+ error);
      });

  };

    return(
      <Alert variant='primary'>
      <Container>
      <Form onSubmit={submitActionHandler} id="data">
      <Form.Group  controlId="form.id">
            <Form.Label>Id</Form.Label>
            <Form.Control value={pId} readonly='readonly'/>
        </Form.Group>
        <Form.Group controlId="form.Name">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" value={pName} onChange={nameChangeHandler} placeholder="Enter User Name" required/>
        </Form.Group>
        <Form.Group  controlId="form.Role">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" value={pRole} onChange={roleChangeHandler} placeholder="Enter Role" required/>
        </Form.Group>
        <br></br>
        <Button type='submit'>Update Player</Button>
        &nbsp;&nbsp;&nbsp;
        <Button type='submit' onClick={()=>navigate("/read")}>Cancel</Button>
      </Form>
    </Container>
    </Alert>

    );
}
export default PlayerForm;
import { Form, Col, Button, Row} from "react-bootstrap";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { getAllStatuses} from "../../../redux/statusRedux";


const TableForm = props => {
  const [status, setStatus] = useState(props.status);
  const allStatuses = useSelector(getAllStatuses);
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
  const [bill, setBill] = useState(props.bill);

  return (
    <Form key={props.id}>
      <Form.Group as={Row} style={{ maxWidth: '18rem' }}>
        <Form.Label column sm="3">Status:</Form.Label>
        <Col sm="9" className='d-flex mb-2'>
            <Form.Select value={status} onChange={e => setStatus(e.target.value)}>
            <option>{props.status}</option>
            {allStatuses.map((status) => (status !== props.status ? <option key={status}>{status}</option> : ''))}
            </Form.Select>
          </Col>
        <Form.Label column sm="3">People:</Form.Label>
          <Col sm="9" className='d-flex mb-2'>
            <Form.Control style={{ maxWidth: '3rem' }} value={peopleAmount} onChange={e => setPeopleAmount(e.target.value)}/>
            <span className="mx-2 my-auto">/</span>
          <Form.Control style={{ maxWidth: '3rem' }} value={maxPeopleAmount} onChange={e => setMaxPeopleAmount(e.target.value)} disabled />
          </Col>
        <Form.Label column sm="3">Bill:</Form.Label>
          <Col sm="9" className='d-flex mb-2'>
            <span className="mx-2 my-auto">$</span>
          <Form.Control style={{ maxWidth: '3rem' }} value={bill} onChange={e => setBill(e.target.value)}/>
          </Col>
      </Form.Group>
      <Button variant="primary" type="submit">Update</Button>
    </Form>
  );
};

export default TableForm;
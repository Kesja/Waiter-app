import { Form, Col, Button, Row} from "react-bootstrap";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { getTableStatus } from "../../../redux/tablesRedux";


const TableForm = props => {
  const [status, setStatus] = useState(props.status);
 const allStatuses = useSelector(getTableStatus)

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
            <Form.Control style={{ maxWidth: '3rem' }} />
            <span className="mx-2 my-auto">/</span>
            <Form.Control style={{ maxWidth: '3rem' }} />
          </Col>
        <Form.Label column sm="3">Bill:</Form.Label>
          <Col sm="9" className='d-flex mb-2'>
            <span className="mx-2 my-auto">$</span>
          <Form.Control style={{ maxWidth: '3rem' }}/>
          </Col>
      </Form.Group>
      <Button variant="primary" type="submit">Update</Button>
    </Form>
  );
};

export default TableForm;
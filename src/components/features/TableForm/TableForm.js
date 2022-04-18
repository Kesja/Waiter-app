import { Form, Col, Button, Row} from "react-bootstrap";
import { getTableStatus} from "../../../redux/tablesRedux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const TableForm = props => {
  const {status} = useParams();
  const tableStatus = useSelector(state => getTableStatus(state, status));

  return (
    <Form key={props.id}>
      <Form.Group as={Row} style={{ maxWidth: '18rem' }}>
        <Form.Label column sm="3">Status:</Form.Label>
        <Col sm="9" className='d-flex mb-2'>
            <Form.Select>
            <option>{status}</option>
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
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import { Link } from "react-router-dom";

const Tables = () => {
  const tables = useSelector(getAllTables);
  return (
    <ListGroup variant="flush">
      {tables.map(table => (<ListGroup.Item key={table.id}>
        <div className="d-flex justify-content-between align-items-end my-3">
          <h2 className="my-0 pe-4 fs-4">Table {table.id}</h2>
          <p className=" flex-fill my-0 fw-bold fs-6  ">Status:<span className="ms-2 text-muted fw-normal">{table.status}</span></p>
          <Button as={Link} to={`/table/${table.id}`} variant="primary">Show more</Button>
        </div>
      </ListGroup.Item>))}
    </ListGroup>
  );
};

export default Tables;
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";

const Tables = () => {
  const tables = useSelector(getAllTables);
  return (
    <ListGroup>
      {tables.map(table => (<ListGroup.Item key={table.id}>
        <div>
          <h2>Table {table.id}</h2>
        </div>
      </ListGroup.Item>))}
    </ListGroup>
  );
};

export default Tables;
import TableForm from '../../features/TableForm/TableForm'
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { useParams } from 'react-router-dom';

const SingleTable = () => {
  const { id } = useParams();
  const tableData = useSelector(state => getTableById(state, id));
  
  return (
    <>
      <h1>Table {id}</h1>
      <TableForm {...tableData} />
    </>
  )
}

export default SingleTable
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import SingleTable from './components/pages/SingleTable/SingleTable';
import NotFound from './components/pages/NotFound/NotFound';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tablesRedux';
import { fetchStatuses } from './redux/statusRedux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => fetchTables(dispatch), [dispatch], fetchStatuses(dispatch), [dispatch]);

  return (
    <div className='py-3 '>
      <Container className=' pb-5 pt-1  rounded-3'>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table/:id" element={<SingleTable />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
      </Container>
    </div>
  );
}

export default App;

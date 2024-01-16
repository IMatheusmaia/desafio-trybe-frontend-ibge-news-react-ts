import { Routes, Route } from 'react-router-dom';
import Notices from './pages/Notices';
import Layout from './pages/Layout/Layout';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Notices /> } />
      </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;

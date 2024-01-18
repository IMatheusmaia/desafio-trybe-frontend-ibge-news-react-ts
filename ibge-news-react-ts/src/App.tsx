import { Routes, Route } from 'react-router-dom';
import Notices from './pages/Notices';
import User from './pages/User';
import Layout from './pages/Layout/Layout';
import NotFound from './components/NotFound';
import LoginWrapper from './components/LoginWrapper';

function App() {
  const base = '/desafio-trybe-frontend-ibge-news-react-ts';
  return (
    <Routes>
      <Route path={ base } element={ <Layout /> }>
        <Route index element={ <Notices /> } />
        <Route path={ `${base}/user` } element={ <User /> } />
        <Route path={ `${base}/login` } element={ <LoginWrapper /> } />
      </Route>
      <Route path={ `${base}/*` } element={ <NotFound /> } />
    </Routes>
  );
}

export default App;

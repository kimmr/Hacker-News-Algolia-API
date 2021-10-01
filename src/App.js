import { Route, Redirect } from 'react-router-dom';

import Search from './pages/search';
import History from './pages/history';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/history'>
          <History />
        </Route>
      </main>
    </div>
  );
}

export default App;

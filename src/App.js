import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='users'>
          <Route index element={<List />} />
          <Route path='new' element={<New />} />
          <Route path=':userId' element={<Single />} />
        </Route>

        <Route path='products'>
          <Route index element={<List />} />
          <Route path='new' element={<New />} />
          <Route path=':productId' element={<Single />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

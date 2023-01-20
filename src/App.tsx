import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Create_Post } from './SideBar/Create_Post/Create_Post';
import { Home } from './Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/home/index'
import { Login } from './pages/login'
import { Registration } from './pages/registration'
import { Feed } from './pages/feed'

function App() {
  return (
    <Router>
       <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/login" element={<Login />} />
          <Route path ="/Registration" element={<Registration />} />
          <Route path ="/feed" element={<Feed />} />
          <Route path ="/registration" element={<Registration />} />
        </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../home/Home';
import Navbar from '../../components/navbar/Navbar'
import NotFound from '../../components/NotFound'

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />

        <div className="content">
          <div className="side-bar">
            <Link to='/'>בית</Link>
            <Link to='/'>לקוחות</Link>
            <Link to='/'>פרטים</Link>
          </div>

          <div className="views">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>


      </div>
    </Router>
  );
}

export default App;

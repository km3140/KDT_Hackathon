import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Transaction from './pages/Transaction';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Menu />
        <div style={{ marginLeft: '70px' }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/tran" element={<Transaction />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

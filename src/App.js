import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from  './components/pages';
import SigninPage from './components/pages/signin';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SigninPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

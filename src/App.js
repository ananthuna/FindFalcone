import './App.css';
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    

  );
}

export default App;

import Home from './pages/Home'
import Result from './pages/Result'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/result" element={<Result/>}></Route>
        </Routes>
      </BrowserRouter>
    

  );
}

export default App;

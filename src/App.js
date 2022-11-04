import Home from './pages/Home'
import Result from './pages/Result'
import Story from './pages/Story'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route  path="/result" element={<Result/>}></Route>
          <Route  path="/story" element={<Story/>}></Route>
        </Routes>
      </BrowserRouter>
    

  );
}

export default App;

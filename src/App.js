import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, Product} from './pages'


function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/product' element={<Product />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, Product, Showcases, License, Resources, NoPage} from './pages'


function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/license" element={<License />} />
                <Route path="/showcases" element={<Showcases />} />

                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

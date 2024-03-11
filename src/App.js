import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, Showcases, ContactUs, AboutUs, NoPage, Blog} from './pages'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/docwire" element={<Home/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/contact-us" element={<ContactUs/>}/>
                    <Route path="/docwire/contact-us" element={<ContactUs/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/showcases" element={<Showcases/>}/>
                    <Route path="/showcases" element={<Showcases/>}/>
                    <Route path="*" element={<NoPage/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

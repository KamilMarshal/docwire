import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Favicon from "react-favicon";
import {
    Home,
    Showcases,
    ContactUs,
    AboutUs,
    NoPage,
    NoBlogPage,
    Blog,
    TermsOfService,
    Privacy,
    Harpo,
    Tausight,
    PwCSingapore
} from './pages'
import {ScrollToTop} from "./containers";
import FaviconLogo from './assets/FaviconLogo.png'

function App() {
    return (
        <div>
            <Favicon url={FaviconLogo}/>
            <BrowserRouter>
                <ScrollToTop/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Navigate to="/"/>}/>
                    <Route path="/docwire" element={<Navigate to="/"/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/contact-us" element={<ContactUs/>}/>
                    <Route path="/docwire/contact-us" element={<ContactUs/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/showcases" element={<Showcases/>}/>
                    <Route path="/showcases/harpo" element={<Harpo/>}/>
                    <Route path="/showcases/tausight" element={<Tausight/>}/>
                    <Route path="/showcases/pwc-singapore" element={<PwCSingapore/>}/>
                    <Route path="/terms-of-service" element={<TermsOfService/>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
                    <Route path="/error404" element={<NoBlogPage/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

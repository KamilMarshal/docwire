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
    Privacy
} from './pages'
import {PostTemplate, ScrollToTop, ShowcaseTemplate} from "./containers";
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
                    <Route path="/blog/:id" element={<PostTemplate/>}/>
                    <Route path="/showcases" element={<Showcases/>}/>
                    <Route path="/showcases/:link" element={<ShowcaseTemplate/>}/>
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

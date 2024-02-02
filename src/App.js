import './App.css';
import {Nav, Header, Slider, CTA, Article, UseCases, Footer} from "./containers";

function App() {
  return (
    <div className="App">
        <Nav />
        <Header />
        <Slider />
        <CTA />
        <Article />
        <UseCases />
        <Footer />
    </div>
  );
}

export default App;

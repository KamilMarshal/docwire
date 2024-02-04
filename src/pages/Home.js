import {Article, CTA, Footer, Header, Nav, Slider, UseCases} from "../containers";

function Home() {
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
    )
}

export default Home;
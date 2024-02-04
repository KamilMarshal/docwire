import {HomeHaveYouEver, CTA, Footer, HomeHeader, Nav, Slider, UseCases} from "../containers";

function Home() {
    return (
        <div className="App">
            <Nav />
            <HomeHeader />
            <Slider />
            <HomeHaveYouEver />
            <CTA />
            <UseCases />
            <Footer />
        </div>
    )
}

export default Home;
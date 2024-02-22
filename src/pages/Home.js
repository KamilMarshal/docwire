import {UnlockThePower, HomeHaveYouEver, CTA, Footer, HomeHeader, Nav, Slider, UseCases} from "../containers";

function Home() {
    return (
        <div className="App">
            <Nav />
            <HomeHeader />
            <Slider />
            <HomeHaveYouEver />
            <UnlockThePower />
            <CTA />
            <UseCases />
            <Footer />
        </div>
    )
}

export default Home;
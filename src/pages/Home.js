import {
    WingsSection,
    UnlockThePower,
    HomeHaveYouEver,
    CTA,
    Footer,
    HomeHeader,
    Nav,
    Slider,
    UseCases,
    InfoSection
} from "../containers";

function Home() {
    return (
        <div className="App">
            <Nav/>
            <HomeHeader/>
            <Slider/>
            <HomeHaveYouEver/>
            <UnlockThePower/>
            <WingsSection/>
            <CTA/>
            <InfoSection/>
            <UseCases/>
            <Footer/>
        </div>
    )
}

export default Home;
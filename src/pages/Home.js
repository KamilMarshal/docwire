import {
    WingsSection,
    UnlockThePower,
    HomeHaveYouEver,
    CTA,
    Footer,
    HomeHeader,
    Nav,
    Slider,
    InfoSection
} from "../containers";

function Home() {
    document.title = "Home | Docwire"
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
            <Footer/>
        </div>
    )
}

export default Home;
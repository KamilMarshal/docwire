import {Nav, AboutUsSection, Footer} from "../containers";

function AboutUs() {
    document.title = "About Us | Docwire"
    return (
        <div>
            <Nav />
            <AboutUsSection />
            <Footer />
        </div>
    )
}

export default AboutUs;
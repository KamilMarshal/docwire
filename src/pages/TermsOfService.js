import {Footer, Nav, TermsOfServiceSection} from "../containers";

function TermsOfService() {
    document.title = "Terms of Service | Docwire"
    return (
        <div>
            <Nav />
            <TermsOfServiceSection />
            <Footer />
        </div>
    )
}

export default TermsOfService;
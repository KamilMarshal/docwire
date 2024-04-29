import {Footer, Nav, PrivacyPolicy} from "../containers";

function Privacy() {
    document.title = "Privacy Policy | Docwire"
    return (
        <div>
            <Nav />
            <PrivacyPolicy />
            <Footer />
        </div>
    )
}

export default Privacy;
import {Nav, Contact, Footer} from "../containers";

function ContactUs() {
    document.title = "Contact Us | Docwire"
    return (
        <div>
            <Nav />
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactUs;
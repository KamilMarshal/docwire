import './contact.css'
import Form from "./Form";
function Contact() {
    return (
        <div className="docwire__contact">
            <div className="docwire__contact-bg">
                <div className="docwire__contact-text">
                    <div className="docwire__contact-text_h1">
                        How Can We Help You?
                    </div>
                    <div className="docwire__contact-text_section">
                        Want access to our non-commercial demo license, ask questions about our functions or simply inquire
                        about pricing? Fill in the form and we will get back to you!
                    </div>
                </div>
                <div className="docwire__contact-form">
                    <div className="docwire__contact-form_form">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
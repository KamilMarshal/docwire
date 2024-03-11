import './form.css'
import {useState} from "react";
import emailjs from 'emailjs-com'

function Form() {
    const [formValues, setFormValues] = useState({
        reason: "",
        name: "",
        email: "",
        message: ""
    });

    const [isFormVisible, setIsFormVisible] = useState(true);
    const [State, setState] = useState("")

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    };

    function handleOnSubmit(e) {
        e.preventDefault()
        setIsFormVisible(false)
        emailjs.sendForm('service_kae7du7',
            'template_c6xey6a',
            e.target, '3KoDxLxb5ljsWpftC').then(res => {
            console.log(res)
            setState("success")
        }).catch(err => {
            setState("fail")
            console.log(err)
        })
    }


    return (
        <>
            {isFormVisible ?
                (
                    <form id="email-form" name="email-form" method="POST" action="" onSubmit={handleOnSubmit}>
                        <h2>I want to ask about...</h2>
                        <select id="Reason" name="Reason" className="select" value={formValues.reason}
                                onChange={e => setFormValues({...formValues, reason: e.target.value})}>
                            <option value="" disabled={!!formValues.reason}>Select one...</option>
                            <option value="Demo">Demo</option>
                            <option value="License">License</option>
                            <option value="Pricing">Pricing</option>
                            <option value="SDK Questions">SDK Questions</option>
                            <option value="Support">Support</option>
                            <option value="Other">Other</option>
                        </select>
                        <input type="text" id="name" name="name" className="input" maxLength="256" placeholder="Name"
                               onChange={handleChange} required/>
                        <input type="email" id="email" name="email" className="input" maxLength="256"
                               placeholder="Email" onChange={handleChange} required/>
                        <textarea id="message" name="message" className="textarea" placeholder="Your message ..."
                                  onChange={handleChange} required/>
                        <input type="submit" value="Send request" className="submitButton"
                               disabled={State === "loading"}/>

                    </form>
                ) : (
                    <div className="FormAccepted">
                        <p className="AcceptedParagraph">
                            {State === "success" ?
                                "Message has been sent :)"
                                : "Message failed to send :("}
                        </p>
                    </div>
                )}
        </>
    )
}

export default Form;
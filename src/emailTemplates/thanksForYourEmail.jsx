import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";
import {Tailwind} from "@react-email/tailwind";

export const thanksForYourEmail = ({username}) => {
    const previewText = `Thank you ${username} for Contacting DocWire!`;

    return (
        <Html>
            <Head/>
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body style={main}>
                    <Container style={container}>
                        <Img
                            src={`https://kamilmarshal.github.io/docwire/static/media/logoDocWire.1b7fc94e1a27836aa427.JPG`}
                            width="170"
                            alt="DocWire Logo"
                            style={logo}
                        />
                        <Text style={paragraph}>Dear {username},</Text>
                        <Text style={paragraph}>
                            Thanks for getting in touch! We know how important it is to get immediate help which is why
                            we promise to do everything we can to get back to you as soon as possible.
                        </Text>
                        <Text style={paragraph}>
                            While you wait, feel free to explore our website for more information about our products.
                            Should you have any urgent matters, please do not hesitate to contact us directly at
                            info@docwire.io
                        </Text>

                        <Section style={btnContainer}>
                            <Button style={button} href="https://kamilmarshal.github.io/docwire">
                                Our Website
                            </Button>
                        </Section>
                        <Text style={paragraph}>
                            We appreciate your interest in Docwire SDK. We look forward to assisting you and
                            will be in touch soon!
                            <br/>
                            Best Regards,
                            <br/>
                            The Team at DocWire
                        </Text>
                        <Hr style={hr}/>
                        <Text style={footer}>
                            If you were not expecting this, you can ignore this email.<br/>If you are concerned about your account's safety, please reply to info@docwire.io to get in touch with us.
                        </Text>
                    </Container>

                </Body>
            </Tailwind>
        </Html>
    )
}


const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    display: "flex",
    justifyContent : "center"
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    justifyContent : "center",
    display: "flex",
    width: "60vw"
};

const logo = {
    margin: "0 auto",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
};

const btnContainer = {
    textAlign: "center",
    width: "10vw"
};

const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: "12px",
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
}
export default thanksForYourEmail
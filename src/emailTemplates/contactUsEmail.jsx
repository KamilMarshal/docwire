import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Text,
} from "@react-email/components";
import * as React from "react";
import {Tailwind} from "@react-email/tailwind";

export const contactUsEmail = ({category, username, email, message}) => {
    const previewText = `${username} send us a message via the contact form on our website!`;

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
                        <Text style={paragraph}>{previewText}</Text>
                        <Text style={paragraph}>
                            Email: {email}<br/>
                            Category: {category}
                        </Text>
                        <Text style={paragraph}>
                            Message: "{message}"
                        </Text>
                        <Hr style={hr}/>
                        <Text style={footer}>
                            Reply as soon as possible.
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

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
}
export default contactUsEmail
import {Footer, Nav, UseCases,} from "../containers";

function Showcases() {
    document.title = "Showcases | Docwire"
    return (
        <div>
            <Nav/>
            <UseCases/>
            <Footer/>
        </div>
    )
}

export default Showcases;
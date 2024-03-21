import {ShowcaseTemplate} from "../../containers";
import {data} from './data'

function Harpo() {
    document.title = "Harpo Showcase"
    return (
        <ShowcaseTemplate props={data[0]}/>
    )
}

export default Harpo;
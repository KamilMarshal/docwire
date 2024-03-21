import {ShowcaseTemplate} from "../../containers";
import {data} from './data'

function PwCSingapore() {
    document.title = "PwC Singapore Showcase"
    return (
        <ShowcaseTemplate props={data[2]}/>
    )
}

export default PwCSingapore;
import {ShowcaseTemplate} from "../../containers";
import {data} from './data'

function Tausight() {
    document.title = "Tausight Showcase"
    return (
        <ShowcaseTemplate props={data[1]}/>
    )
}

export default Tausight;
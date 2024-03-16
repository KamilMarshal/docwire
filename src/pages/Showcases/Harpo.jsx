import {ShowcaseTemplate} from "../../containers";
import {data} from './data'

function Harpo() {
    console.log(data[0].companyName)
    return (
        <ShowcaseTemplate props={data[0]}
            />
    )
}

export default Harpo;
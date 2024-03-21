import {NoPageComponent} from "../containers";

function NoPage() {
        document.title = "Page not found"
    return (
        <div>
            <NoPageComponent />
        </div>
    )
}

export default NoPage;
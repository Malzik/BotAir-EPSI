import {Motion} from "./Motion";
import {Processing} from "./Processing";


const Main = () => {
    const testProcessing = new Processing(new Motion(64, 64))
    testProcessing.scan()
}

Main()

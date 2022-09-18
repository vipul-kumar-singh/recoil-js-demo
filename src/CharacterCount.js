import {useRecoilValue} from "recoil";
import {charCountState} from "./state";

function CharacterCount() {
    const count = useRecoilValue(charCountState);
    return <>Character Count: {count}</>;
}

export default CharacterCount;
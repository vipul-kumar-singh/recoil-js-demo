import TextInput from "./TextInput";
import CharacterCount from "./CharacterCount";
import {textState} from "./state";
import {useRecoilValue} from "recoil";


const CharacterCounter = () => {
    const text = useRecoilValue(textState);

    return (
        <div>
            <TextInput/>
            <br/>
            Echo: {text}
            <br/>
            <CharacterCount/>
        </div>
    );
}

export default CharacterCounter;
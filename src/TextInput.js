import {useRecoilState} from "recoil";
import {textState} from "./state";

const TextInput = () => {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange}/>
        </div>
    );
};

export default TextInput;
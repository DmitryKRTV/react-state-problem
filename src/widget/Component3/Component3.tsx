import React, {ReactNode} from 'react';
import {useSelector} from "react-redux";
import {selectValue} from "../../feature/counterSlice";

interface Component3 {
    onClose: (n: number) => void
}

const Component3 = (props: Component3) => {
    const {onClose} = props

    const value = useSelector(selectValue)
    const handleClose = () => {
        onClose(value)
    }

    return (
        <div style={{margin: '20px', padding: '20px', border: '1px dashed red'}}>
            Component 3
            <button onClick={handleClose}>close component 3</button>
        </div>
    );
};

export default Component3;
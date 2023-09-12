import React, {ReactNode, useEffect, useState} from 'react';
import Component3 from "../Component3/Component3";
import {increment, selectValue} from "../../feature/counterSlice";
import {useDispatch, useSelector} from "react-redux";

const Component2 = () => {
    const [content, setContent] = useState<ReactNode | null>()

    const dispatch = useDispatch()
    const value = useSelector(selectValue)

    const cp = '' + value;

    useEffect(() => {
        setTimeout(() => {
            dispatch(increment())
        }, 1000)
    }, [content])

    const createComponentCallback = () => {
        console.log('createComponentCallback value: ', value, cp)
        setContent(<Component3 onClose={closeCallback}/>)
    }

    const closeCallback = (ret: number) => {
        console.log('closeCallback value: ', value, cp, ret)
        setContent(null)
    }

    const incrementReduxCallback = () => {
        console.log('incrementReduxCallback value: ', value, cp)
        dispatch(increment())
    };

    console.log('Component2 value: ', value)

    return (
        <div style={{margin: '20px', padding: '20px', border: '1px solid green'}}>
            Component 2
            <div>
                Redux value = {value}
                <button onClick={incrementReduxCallback}>increment</button>
            </div>

            <button style={{marginTop: '10px'}}
                    onClick={createComponentCallback}
                    disabled={!!content}
            >Open Component 3
            </button>
            {content}
        </div>
    );
};

export default Component2;
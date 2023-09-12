import React, {ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import Component3 from "../Component3/Component3";
import {increment, selectValue} from "../../feature/counterSlice";
import {useDispatch, useSelector} from "react-redux";

const Component2 = React.memo((props?: { value: number }) => {
    const [content, setContent] = useState<ReactNode | null>()
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    const value = useSelector(selectValue)

    const [value2, setValue2] = useState<number>(0)

    const value3 = useMemo(() => value2, [value2])

    const cp = '' + value;

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log(value)
    //     }, 1000)
    // }, [content])

    const createComponentCallback = () => {
        console.log('createComponentCallback value: ', value, cp)
        setContent(<Component3 onClose={closeCallback}/>) //Вызывает ошибку. Не сохраняет значение переменных из замыкания
    }

    const closeCallback = (ret: number) => {
        console.log('closeCallback value: ', value, cp, ret, props?.value, value2, value3)
        setContent(null)
    }

    const incrementReduxCallback = () => {
        console.log('incrementReduxCallback value: ', value, cp)
        dispatch(increment())
        setValue2(value2 + 1)
    };

    console.log('Component2 value: ', value)

    return (
        <div style={{margin: '20px', padding: '20px', border: '1px solid green'}}>
            Component 2
            <div>
                Redux value = {value}
                React value = {value2}
                <button onClick={incrementReduxCallback}>increment</button>
            </div>

            <button style={{marginTop: '10px'}}
                    onClick={createComponentCallback}
                    disabled={!!content}
            >Open Component 3
            </button>
            {content}

            <button style={{marginTop: '10px'}}
                    onClick={() => setShow(true)}
            >show comp 2
            </button>

            {show && <Component3 onClose={closeCallback}/>}
        </div>
    );
});

export default Component2
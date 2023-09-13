import React, {ReactNode, useState} from 'react';
import {Component2} from "../Component2/Component2";

export const Component1 = () => {
    // 1-ый подход. Сохранять весь компонент в state
    const [content, setContent] = useState<ReactNode | null>()
    // 2-ой подход. Сохранять только флаг и на его основании отображать компонент в методе render()
    const [show, setShow] = useState(false)

    const [callbackValue, setCallbackValue] = useState<number>(0)
    const [value, setValue] = useState<number>(0)

    const createComponentCallback = () => {
        console.log('createComponentCallback value: ', value)
        setContent(<Component2 onClose={closeCallback}/>)
        setShow(true)
    }

    const closeCallback = () => {
        console.log('closeCallback value: ', value)
        setCallbackValue(value)
        setShow(false)
        setContent(null)
    }

    const incrementCallback = () => {
        setValue(value + 1)
    };

    console.log('Component1 value: ', value)

    return (
        <div style={{margin: '20px', padding: '20px', border: '1px solid green'}}>
            Component 1
            <div>
                <div>value = {value}</div>
                <div>value in scope of close Component 2 function = {callbackValue}</div>
                <button onClick={incrementCallback}>increment</button>
            </div>

            <button style={{marginTop: '10px'}}
                    onClick={createComponentCallback}
                    disabled={!!content}
            >Open Component 2
            </button>

            {/* Первый способ */}
            {/* Значение value в функции closeCallback не будет обновляться после каждого render*/}
            {/*{content}*/}

            {/* Второй способ */}
            {/* Значение value в функции closeCallback будет обновляться после каждого render*/}
            {show && <Component2 onClose={closeCallback}/>}
        </div>
    )
}
import React from 'react';
import Component2 from "../Component2/Component2";
import {useSelector} from "react-redux";
import {selectValue} from "../../feature/counterSlice";

const Component1 = () => {
    const value = useSelector(selectValue)

    return (
        <div style={{margin: '20px', padding: '10px', border: '1px solid orange'}}>
            Component 1
            <Component2 value={value}/>
            <Component2 value={value}/>
        </div>
    );
};

export default Component1;
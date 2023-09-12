import React from 'react';
import Component2 from "../Component2/Component2";

const Component1 = () => {
    return (
        <div style={{margin: '20px', padding: '10px', border: '1px solid orange'}}>
            Component 1
            <Component2/>
        </div>
    );
};

export default Component1;
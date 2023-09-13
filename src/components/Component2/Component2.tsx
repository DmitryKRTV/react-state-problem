import React from 'react';

interface Component2 {
    onClose: () => void
}

export const Component2 = (props: Component2) => {
    const {onClose} = props

    const handleClose = () => {
        onClose()
    }

    console.log('Component2')

    return (
        <div style={{margin: '20px', padding: '20px', border: '1px dashed red'}}>
            Component 2
            <button onClick={handleClose}>close component 2</button>
        </div>
    );
};

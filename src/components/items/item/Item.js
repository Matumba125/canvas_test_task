import React from 'react';

const Item = (props) => {

    const dragStartHandler = () => {
        props.startDrag(props.id)
    }

    return (
        <div draggable style={props.style} onDragStart={dragStartHandler}/>
    );
};

export default Item;
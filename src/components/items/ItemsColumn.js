import React from 'react';
import style from './ItemsColumn.module.css'
import {useDispatch, useSelector} from "react-redux";
import Item from "./item/Item";
import {setAtCanvasAC, setIsCopyAC, startDragAC} from "../../store/itemsReducer";

const ItemsColumn = () => {

    const items = useSelector(state => state.items.items)
    const dispatch = useDispatch()

    const startDrag = (id) => {
        dispatch(startDragAC(id))
    }

    const setIsCopy = () => {
        dispatch(setIsCopyAC(true))
    }

    const onDragOverHandler = (e) => {
        e.preventDefault()
    }

    const stopDragItem = (e) => {
        e.preventDefault()
        dispatch(setAtCanvasAC())
    }

    return (
        <div className={style.itemColumn} onDragStart={setIsCopy} onDragOver={onDragOverHandler} onDrop={stopDragItem}>
            <h2 className={style.header}>Items</h2>
            <div draggable className={style.itemsColumn}>
                {
                    items.map( m => <Item key={m.id} id={m.id} style={m.style} startDrag={startDrag} />)
                }
            </div>
            
        </div>
    );
};

export default ItemsColumn;
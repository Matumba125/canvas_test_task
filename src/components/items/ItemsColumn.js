import React from 'react';
import style from './ItemsColumn.module.css'
import {useDispatch, useSelector} from "react-redux";
import Item from "./item/Item";
import {startDragAC} from "../../store/itemsReducer";

const ItemsColumn = () => {

    //Hooks
    const items = useSelector(state => state.items.items)
    const dispatch = useDispatch()

    //Handlers
    const startDrag = (id) => {
        dispatch(startDragAC(id))
    }


    return (
        <div className={style.itemColumn}>
            <h2 className={style.header}>Items</h2>
            <div draggable className={style.itemsColumn}>
                {items.map(m => <Item key={m.id} id={m.id} style={m.style} startDrag={startDrag}/>)}
            </div>

        </div>
    );
};

export default ItemsColumn;
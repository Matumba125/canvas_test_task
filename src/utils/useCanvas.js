import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {drawItem} from "./drawItem";
import {addItemAC, deleteItemAC, selectItemAC, setItemsAC, setMouseDownAC} from "../store/itemsReducer";

export const useCanvas = (width, height) => {


    const itemWidth = 100
    const itemHeight = 75


    const canvasRef = useRef(null)
    const dispatch = useDispatch()

    // selectors
    const itemsAtCanvas = useSelector(state => state.items.itemsAtCanvas)
    const selectedItem = useSelector(state => state.items.selectedItem)
    const mouseDown = useSelector(state => state.items.mouseDown)

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d')
        ctx.clearRect(0, 0, width, height)
        ctx.beginPath()
        // scanning an array of items and draws all unselected items
        itemsAtCanvas.forEach(m => {
            if (m.id !== selectedItem.id) {
                drawItem(m, ctx, selectedItem, itemHeight, itemWidth);
            }
        })
        // draws only selected item
        if (selectedItem) {
            drawItem(selectedItem, ctx, selectedItem, itemHeight, itemWidth)
        }
        // delete key handler
        document.onkeydown = (e) => {
            if (e.key === 'Delete' && selectedItem) {
                dispatch(deleteItemAC())
            }
        }

    }, [itemsAtCanvas, selectedItem])


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Handlers

    // checks if cursor at figure
    const cursorAtItem = (x, y, item) =>
            (x > item.x &&
            x < item.x + itemWidth &&
            y > item.y &&
            y < item.y + itemHeight)

    const onMouseDownHandler = (e) => {

        // calculates current click position at canvas that depends on difference between current position and canvas offset
        const x = e.pageX - canvasRef.current.offsetLeft
        const y = e.pageY - canvasRef.current.offsetTop

        let isCursorAtItem = false
        dispatch(setMouseDownAC(true))
        // checks if any item was clicked
        itemsAtCanvas.forEach(m => {
            if (cursorAtItem(x, y, m)) {
                dispatch(selectItemAC(m))
                isCursorAtItem = true;
            }
        })
        // removes the item selection
        if (!isCursorAtItem) {
            dispatch(selectItemAC({}))
        }

    };
    const onMouseMoveHandler = (e) => {

        // calculates current mouse position at canvas that depends on difference between current position and canvas offset
        const x = e.pageX - canvasRef.current.offsetLeft
        const y = e.pageY - canvasRef.current.offsetTop

        if (selectedItem && mouseDown) {
            //rewrites x and y properties of moving item
            dispatch(setItemsAC(itemsAtCanvas.map(m => {
                if (m.id === selectedItem.id) {
                    m.x = x - itemWidth / 2
                    m.y = y - itemHeight / 2
                }
                return m
            })))
        }
    };
    const onDropHandler = (e) => {
        // moves item to the half of it's height to the top and half of it's width to the left so it starts drawing higher. And center of new item matches with cursor position
        const x = e.pageX - canvasRef.current.offsetLeft - itemWidth / 2
        const y = e.pageY - canvasRef.current.offsetTop - itemHeight / 2
        dispatch(addItemAC(x, y))
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////

    return {
        canvasRef,
        onMouseDownHandler,
        onMouseMoveHandler,
        onDropHandler

    }
}
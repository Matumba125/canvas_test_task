import React from 'react';
import {useDispatch} from "react-redux";
import {setCursorAtCanvasAC, setMouseDownAC} from "../../store/itemsReducer";
import style from "./Canvas.module.css";
import {useCanvas} from "../../utils/useCanvas";

const Canvas = () => {
    //Constants
    const width = 800
    const height = 750


    //Hooks
    const dispatch = useDispatch()
    const canvas = useCanvas(width, height)


    //Handlers
    const onDragOverHandler = (e) => {
        e.preventDefault()
    }

    const onMouseUpHandler = () => {
        dispatch(setMouseDownAC(false))
    }


    const onMouseEnterHandler = () => {
        dispatch(setCursorAtCanvasAC(true))
    }

    const onMouseOutHandler = () => {
        dispatch(setCursorAtCanvasAC(false))
    }


    return (
        <div className={style.canvasWrapper}>
            <h2 className={style.header}>Canvas</h2>
            <canvas
                ref={canvas.canvasRef}
                onMouseOut={onMouseOutHandler}
                onMouseEnter={onMouseEnterHandler}
                onDrop={canvas.onDropHandler}
                onMouseMove={canvas.onMouseMoveHandler}
                onMouseUp={onMouseUpHandler}
                onMouseDown={canvas.onMouseDownHandler}
                onDragOver={onDragOverHandler}
                height={height}
                width={width}
            />
        </div>

    );
}

export default Canvas;
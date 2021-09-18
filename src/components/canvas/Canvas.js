import React from 'react';
import style from './Canvas.module.css'

const Canvas = () => {

    return (
        <div className={style.canvasWrapper}>
            <h2 className={style.header}>Canvas</h2>
            <canvas  className={style.canvas}>
            </canvas>

        </div>
    );
}

export default Canvas;
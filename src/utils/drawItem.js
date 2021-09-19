export const drawItem = (item, ctx, selectedItem, itemHeight, itemWidth) => {
    // sets line width
    ctx.lineWidth = 1;
    // sets bolder border for selected item
    if (item.id === selectedItem.id) {
        ctx.lineWidth = 4
    }
    ctx.strokeStyle = 'black'
    //draws rectangle
    if (item.type === "rectangle") {
        ctx.fillStyle = 'darkgreen'
        ctx.fillRect(item.x, item.y, itemWidth, itemHeight)
        ctx.strokeRect(item.x, item.y, itemWidth, itemHeight)
        ctx.stroke()
    }
    // draws ellipse
    if (item.type === "ellipse") {
        ctx.fillStyle = 'darkblue'
        ctx.ellipse(
            item.x + itemWidth / 2,
            item.y + itemHeight / 2,
            itemWidth / 2,
            itemHeight / 2,
            0,
            0,
            2 * Math.PI,
            true
        )
        ctx.fill()
        ctx.stroke();
        ctx.beginPath();

    }

}
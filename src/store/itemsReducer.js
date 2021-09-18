const items = [
    {
        id: 1,
        atCanvas: false,
    },
    {
        id: 2,
        atCanvas: false,
    }
]

const initialState = {
    items: items,
    cursorAtCanvas: false,
    figuresAtCanvas: [],
    draggingFigureID: 0,
    isCopy: false,
}




export const itemsReducer = (state = initialState, action) => {

}
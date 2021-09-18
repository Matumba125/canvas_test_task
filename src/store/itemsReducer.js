const SET_IS_COPY = 'SET-IS-COPY'
const SET_AT_CANVAS = 'SET-AT-CANVAS'
const START_DRAG = 'START-DRAG'


const ellipseStyle = {
    width: '100px',
    height: '75px',
    backgroundColor: 'darkblue',
    borderRadius: '50%',
    border: "1px solid",
    marginBottom: '50px',
}

const rectangleStyle = {
    width: '100px',
    height: '75px',
    backgroundColor: 'darkgreen',
    border: "1px solid",
    marginBottom: '50px',
}

const items = [
    {
        id: 1,
        atCanvas: false,
        style: ellipseStyle,
    },
    {
        id: 2,
        atCanvas: false,
        style: rectangleStyle,
    }
]

const initialState = {
    items: items,
    cursorAtCanvas: false,
    mouseDown: false,
    choosedFigure: {},
    figuresAtCanvas: [],
    draggingFigureID: 0,
    isCopy: false,
}




export const itemsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_IS_COPY:
            return{
                ...state,
                isCopy: action.isCopy
            }
        case START_DRAG:
            return {
                ...state,
                draggingFigureID: action.id
            }
        case SET_AT_CANVAS:
            return {
                ...state,
                items: state.items.map(m => m.id === state.draggingFigureID ? {...m, atCanvas: true} : m)
            }
        default:
            return state
    }
}

export const setIsCopyAC = (isCopy) => ({type: SET_IS_COPY, isCopy})
export const setAtCanvasAC = () => ({type: SET_AT_CANVAS})
export const startDragAC = (id) => ({type: START_DRAG, id})
import {v1} from "uuid";

const START_DRAG = 'START-DRAG'
const DELETE_ITEM = 'DELETE-ITEM'
const SET_CURSOR_AT_CANVAS = 'SET-CURSOR-AT-CANVAS'
const ADD_ITEM = 'ADD-ITEM'
const SET_ITEMS = 'SET-ITEMS'
const SET_MOUSE_DOWN = 'SET-MOUSE-DOWN'
const SELECT_ITEM = 'SELECT-ITEM'


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
        id: '1',
        style: ellipseStyle,
    },
    {
        id: '2',
        style: rectangleStyle,
    }
]

const initialState = {
    items: items,
    cursorAtCanvas: false,
    mouseDown: false,
    selectedItem: {},
    itemsAtCanvas: [],
    draggingItemID: '',
}


export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_DRAG:
            return {
                ...state,
                draggingItemID: action.id
            }
        case DELETE_ITEM:
            return {
                ...state,
                // returns itemsAtCanvas without deleted item
                itemsAtCanvas: state.itemsAtCanvas.filter(f => f.id !== state.selectedItem.id),
                selectedItem: {}
            }
        case SET_CURSOR_AT_CANVAS:
            return {
                ...state,
                cursorAtCanvas: action.cursorAtCanvas
            }
        case ADD_ITEM:
            // finds dragged item
            const draggedItem = state.items.find(f => f.id === state.draggingItemID)
            // creates new item with type that depend on dragged item id
            const newItem = {x: action.x, y: action.y, type: draggedItem.id === '1' ? 'ellipse' : 'rectangle', id: v1()}
            return {
                ...state,
                // adds new item to the end of array so that's displayed at the top
                itemsAtCanvas: [...state.itemsAtCanvas, newItem]
            }
        case SET_ITEMS:
            return {
                ...state,
                // rerender entire item field when some item position changed
                itemsAtCanvas: action.items
            }
        case SET_MOUSE_DOWN:
            return {
                ...state,
                mouseDown: action.mouseDown
            }
        case SELECT_ITEM:
            // creates new array without selected item
            const newCanvasItems = state.itemsAtCanvas.filter(f => f.id !== action.item.id)
            return {
                ...state,
                selectedItem: action.item,
                // adds selected item to the end of array so that's displayed at the top
                itemsAtCanvas: [...newCanvasItems, action.item !== {} && action.item]
            }
        default:
            return state
    }
}

export const startDragAC = (id) => ({type: START_DRAG, id})
export const deleteItemAC = () => ({type: DELETE_ITEM})
export const setCursorAtCanvasAC = (cursorAtCanvas) => ({type: SET_CURSOR_AT_CANVAS, cursorAtCanvas})
export const addItemAC = (x, y) => ({type: ADD_ITEM, x, y})
export const setItemsAC = (items) => ({type: SET_ITEMS, items})
export const setMouseDownAC = (mouseDown) => ({type: SET_MOUSE_DOWN, mouseDown})
export const selectItemAC = (item) => ({type: SELECT_ITEM, item})




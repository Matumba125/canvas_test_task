import './App.css';
import ItemsColumn from "./components/items/ItemsColumn";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemAC} from "./store/itemsReducer";
import Canvas from "./components/canvas/Canvas";

function App() {
    //Hooks
    const dispatch = useDispatch()
    const selectedItem = useSelector(state => state.items.selectedItem)
    const cursorAtCanvas = useSelector(state => state.items.cursorAtCanvas)
    const mouseDown = useSelector(state => state.items.mouseDown)

    //Handlers
    const onDragOverHandler = (e) => {
        e.preventDefault()
    }

    const onMouseUpHandler = () => {
        if (selectedItem && !cursorAtCanvas && mouseDown) {
            dispatch(deleteItemAC())
        }
    }


    return (
        <div className="App" onDragOver={onDragOverHandler} onMouseUp={onMouseUpHandler}>
            <div className={'wrapper'}>
                <ItemsColumn/>
                <Canvas/>
            </div>
        </div>
    );
}

export default App;

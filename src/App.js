import './App.css';
import Canvas from "./components/canvas/Canvas";
import ItemsColumn from "./components/items/ItemsColumn";

function App() {
    return (
        <div className="App">
            <ItemsColumn/>
            <Canvas/>
        </div>
    );
}

export default App;

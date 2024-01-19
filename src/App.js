import React, {useState, useEffect, useRef, useMemo, useCallback} from "react";
import ItemList from "./ItemList";


function App() {
    const [count, setCount] = useState(1)
    const [colored, setColored] = useState(false)


    const styles = {
        color: colored ? "dark" : "black"
    }

    const generateItemsFromApi = useCallback(() => {
            return new Array(count).fill("").map((_, index) => `Элемент ${index + 1}`)
    }, [count])


    return (
        <>
            <h1>Количество элементов: {count}</h1>
            <button onClick={() => setCount(prevState => prevState + 1)}>Add</button>
            <button onClick={() => setColored(prevState => !prevState)}>Change</button>
            <ItemList getItems={generateItemsFromApi}/>
        </>
    );
}

export default App;


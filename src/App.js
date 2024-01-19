import React, {useState, useEffect, useRef, useMemo} from "react";

function complexCompute(num) {
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}


function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => {
        return {
            color: colored ? "dark" : "black"
        }
    },[colored])

    const computed = useMemo(() => {
        complexCompute(number)
    },[number])

    useEffect(() => {
        console.log("Styles changed")
    },[styles])


    return (
        <>
            <h1>Вычисляемое свойство: {computed}</h1>
            <button onClick={() => setNumber(prevState => prevState + 1)}>Add</button>
            <button onClick={() => setNumber(prevState => prevState - 1)}>Remove</button>
            <button onClick={() => setColored(prevState => !prevState)}>Change</button>
        </>
    );
}

export default App;


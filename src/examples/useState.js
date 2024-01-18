import React,{useState} from 'react';


const UseState = () => {
    const [count, setCount] = useState(() => {
        return computeInitialCounter()
    })
    const [state, setState] = useState({
        title: "Counter",
        date: Date.now()
    })


    function computeInitialCounter() {
        console.log("Some calculation...")
        return Math.trunc(Math.random() * 10)
    }


    const addCount = () => {
        setCount((prev) => {
            return prev + 1
        })
    }

    const deleteCount = () => {
        setCount(prev => prev - 1)
    }

    function updateTitle() {
        setState((prev) => {
            return {
                ...prev,
                title: "New name"
            }
        })
    }
    return (
        <div>
            <h1>Счётчик: {count}</h1>
            <button onClick={addCount}>Добавить</button>
            <button onClick={deleteCount}>Убрать</button>
            <button onClick={updateTitle}>Change</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
};

export default UseState;
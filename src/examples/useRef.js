import React,{useEffect, useRef, useState} from 'react';


const UseRef = () => {
    const [count, setCount] = useState(1)
    const [value, setValue] = useState("initial")
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const inputTwoRef = useRef(null)
    const prevValue = useRef("")

    console.log(renderCount)



    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current.value)
        console.log(inputTwoRef.current)
    })

    useEffect(() => {
        prevValue.current = value

    }, [value])




    const focus = () => inputTwoRef.current.focus()

    return (
        <div>
            <h1>Количество рендеров: {renderCount.current}</h1>
            <h1>Предыдущее состояние useRef: {prevValue.current}</h1>
            <input ref={inputRef} type="text" onChange={(e) => setValue(e.target.value)} value={value}/>
            <button onClick={focus}>Focus</button>
        </div>
    );
};

export default UseRef;
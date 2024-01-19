import React, {useEffect, useState} from 'react';


const UseEffectMount = () => {
    const [count, setCount] = useState([])

    useEffect(() => {
        console.log("Render")
        const interval = setInterval(() => {
            setCount((prevState) => {
                return [...prevState, Math.round(Math.random() * 10 + 1)]
            })
        }, 2000)
        return () => clearInterval(interval)
    },[])



    function addNum () {
        setCount((prevState) => {
            return [...prevState, Math.random()]
        })
    }



    return (
        <ul>
            <button onClick={addNum}>Add count</button>
            {
                count.map((item, idx) => (
                    <li key={idx}>
                        {item}
                    </li>
                ))
            }
        </ul>
    );
};

export default UseEffectMount;
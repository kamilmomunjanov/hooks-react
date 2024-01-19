import React, {useEffect, useState} from 'react';


const UseEffect = () => {
    const [count, setCount] = useState(1)

    // useEffect(()=>{
    //     console.log("Render")
    //     const interval = setInterval(() => {
    //         setCount((prevState) => prevState + 1)
    //         console.log("interval")
    //     }, 3000)
    //     return () => clearInterval(interval)
    // },[])


    useEffect(() => {
        console.log("Update")
    },[count])

    return (
        <div>
            <button onClick={() => setCount(prevState => prevState + 1)}>Welcome</button>
            <p>Count: {count}</p>
        </div>
    );
};

export default UseEffect;
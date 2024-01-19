import React, {useState, useEffect} from "react";


function App() {
    const [type, setType] = useState("users")
    const [data, setData] = useState([])
    const [posts, setPosts] = useState({
        x: 0,
        y: 0
    })


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))

        return () => console.log("ComponentDidUnmount")
    },[type])

    useEffect(() => {
        console.log("componentDidMount")

        const handleMouseMove = (event) => {
            setPosts({
                x: event.clientX,
                y: event.clientY
            })
        }

        window.addEventListener("mousemove", handleMouseMove)


        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    },[])


    return (
        <div>
            <h1>Ресурс: {type}</h1>

            <button onClick={() => setType("users")}>Users</button>
            <button onClick={() => setType("todos")}>Todo</button>
            <button onClick={() => setType("posts")}>Posts</button>

            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(posts, null, 2)}</pre>
        </div>
    );
}

export default App;


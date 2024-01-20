import React, {useState, useContext, useEffect, useRef, useMemo, useCallback} from "react";
import {AlertProvider, useAlert} from "./AlertContext";


const Main = () => {

    const {show} = useAlert()
    return (
        <>
            <h1>Hello context</h1>
            <button onClick={() => show("This is text from Main.js")}>Show alert</button>
        </>
    )
}

const Alert = () => {
    const alert = useAlert()

    if (!alert.visible) return null

    return (
        <div onClick={alert.hide}>
            {alert.text}
        </div>
    )
}

function App() {

    return (
        <AlertProvider>
            <div>
                <Alert/>
                <Main/>
            </div>
        </AlertProvider>
    );
}

export default App;


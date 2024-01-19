import React, {useState, useContext, useEffect, useRef, useMemo, useCallback} from "react";
import {AlertProvider, useAlert} from "./AlertContext";


const Main = () => {

    const {toggle} = useAlert()
    return (
        <>
            <h1>Hello context</h1>
            <button onClick={toggle}>Show alert</button>
        </>
    )
}

const Alert = () => {
    const alert = useAlert()

    if (!alert.visible) return null

    return (
        <div onClick={alert.toggle}>
            This is very need message
        </div>
    )
}

function App() {

    return (
        <AlertProvider>
            <div>
                <Alert/>
                <Main toggle={() => {}}/>
            </div>
        </AlertProvider>
    );
}

export default App;


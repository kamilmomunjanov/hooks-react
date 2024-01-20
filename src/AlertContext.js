import React,{useState, useContext, useReducer} from "react";


const AlertContext = React.createContext()


export const useAlert = () => {
    return useContext(AlertContext)
}

const SHOW_ALERT = "show"
const HIDE_ALERT = "hide"

const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, visible: true, text: action.text}
        case HIDE_ALERT:
            return {...state, visible: false}
        default: return state
    }
}


export const AlertProvider = ({children}) => {
    // const [alert, setAlert] = useState(false)
    // const toggle = () => setAlert(prevState => !prevState)

    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ""
    })

    const show = (text) => {
        dispatch( {type: SHOW_ALERT, text} )
        console.log("Bye")
    }
    const hide = () => {
        dispatch( {type: HIDE_ALERT} )
        console.log("Hi")
    }

    const contextValue = {
        visible: state.visible,
        hide,
        show,
        text: state.text

    };

    return (
        <AlertContext.Provider value={contextValue}>
            {children}
        </AlertContext.Provider>
    )
}
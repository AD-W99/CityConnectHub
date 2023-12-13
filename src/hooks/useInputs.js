import { useState } from "react";

export const useInputs = ({ initVals = "" }) => {
    const [inputs, setInputs] = useState(initVals)

    const handleInputChange = (event) => {
        console.log("event:", event)
        try {
            const { value } = event?.target
    
            if ( !value) return
    
            setInputs(value)
        } catch (error) {
            console.error('Input could not be set:', error.message)
        }
    }

    return { inputs, handleInputChange }
}
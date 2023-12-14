import { InputText } from "primereact/inputtext";
import { useInputs } from "../hooks/useInputs";

export const Searchbar = ({ floatLabel = "Label" }) => {
    const { inputs: searchbarInput, handleInputChange: handleSearchbarChange } = useInputs({ initVals: "" })
    
    return (
        <span className="p-float-label">
            <InputText id={`${floatLabel}`} value={searchbarInput} onChange={handleSearchbarChange} />
            <label htmlFor={`${floatLabel}`}>{`${floatLabel}`}</label>
        </span>
    )
}   
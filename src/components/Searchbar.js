import { InputText } from "primereact/inputtext";
import { useInputs } from "../hooks/useInputs";

export const Searchbar = ({ floatLabel = "Label", icon = "pi pi-search" }) => {
    const { inputs: searchbarInput, handleInputChange: handleSearchbarChange } = useInputs({ initVals: "" })
    
    return (
        <span className="p-float-label p-input-icon-right">
            <i className={`${icon}`} />
            <InputText id={`${floatLabel}`} value={searchbarInput} onChange={handleSearchbarChange} />
            <label htmlFor={`${floatLabel}`}>{`${floatLabel}`}</label>
        </span>
    )
}   
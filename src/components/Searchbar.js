import { InputText } from "primereact/inputtext";
import { useInputs } from "../hooks/useInputs";

export const Searchbar = () => {
    const { inputs: searchbarInput, handleInputChange: handleSearchbarChange } = useInputs({ initVals: "" })
    
    return (
        <InputText value={searchbarInput} onChange={handleSearchbarChange} />
    )
}   
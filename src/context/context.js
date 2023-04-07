import { createContext, useState } from "react";

const context = createContext();




const AppContext = ({children})=>{
    const [nameInput, setNameInput] = useState("");
    const [NumberInput, setNumberInput] = useState("");
    const [tableData, setTableData] = useState([]);
    const [id, setId] = useState(0);

    const [searchVal, setSearchVal] = useState("");
    
    let createContactfunc = (nameIn,phIn)=>{
        let currCont = {
            id: id,
            name: nameIn,
            num: phIn
        }
        setId(id+1)

        setTableData([...tableData, currCont])
    }
    
   return (
    <context.Provider value={{nameInput,setNameInput , NumberInput, setNumberInput, createContactfunc, tableData, setTableData, searchVal,setSearchVal }}>
        {children}
    </context.Provider>
)}

export default context;
export {AppContext};
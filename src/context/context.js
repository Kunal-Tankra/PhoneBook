import { createContext, useEffect, useState } from "react";

const context = createContext();




const AppContext = ({children})=>{
    const [nameInput, setNameInput] = useState("");
    const [NumberInput, setNumberInput] = useState("");
    const [tableData, setTableData] = useState([]);
    const [id, setId] = useState(0);

    const [searchVal, setSearchVal] = useState("");
    const [showAlert, setShowAlert] = useState("");
    
    useEffect(() => {
        if(window.localStorage.getItem("id") === null){
            window.localStorage.setItem("id", 0)
        }
        else{
            (async()=>{
                let localId = await JSON.parse( localStorage.getItem("id"))
                setId(localId);
            })()
        }
    }, []);

    useEffect(() => {
        JSON.stringify(localStorage.setItem("id", id))
    }, [id]);

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
    <context.Provider value={{nameInput,setNameInput , NumberInput, setNumberInput, createContactfunc, tableData, setTableData, searchVal,setSearchVal, showAlert, setShowAlert }}>
        {children}
    </context.Provider>
)}

export default context;
export {AppContext};
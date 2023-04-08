import React, { useContext, useState } from 'react'
import './ContactForm.css'
import context from '../context/context'

const ContactForm = ({ display, setDisplay }) => {
    let { setNumberInput, setNameInput, nameInput, NumberInput,createContactfunc, tableData, setShowAlert } = useContext(context);

    const [disableBtn, setDisableBtn] = useState('disable');



    const handleCreate = () => {
        
        let warning = false
        
        for (const data of tableData) {
            if(data.name == nameInput || data.num == NumberInput){
                warning = true;
                break;
            }
            
        }
        
        if(warning){
            setShowAlert("showAlert")
            setTimeout(() => {
                setShowAlert("")
            }, 6000);
        }
        else{
            setDisplay("none")

            createContactfunc(nameInput, NumberInput)
        }
    }



    const createBtnDisablity = () => {
        if (nameInput.length > 0 && NumberInput.length > 0) {
            setTimeout(() => {

                setDisableBtn('')
            },);
            return false;
        }

        setTimeout(() => {

            setDisableBtn("disable")
        },);
        return true;

    }





    return (
        <>
            <div id='contactForm' style={{ display: display }}>
                <h2>Create a new Contact</h2>
                <div id="inputs">

                    <label htmlFor="nameInput">Name</label>
                    <input type="text" onChange={(e) => setNameInput(e.target.value)} value={nameInput} placeholder='Andy' />

                    <label htmlFor="phInput">Phone Number</label>
                    <input type="number" onChange={(e) => setNumberInput(e.target.value)} value={NumberInput} placeholder='000-000-0000' />

                    <div id='buttons' className={disableBtn}>

                        <button onClick={handleCreate} id='createBtn' disabled={createBtnDisablity()}>Create</button>
                        <button onClick={() =>setDisplay("none")}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm

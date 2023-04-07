import React, { useContext, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import './CreateContact.css'
import ContactForm from './ContactForm';
import context from '../context/context';

const CreateContact = () => {
  const [display, setDisplay] = useState("none");
  let {setNameInput,setNumberInput} = useContext(context);

  const handleClickCreateContact = ()=>{
    display==="none"? setDisplay("block"): setDisplay("none")
    setNameInput("")
    setNumberInput("")
  }

  return (
    <>
      <button onClick={handleClickCreateContact} id='createContact'>
        <AddIcon />
        <h3><strong>Create Contact</strong></h3>
      </button>

      {/* form for add contacts */}
      <ContactForm display={display} setDisplay={setDisplay}/>
    </>
  )
}

export default CreateContact

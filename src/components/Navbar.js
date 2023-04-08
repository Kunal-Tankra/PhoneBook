import React, { useContext } from 'react'
import ContactsIcon from '@mui/icons-material/Contacts';
import SearchBox from './SearchBox';
import CreateContact from './CreateContact';
import './Navbar.css'
import { Alert } from '@mui/material';
import context from '../context/context';

const Navbar = () => {

  const {showAlert} = useContext(context)

  return (
    <div id='navbar'>
      <Alert id='alert' className={showAlert} severity="warning">Name or Phone Number can't be same! Please Check before Submit.</Alert>
      <div id='icon_name'>
        <ContactsIcon id='contactIcon' />
        <h3>Address Book Manager</h3>
      </div>

      <SearchBox />
      <CreateContact />
    </div>
  )
}

export default Navbar

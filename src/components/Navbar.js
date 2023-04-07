import React from 'react'
import ContactsIcon from '@mui/icons-material/Contacts';
import SearchBox from './SearchBox';
import CreateContact from './CreateContact';
import './Navbar.css'

const Navbar = () => {
  return (
    <div id='navbar'>
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

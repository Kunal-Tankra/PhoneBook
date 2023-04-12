import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css'
import ClearIcon from '@mui/icons-material/Clear';
import context from '../context/context';

const SearchBox = () => {
  const [search, setSearch] = useState(true);
  const { searchVal, setSearchVal} = useContext(context);


  

  const handleCross = ()=>{
    console.log("sfd")
    setSearchVal("")
    setSearch(true)
  }

  return (
    <div id='searchBox'>
      {search? <SearchIcon id='searchIcon'/> : <ClearIcon onClick={handleCross} id='crossIcon'/>}

      <input value={searchVal}  onChange={e=>setSearchVal(e.target.value)} onClick={()=>setSearch(false)} type="text" placeholder='Search for name or number' />
    </div>
  )
}

export default SearchBox

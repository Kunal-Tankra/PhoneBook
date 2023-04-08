import React, { useContext, useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Table.css'
import { Avatar } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import context from '../context/context';

const Table = () => {

  const [enabledId, setEnabledId] = useState(-1);
  const [localStorage, setLocalStorage] = useState([]);
  const [nameEdit, setNameEdit] = useState("");
  const [numEdit, setNumEdit] = useState("");
  let { tableData, setTableData, searchVal, nameInput, NumberInput, setShowAlert } = useContext(context);


  useEffect(() => {
    if(window.localStorage.getItem("contacts") === null){
      window.localStorage.setItem("contacts", []);
    }
    else{
      (async()=>{
        let data = await JSON.parse(window.localStorage.getItem("contacts"))
        setTableData(data)
      })()
    }
  }, []);


  useEffect(() => {

    let currData = tableData

    currData.sort((a, b) => {
      let first = a.name.toUpperCase();
      let sec = b.name.toUpperCase();

      if (first < sec) {
        return -1
      }
      else if (first > sec) {
        return 1;
      }
      else {
        return 0;
      }
    })

    setTableData(currData)
    setLocalStorage(currData)

    window.localStorage.setItem("contacts", JSON.stringify( tableData))

  }, [tableData]);

  useEffect(() => {
    setLocalStorage(tableData.filter(contact => {

      if (contact.name.includes(searchVal) || contact.num.includes(searchVal)) {
        return true;
      }
      else {
        return false
      }

    }))
  }, [searchVal]);

  const handleDelete = (data) => {
    let removedData = tableData.filter((obj => (obj.id !== data.id)))
    setLocalStorage(removedData)
    setTableData(removedData)
  }

  const handleSaveBtn = (id) => {
    setEnabledId(-1)
    
    let warning = false

    for (const data of tableData) {
      if (data.name === nameInput || data.num === NumberInput) {
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

    setTableData(tableData.map(obj => {
      if (obj.id === id) {
        return {
          id: obj.id,
          name: nameEdit,
          num: numEdit
        }
      }
      else {
        return obj
      }
    }))
  }
  }

  const handleEdit = (data) => {
    setEnabledId(data.id)
    setNumEdit(data.num)
    setNameEdit(data.name)
  }

  return (
    <>
      <table id='table'>
        <thead>
          <tr>
            <th>
              <h3>

                Name
              </h3>
            </th>
            <th>
              <h3>

                Phone Number
              </h3>
            </th>
          </tr>
        </thead>

        <tbody >
          {localStorage.map(data => (
            <tr key={data.id}>
              <td className='name'>
                <Avatar>{data.name[0]}</Avatar>
                <input type="text" value={data.id === enabledId ? nameEdit : data.name} onChange={(e) => setNameEdit(e.target.value)} disabled={enabledId === data.id ? false : true} />

              </td>
              <td >
                <div className='number'>

                  <input type='number' value={data.id === enabledId ? numEdit : data.num} onChange={(e) => setNumEdit(e.target.value)} disabled={enabledId === data.id ? false : true} />

                  <div className="icons">
                    {data.id === enabledId ? <SaveIcon onClick={() => handleSaveBtn(data.id)} className='saveIcon' /> : <EditIcon onClick={() => handleEdit(data)} className='editIcon' />}

                    <DeleteIcon onClick={() => { handleDelete(data) }} className='dltIcon' />
                  </div>
                </div>
              </td>


            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table

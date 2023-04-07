import React, { useContext, useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Table.css'
import { Avatar } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import context from '../context/context';

const Table = () => {

  const [disableId, setDisableId] = useState(-1);
  const [localStorage, setLocalStorage] = useState([]);
  let { tableData, setTableData , searchVal} = useContext(context);

  


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



  }, [tableData]);

  useEffect(() => {
    setLocalStorage(tableData.filter(contact=>{
      
        if(contact.name.includes(searchVal) || contact.num.includes(searchVal)){
          console.log(searchVal)
          return true;
        }
        else{
          return false
        }
      
    }))
  }, [searchVal]);

  const handleDelete = (data) => {
    let removedData = tableData.filter((obj => (obj.id !== data.id)))
    setLocalStorage(removedData)
    setTableData(removedData)
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

        <tbody>
          {localStorage.map(data => (
            <tr key={data.id}>
              <td className='name'>
                <Avatar>{data.name[0]}</Avatar>
                <input type="text" placeholder={data.name} disabled={disableId === data.id ? false : true} />

              </td>
              <td >
                <div className='number'>

                  <input type='number' placeholder={data.num} onChange={(e)=>e.target.value}  disabled={disableId === data.id ? false : true} />

                  <div className="icons">
                    {data.id === disableId ? <SaveIcon onClick={() => setDisableId(-1)} className='saveIcon' /> : <EditIcon onClick={() => setDisableId(data.id)} className='editIcon' />}

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

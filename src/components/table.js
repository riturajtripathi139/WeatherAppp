import './table.css'
// import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";




const Table = ({ data, column, searchTerm }) => {
  const navigate = useNavigate();
  return (
    <table>
      <thead>
        <tr>
          {column.map((item, index) => <TableHeadItem item={item} />)}
        </tr>
      </thead>
      <tbody style={{backgroundColor:'#0d0c1d'}}>
        {data && data.filter((item)=>{
            const search = searchTerm?.toLowerCase();
            const name = item.name.toLowerCase();
            return name.includes(search);
        }).map((item, index) => <TableRow item={item} column={column} navigate={navigate} />)}
      </tbody>
    </table>
  )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableRow = ({ item, column,navigate }) => ( 

  <tr>
    {column.map((columnItem, index) => {
      if(columnItem.value === 'name'){
          return (
            <td key={index}>
            <button style={{backgroundColor:'inherit',border:'none',color:'white',cursor:'pointer'}}  onClick={(e)=> navigate(`/weather/${e.target.innerHTML}`)} >
             <Link to={`/weather/${item[columnItem.value]}`}> {item[columnItem.value]} </Link>
            </button>
            </td>
          )
      }
      else{
        return <td>{item[`${columnItem.value}`]}</td>
      }
    })}
  </tr>
     
)



export default Table
import React from 'react'
import './Table.css'
import Moment from 'react-moment';
const Table = ({data}) => {

  data.sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.date) - new Date(a.date);
});
  return (
    <>
    <div className="table__wrapper">

<table className="table">
<tr>
  <th>ID</th>
  <th>TITLE</th>
  <th>CATEGORY</th>
    <th>HOSTNAME</th>
    <th>PUBLISHER</th>
    <th>TIMESTAMP</th>
    <th>URL</th>
</tr>

{
  data.map((item,index)=>(

    <tr>
    <td>{item.ID}</td>
    <td>{item.TITLE}</td>
    <td>{item.CATEGORY}</td>
    <td>{item.HOSTNAME}</td>
    <td>{item.PUBLISHER}</td>
    <td><Moment format="DD/MM/YYYY">{item.TIMESTAMP}</Moment></td>
    <td>{item.URL}</td>
    </tr>


  ))
}



</table>

    </div>

    </>
  )
}

export default Table

import React,{useEffect, useState} from 'react'
import {Nav,Table} from '../../components'
import './Rootpage.css'

const Rootpage = ({publisherName,newsData}) => {
  const [ data , setData] = useState([])

  useEffect(()=>{
    let newArray = []

    for(let i=0;i<newsData.length;i++){


      if(publisherName === newsData[i].PUBLISHER){
        newArray.push(newsData[i])
      }
    }

    setData(newArray)
  },[publisherName,newsData])

  
  return (

    <div className="root__wrapper">
    <Nav/>
    {data.length >0 && <Table data={data}/>}
    </div>
  )
}

export default Rootpage

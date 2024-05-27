import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Details = () => {

    const {id} = useParams();
    const [info, setInfo] = useState({})
    
    useEffect(() => {
      axios.get("http://localhost:8000/users/" +id)
      .then(res=>setInfo(res.data))
    }, [id])
    

  return (
    <>
        {info.name}
        {info.photo}
    </>
  )
}

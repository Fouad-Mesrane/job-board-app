import React, { useEffect } from 'react'
import axios from 'axios'
const JobList = () => {

    useEffect(()=> {
        axios.get('http://4000')
    }, [])
  return (
    <div>

    </div>
  )
}

export default JobList
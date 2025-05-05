import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
//   const [data, setData] = useState({}) // use an object instead of array
//   useEffect(() => {
//     fetch('https://api.github.com/users/mdtohidreza')
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         setData(data)
//       })
//   }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.name} 
      <img src="{data.profile}" alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader= async()=>{
     const response = await fetch('https://api.github.com/users/mdtohidreza')
     return response.json()
}

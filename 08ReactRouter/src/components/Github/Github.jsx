import React, { useEffect, useState } from 'react'
import  {useLoaderData} from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/manisharma-cs21")
    //     .then(Response=>Response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='bg-gray-600 text-3xl text-center text-white p-4 m-3  '>Github Followers: {data.followers} and Public Repo is: {data.public_repos}
    <img className='text-center rounded-2xl' src={data.avatar_url} alt="Git Picture" width={300} />
     <div className='text-left m-3 text-4xl'>{data.name}</div>
    </div>
  )
}

export default Github

export const GithubInfoLoader=async()=>{
    const response=await fetch("https://api.github.com/users/manisharma-cs21")
    return response.json();

}
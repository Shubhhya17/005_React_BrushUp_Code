import axios from 'axios'
import React, { useEffect } from 'react'

const Practice = () => {

    const [posts, setPosts] = useState([]);
const APICall = async()=>{
    try{
       const res=  await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        )
        setPosts(res.data)
    }catch(error){
        console.log(error)
    }
}

useEffect(()=>{
    APICall()
},[])

  return (
  <>
 {posts.map((item)=>{
    <div key={item.id}>
        <h4>{title.body}</h4>
        <h5>{title.para}</h5>

    </div>
 })}
  </>
  )
}

export default Practice
import React, { useState } from 'react'

const DerivedState = () => {
const [users,setUsers] =useState([]);
const [user,setUser] = useState('');
const handleAddUsers= ()=>{
    setUsers([...users,user])
}

const total = users.length;
const last = users[users.length-1];
const unique = [...new Set(users)].length
    return (
    <>
    <div>Hello</div>
    <h1>Total User: {total} </h1>
    <h2>last User : {last} </h2>
    <h3>Unique Total User: {unique}</h3>

    <input
  type="text"
  value={user} // controlled input
  onChange={(event) => setUser(event.target.value)}
  placeholder="Add new User"
/>

    <button onClick={handleAddUsers}>Add Users</button>
    {
        users.map((item,index)=>(
            <h5 key={index}>{item}</h5>
        ))
    }
    
    </>
  )
}

export default DerivedState
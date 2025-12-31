import React from 'react'

export async function getServerSideProps(){
    

const res = await fetch("https://dummy/api") //APi 
const rep = await res.json()//converting object to json 
return{props: {rep}}//server side props
}
const CountNumber = ({rep}) => {

  res ==="200" ? "Ok " : "Not Ok "
  return (
  <>
<p>{rep}</p> {/* desplaying the Props */}
 <p></p>
  </>
  )
}

export default CountNumber
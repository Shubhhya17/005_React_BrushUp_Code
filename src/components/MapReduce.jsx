import React from 'react'

const MapReduce = () => {
    const numbers = [1, 2, 3, 4, 5, 6]

    const evenNumber = numbers.filter(num => num % 2 === 0)
    console.log(evenNumber)

    const doublenumber = numbers.map(num => num * 2)
    console.log(doublenumber)

    const sum = numbers.reduce((total, num)=>{
        return total + num
    },0)
    console.log(sum)

    return (
        <>

        </>
    )
}

export default MapReduce
import React,{useState} from 'react'
import TableRow from './TableRow'
export default function Table(){
    const [num,updateNum]=useState(2);
     function nextTable(){
        updateNum(num+1)
     }   

    return(
        <div className='p-5  bg-amber-500 rounded-md mt-2 ml-2'>
            <TableRow num={num} idx={1}/>
            <TableRow num={num} idx={2}/>
            <TableRow num={num} idx={3}/>
            <TableRow num={num} idx={4}/>
            <TableRow num={num} idx={5}/>
            <TableRow num={num} idx={6}/>
            <TableRow num={num} idx={7}/>
            <TableRow num={num} idx={8}/>
            <button className='py-1 px-3 text-white bg-indigo-600 rounded-md mt-2' onClick={nextTable}>Next</button>
        </div>
    )
}
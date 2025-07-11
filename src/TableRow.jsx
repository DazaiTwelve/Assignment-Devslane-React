import React from 'react'

export default function TableRow({num,idx}){
    return (
        <div className='text-indigo-600 text-xl font-medium'>
            {num} x {idx} ={num*idx}
        </div>
    )
}
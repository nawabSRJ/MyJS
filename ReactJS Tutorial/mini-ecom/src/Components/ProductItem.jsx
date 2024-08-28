import React from 'react'
export default function ProductItem({pdata}) {
    return (
        <div className='shadow-lg mt-10 pb-5'>
            <img src={pdata.thumbnail} className='w-[100%] h-[250px]'/>
            <h4 className='pl-3 pt-2 text-xl'>{pdata.title}</h4>
            <b className='pl-3'> &#x20b9;{pdata.price}</b>
        </div>
    )
}

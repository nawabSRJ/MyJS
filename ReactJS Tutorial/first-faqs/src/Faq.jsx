import React, { useState } from 'react'
import { questions } from './Data/ques';

export default function FaqComp() {
    let [currentId , setCurrentId] = useState(questions[0].id);

    let items = questions.map((itemsData , i) =>{
        let itemDetails = {
            itemsData,
            currentId,
            setCurrentId
        }
        return (
            <FaqItems itemDetails = {itemDetails} key={i} />
          )
    })
  return(
    <div>
    <div className='faqOuter w-[1320px] mx-auto'>
        {items}          
    </div>
    </div>
  )
}

function FaqItems({itemDetails}){
    return(
        <div className='faqItems border border-red-600 my-4'>
                <h2 onClick={()=>itemDetails.setCurrentId(itemDetails.itemsData.id)} className='text-2xl text-black '>{itemDetails.itemsData.question}</h2>
                <p className={`text-left p-1 text-[18px]} ${itemDetails.currentId === itemDetails.itemsData.id ? 'showFaq' : ''}`}>{itemDetails.itemsData.answer}</p>
        </div>
    );
}
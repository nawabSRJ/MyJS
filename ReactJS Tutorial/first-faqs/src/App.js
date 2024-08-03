import logo from './logo.svg';
import './App.css';
import { questions } from './Data/ques';
import { tabsData } from './Data/tabsData.jsx';
import { useState } from 'react';
import FaqComp from './Faq.jsx';
import { tab } from '@testing-library/user-event/dist/tab.js';

function App() {
  let [showAns, setShowAns] = useState(questions[0].id); // by default 0th question will show
  let [tabData, setTabData] = useState(tabsData[0].content);
  return (
    <div className="App">
      <div><h1 className='text-3xl text-center my-4 text-blue-700'>Frequently Asked Questions</h1>
      </div>
      <div className='faqOuter w-[1320px] mx-auto'>
        {
          questions.map((faqItems, i) => {
            return (
              <div className='faqItems border border-red-600 my-4'>
                <h2 onClick={() => setShowAns(faqItems.id)} className='text-2xl text-black '>{faqItems.question}</h2>
                <p className={`text-left p-1 text-[18px] ${showAns === faqItems.id ? 'showFaq' : ''}`}>{faqItems.answer}</p>
              </div>
            )
          })

        }
      </div>
      <br />      <br />      <br />
      <hr />
      {/* Making FAQs using props drilling */}

      <FaqComp />

      <br />      <br />      <br />
      <hr />

      <h1 className='text-4xl text-center text-blue-700'>Tabbing Concept</h1>
      <br />
      <div className='tab-btns w-[90%] h-[50px] bg-green-500 flex flex-row items-center justify-start mx-5 my-5'>
        <button className='px-4 py-2 text-2xl bg-purple-700 text-white ml-10'>Tab1</button>
        <button className='px-4 py-2 text-2xl bg-purple-700 text-white ml-10'>Tab2</button>
        <button className='px-4 py-2 text-2xl bg-purple-700 text-white ml-10'>Tab3</button>
      </div>
      {
        tabsData.map((tabContent, i) => {
          return (
            <div className='tabArea text-left px-7 py-4 '>
              <p>{tabContent.content}</p>
            </div>
          )
        })
      }

    </div>
  );
}

export default App;

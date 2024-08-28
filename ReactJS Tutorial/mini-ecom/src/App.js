import React, { useEffect, useState } from 'react';
import Category from './Components/Category';
import ProductItem from './Components/ProductItem';
import loadVid from './assets/loadingVideo.mp4'
import axios from 'axios';

function App() {
  let [finalCategory, setFinalCategory] = useState([]);
  let [finalPro, setFinalPro] = useState([]);
  let [catName, setCatName] = useState('');

  // axios has a 'data' key in-built which gets the data returned by the api 
  let getCategory = () => {
    axios
      .get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalres) => {
        setFinalCategory(finalres);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  let getProducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        setFinalPro(finalRes.products);
      })
  }


  useEffect(() => {
    getCategory();
    getProducts();
  }, []);   // called when the page is refreshed


  useEffect(() => {
    if (catName !== '') {
      axios.get(`${catName.url}`)
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        setFinalPro(finalRes.products);
      })
      console.log(catName)
    }
  }, [catName]) 
  // as soon as the catName is changed by the onClick handled in the Category.jsx then this useEffect is rendered


  let Pitems = finalPro.map((products, index) => {
    return (
      <ProductItem key={index} pdata={products} />
    )
  })
  return (
    <div>
      <div className='py-[40px]'>
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='text-center text-5xl font-bold mb-6'>Our Products</h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div className='bg-white-400'>
              <Category finalCategory={finalCategory} setCatName={setCatName} />
            </div>
            <div>
              <div className='grid grid-cols-3 gap-4'>
                {
                  finalPro.length >= 1 ? Pitems : <img className='ml-10' src='https://i.gifer.com/ZKZg.gif' />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

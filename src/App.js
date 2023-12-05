import React from 'react'
import xLogo1 from './asset/i2.png';
import img2 from './asset/13.png';
import logo from './asset/c2.png';
import { useState,useEffect } from 'react';

const App = () => {
  const [Data,setData] = useState({content:'Loading...',author:'Loading...'})


  const callApi= async()=>{
      setData({content:'Loading...',author:'Loading...'})
     const url="https://api.quotable.io/random?tags=technology";
			let contain= await fetch(url);
			let data=await contain.json();
      setData({content:data.content,author:data.author})
		}

    const twitter = ()=>{
      window.open(`https://twitter.com/intent/tweet?text=${Data.content} - ${Data.author}`)
    }

    useEffect(()=>{
      callApi();
    },[])

  return (
    <>
   <main>
    <h1><b>Random Quote Generator</b></h1>

    <h2 className='quote'>" 
   { Data.content} "
    </h2>

    <h3 className='author'>-
   {Data.author}
    </h3>
    <div className="line"></div>
    <footer>
      <button onClick={callApi}>Generate <img src={img2} alt="genrate" /> </button>
      <img src={xLogo1} alt="twitter logo" onClick={twitter} />
    </footer>

   </main>
   <div className="credit" onClick={()=>{ window.open(`https://github.com/ArpanVala`)}}>
    <img src={logo} alt="logo" />
    <h1>Arpan Vala</h1>
   </div>
   </>
  )
}

export default App

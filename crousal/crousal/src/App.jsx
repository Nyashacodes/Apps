import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const dataimage  = [
     "https://vite.dev",
     "https://vite.dev",
     "https://react.dev",
     "https://vite.dev",
     "https://react.dev",
     "https://vite.dev",
     "https://react.dev",
     "https://vite.dev",
     "https://react.dev",
     "https://vite.dev",
     "https://react.dev"
  ]
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const threeimages = dataimage.slice(startIndex,startIndex+visibleCount);

  const handleNext=()=>{
    console.log("nextclicked",startIndex);   
    if(startIndex+visibleCount < dataimage.length)
    setStartIndex(startIndex+1);
    
    console.log("nextclickedafter",startIndex);

  }
  const handlePrev=()=>{
    if(startIndex>0) {

    setStartIndex(startIndex-1);
    }

  }

  return (
    <>
      <div className='outer' >
           <div className="prev"><button onClick={handlePrev}>Prev</button></div>

        <div className='horizontal-crousal'>
       {threeimages.map((image, index) => (
            <a key={startIndex+index} href={image} target="_blank" rel="noreferrer">
              <img
                src={image.includes("react") ? reactLogo : viteLogo}
                className="logo"
                alt="Logo"
              />
            </a>
          ))}
        </div>
        <div className="next"><button onClick={handleNext}>Next</button></div>
       
      </div>      
    </>
  )
}

export default App

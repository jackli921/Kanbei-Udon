import React from 'react'


export default function ScrollToTop(){


    function handleClick(){
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
        
    return (
      <button className="scroll-to-top" onClick={()=>handleClick()}>
        <img src="/images/up-arrow.svg" alt="" />
      </button>
    );

}
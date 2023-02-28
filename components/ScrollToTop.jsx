import React from 'react'


export default function ScrollToTop(){
    const handleClick = ()=>{
        window.ScrollTo({top:0, behavior: 'smooth'})
    }

    return (
        <button className='scroll-to-top' onClick={handleClik}>
            <img src="/images/up-arrow.svg" alt="" />
        </button>
    )
}
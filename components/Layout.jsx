import React from  'react'
import {Outlet} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'


export default function Layout(){
    return (
      <>
        <div>
          <Header />
          <Outlet />
        </div>
        <Footer />
        <ScrollToTop />
      </>
    );
}
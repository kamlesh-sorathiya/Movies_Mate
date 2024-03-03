import React from "react";
import './App.css'
import AllRoutes from './routes/allRoutes'
import Header from './components/header'
import Footer from './components/footer'

function App() {


  return (
    <>
      <Header />
      <div className='dark:bg-slate-800'>
        <AllRoutes />
      </div>
      <Footer />
    </>
  )
}

export default App

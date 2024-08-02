import React from 'react'
import Header from './Header'
import Footer from './Footer'

const layout = (props) => {
  return (
    <div>
      <Header/>
      <main style={{minHeight:'70vh'}}>{props.children}</main>
      <Footer/>
    </div>
  )
}

export default layout

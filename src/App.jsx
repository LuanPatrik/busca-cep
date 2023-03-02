import { useState } from 'react'
import './App.css'

import Header from './components/header/index.jsx'
import Footer from './components/footer/index.jsx'
import Icon from './assets/img/logo.png'

function App() {
  return (
    <div className="container">
      <Header />

      <main className='main'>
        <form className='form'>
          <div className='icon'>
            <img src={Icon} alt="Logo" width='30%'/>
          </div>
          <div className='field'> 
            <span>CEP</span>
            <input type="text" name='cep' className='input' placeholder='Digite o CEP'/>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  )
}

export default App

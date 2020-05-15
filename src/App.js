import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Appointment } from './components/Appointment'


function App() {
  return (
    <div className='container'>
      <Header />
      <Appointment />
    </div>
  );
}

export default App;

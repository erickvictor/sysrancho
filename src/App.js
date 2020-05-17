import React from 'react'
import './App.css'
import { Header } from './components/Header'
// import { Appointment } from './components/Appointment'
import { Appointment4 } from './components/Appointment4'
import { createStore, StateMachineProvider } from 'little-state-machine'

createStore({
  data: {}
})


function App() {
  return (
    <StateMachineProvider>
      <div className='container'>
        <Header />
        <Appointment4 />
      </div>
    </StateMachineProvider>
  );
}

export default App;

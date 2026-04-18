import React from 'react'
import Router from './Router/Router'
import { UserProvider } from './context/UserContext'
import { CareerProvider } from './context/CareerContext'

const App = () => {
  return (
    <UserProvider>
      <CareerProvider>
        <Router />
      </CareerProvider>
    </UserProvider>
  )
}

export default App
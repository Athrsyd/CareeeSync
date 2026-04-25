import React from 'react'
import Router from './Router/Router'
import { UserProvider } from './context/UserContext'
import { CareerProvider } from './context/CareerContext'
import { ProgressProvider } from './context/ProgressContext'

const App = () => {
  return (
    <CareerProvider>
      <UserProvider>
        <ProgressProvider>
          <Router />
        </ProgressProvider>
      </UserProvider>
    </CareerProvider>
  )
}

export default App
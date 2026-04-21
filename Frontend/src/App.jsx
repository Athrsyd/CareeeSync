import React from 'react'
import Router from './Router/Router'
import { UserProvider } from './context/UserContext'
import { CareerProvider } from './context/CareerContext'
import { ProgressProvider } from './context/ProgressContext'

const App = () => {
  return (
    <UserProvider>
      <CareerProvider>
        <ProgressProvider>
          <Router />
        </ProgressProvider>
      </CareerProvider>
    </UserProvider>
  )
}

export default App
import React from 'react'
import Router from './Router/Router'
import { UserProvider } from './context/UserContext'
import { CareerProvider } from './context/CareerContext'
import { ProgressProvider } from './context/ProgressContext'
import CurrentProjectProvider from './context/CurrentProjectContext'

const App = () => {
  return (
    <CurrentProjectProvider>
      <CareerProvider>
        <UserProvider>
          <ProgressProvider>
            <Router />
          </ProgressProvider>
        </UserProvider>
      </CareerProvider>
    </CurrentProjectProvider>
  )
}

export default App
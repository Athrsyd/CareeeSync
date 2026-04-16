import React from 'react'
import Router from './Router/Router'
import { UserProvider } from './context/UserContext'

const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  )
}

export default App
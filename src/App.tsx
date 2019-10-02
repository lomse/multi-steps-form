import * as React from 'react'
import AppProvider from './context/AppProvider'
import Presentation from './components/Main'

const App: React.FC = () => (
  <AppProvider>
    <Presentation />
  </AppProvider>
)

export default App

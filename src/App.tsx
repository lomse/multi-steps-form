import * as React from 'react'
import AppProvider from './components/AppProvider'
import Presentation from './components/presentation/Main'

const App: React.FC = () => (
  <AppProvider>
    <Presentation />
  </AppProvider>
)

export default App

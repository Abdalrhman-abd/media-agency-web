import React from 'react'
import LanguageDirection from "./locales/commponents/LanguageDirection"
import { AppRoutes } from './routes/AppRoutes'
const App = () => {
  return (
    <>
    <LanguageDirection/>
      <AppRoutes />
    </>
  )
}

export default App;

import React, { useEffect, useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import Themebtn from './component/Themebtn'
import ThemeChanger from './component/ThemeChanger'
import { ThemeProvider } from './context/Theme'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme =()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode)
  
  }, [themeMode])

  return (
    <>
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <Themebtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                <ThemeChanger/>
                  
              </div>
          </div>
      </div>
    </ThemeProvider>
    </>
  )
}

export default App

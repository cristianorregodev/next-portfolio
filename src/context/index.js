'use client'
import { createContext, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(false)
    const toggleTheme = () => {
        setTheme(!theme)
    }

    return (
        <GlobalContext.Provider value={{ theme, toggleTheme }}>{children}</GlobalContext.Provider>
    )
}

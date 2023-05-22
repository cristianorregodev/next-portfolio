'use client'
import useTheme from '@/hooks/useTheme'
import { GlobalContext } from '@/context'
import { Navbar } from '@/components/Navbar'

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    const [theme, toggleTheme] = useTheme()

    return (
        <html lang="en">
            <body className={theme ? 'dark' : 'light'}>
                <GlobalContext.Provider value={{ theme, toggleTheme }}>
                    <Navbar />
                    {children}
                </GlobalContext.Provider>
            </body>
        </html>
    )
}

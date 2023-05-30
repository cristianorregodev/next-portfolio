'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BiMoon, BiSun } from 'react-icons/bi'
import Switch from 'react-switch'

export const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const [checked, setChecked] = useState(false)
    const { theme, setTheme } = useTheme()

    const handleThemeChange = () => {
        if (theme === 'light') {
            setTheme('dark')
            setChecked(!checked)
        }
        if (theme === 'dark') {
            setTheme('light')
            setChecked(!checked)
        }
    }
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
        if (theme === 'dark') {
            setChecked(true)
        }
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <Switch
            onChange={handleThemeChange}
            checked={checked}
            offColor="#494646"
            onColor="#007D99"
            uncheckedIcon={
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        fontSize: 15,
                        color: 'white',
                        paddingRight: 2,
                    }}
                >
                    <BiMoon />
                </div>
            }
            checkedIcon={
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        fontSize: 15,
                        color: 'white',
                        paddingRight: 2,
                    }}
                >
                    <BiSun />
                </div>
            }
            uncheckedHandleIcon={
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        fontSize: 20,
                    }}
                >
                    <BiSun />
                </div>
            }
            checkedHandleIcon={
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        color: '#007D99',
                        fontSize: 18,
                    }}
                >
                    <BiMoon />
                </div>
            }
        />
    )
}

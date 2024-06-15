'use client'


import React from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'

const ToggleMood = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, [])
    if (!mounted) {
        return <Button variant='default' size='icon' disabled={true} ></Button>
    }

    const dark = theme === 'dark';

    return (
        <div>
            <Button
            
                variant='defualt'
                
                size='icon'
                onClick={() => setTheme(dark ? 'light' : 'dark')}>
                {dark ? <Sun /> : <Moon />}
            </Button>

        </div>
    )
}

export default ToggleMood
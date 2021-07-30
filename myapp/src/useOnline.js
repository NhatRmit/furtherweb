import { useState, useEffect } from 'react';

export default function useOnline (){
    const [online ,setOnline] = useState(navigator.onLine)
    
    useEffect(() => {
        window.addEventListener('online', function() {
            setOnline(true)
        })

        window.addEventListener('offline', function() {
            setOnline(false)
        })
    }, [])

    return online
}
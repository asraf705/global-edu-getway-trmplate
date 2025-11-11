'use client'

import { useEffect } from 'react'

export default function ChatWidget() {
  useEffect(() => {
    // Tawk.to placeholder script
    // Replace with your actual Tawk.to property ID
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID'
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    
    // Only add script if Tawk.to is configured
    // For now, we'll comment it out as a placeholder
    // document.head.appendChild(script)

    return () => {
      // Cleanup if needed
    }
  }, [])

  return null
}


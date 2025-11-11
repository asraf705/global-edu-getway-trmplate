'use client'

import { useState, useEffect } from 'react'

type Country = 'RU' | 'BD' | 'unknown'

interface LocationData {
  country: Country
  isLoading: boolean
}

export function useLocation(): LocationData {
  const [locationData, setLocationData] = useState<LocationData>({
    country: 'unknown',
    isLoading: true,
  })

  useEffect(() => {
    const detectLocation = async () => {
      try {
        // Using ipapi.co free API for IP geolocation
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()

        if (data.country_code) {
          const countryCode = data.country_code as string
          // Check if user is in Russia or Bangladesh
          if (countryCode === 'RU') {
            setLocationData({ country: 'RU', isLoading: false })
          } else if (countryCode === 'BD') {
            setLocationData({ country: 'BD', isLoading: false })
          } else {
            // Default to Russia address for other countries
            setLocationData({ country: 'unknown', isLoading: false })
          }
        } else {
          setLocationData({ country: 'unknown', isLoading: false })
        }
      } catch (error) {
        console.error('Error detecting location:', error)
        // Default to Russia address on error
        setLocationData({ country: 'unknown', isLoading: false })
      }
    }

    detectLocation()
  }, [])

  return locationData
}

// Address data
export const addresses = {
  russia: {
    full: 'Lukachova, Samara, Russia',
    city: 'Samara',
    country: 'Russia',
  },
  bangladesh: {
    full: '713, Ibrahimpur, North Kafrul, Dhaka-1206, Bangladesh',
    city: 'Dhaka',
    country: 'Bangladesh',
  },
}

// Get the address to display based on user's location
// If user is in Russia, show Bangladesh address
// If user is in Bangladesh, show Russia address
// Otherwise, show Russia address as default
export function getDisplayAddress(country: Country) {
  if (country === 'RU') {
    // User is in Russia, show Bangladesh address
    return addresses.bangladesh
  } else if (country === 'BD') {
    // User is in Bangladesh, show Russia address
    return addresses.russia
  } else {
    // Default to Russia address
    return addresses.russia
  }
}


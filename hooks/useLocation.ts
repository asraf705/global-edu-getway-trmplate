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
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90686.28664808045!2d50.14783532928807!3d53.21603998404287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41661f022c9c0ee5%3A0x98a0d7b16165dbca!2sLukachova%2011!5e1!3m2!1sen!2sbd!4v1762850460657!5m2!1sen!2sbd',
  },
  bangladesh: {
    full: '713, Ibrahimpur, North Kafrul, Dhaka-1206, Bangladesh',
    city: 'Dhaka',
    country: 'Bangladesh',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d541.3088712500295!2d90.3806177!3d23.7931478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7fe4bc513e9%3A0xf3bbf012e15f28cc!2s713%20North%20Kafrul!5e1!3m2!1sen!2sbd!4v1762850543790!5m2!1sen!2sbd',
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


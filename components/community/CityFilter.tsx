'use client'

import { useState, useEffect, useRef } from 'react'
import { MapPin, ChevronDown, X, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface City {
  id: number
  name: string
  region: string
  population: string
  universities: number
}

interface CityFilterProps {
  selectedCities: number[]
  onCitiesChange: (cityIds: number[]) => void
}

export default function CityFilter({
  selectedCities,
  onCitiesChange,
}: CityFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cities, setCities] = useState<City[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Fetch cities from API
    const fetchCities = async () => {
      try {
        const response = await fetch('/api/cities')
        const data = await response.json()
        if (data.success) {
          setCities(data.data)
        }
      } catch (error) {
        console.error('Error fetching cities:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCities()
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.region.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCityToggle = (id: number) => {
    if (selectedCities.includes(id)) {
      onCitiesChange(selectedCities.filter((cityId) => cityId !== id))
    } else {
      onCitiesChange([...selectedCities, id])
    }
  }

  const handleRemoveCity = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    onCitiesChange(selectedCities.filter((cityId) => cityId !== id))
  }

  const handleClearAll = () => {
    onCitiesChange([])
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Filter Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
          selectedCities.length > 0
            ? 'bg-primary-500 text-white hover:bg-primary-600'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <MapPin className="w-4 h-4" />
        <span>
          {selectedCities.length === 0
            ? 'All Cities'
            : `${selectedCities.length} Cit${selectedCities.length !== 1 ? 'ies' : 'y'}`}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 w-96 bg-white border-2 border-gray-200 rounded-lg shadow-lg max-h-96 overflow-hidden"
          >
            {/* Header */}
            <div className="p-3 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 text-sm">Filter by City</h3>
                {selectedCities.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="text-xs text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Clear all
                  </button>
                )}
              </div>
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search cities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>

            {/* Selected Cities */}
            {selectedCities.length > 0 && (
              <div className="p-3 border-b border-gray-200 bg-primary-50">
                <div className="flex flex-wrap gap-2">
                  {selectedCities.map((id) => {
                    const city = cities.find((c) => c.id === id)
                    if (!city) return null
                    return (
                      <span
                        key={id}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-primary-500 text-white rounded-md text-xs font-medium"
                      >
                        <span>{city.name}</span>
                        <button
                          type="button"
                          onClick={(e) => handleRemoveCity(id, e)}
                          className="hover:bg-primary-600 rounded-full p-0.5 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )
                  })}
                </div>
              </div>
            )}

            {/* City List */}
            <div className="overflow-y-auto max-h-64">
              {isLoading ? (
                <div className="p-4 text-center text-gray-500">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-500 mx-auto"></div>
                  <p className="mt-2 text-sm">Loading cities...</p>
                </div>
              ) : filteredCities.length === 0 ? (
                <div className="p-4 text-center text-gray-500 text-sm">
                  No cities found
                </div>
              ) : (
                <div className="p-2">
                  {filteredCities.map((city) => {
                    const isSelected = selectedCities.includes(city.id)
                    return (
                      <div
                        key={city.id}
                        onClick={() => handleCityToggle(city.id)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-primary-50 text-primary-700'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-2 flex-1">
                          <MapPin className="w-5 h-5 text-primary-600" />
                          <div className="flex-1">
                            <div className="font-medium text-sm">{city.name}</div>
                            <div className="text-xs text-gray-500">
                              {city.region} • {city.universities} universities
                            </div>
                          </div>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {selectedCities.length > 0 && (
              <div className="p-3 border-t border-gray-200 bg-gray-50">
                <p className="text-xs text-gray-600">
                  {selectedCities.length} cit{selectedCities.length !== 1 ? 'ies' : 'y'} selected
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


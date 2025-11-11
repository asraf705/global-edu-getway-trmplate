'use client'

import { useState, useEffect } from 'react'
import { Languages, ChevronDown, X, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

interface StudyMediumSelectorProps {
  selectedLanguage: string
  onLanguageChange: (languageCode: string) => void
  required?: boolean
}

export default function StudyMediumSelector({
  selectedLanguage,
  onLanguageChange,
  required = false,
}: StudyMediumSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [languages, setLanguages] = useState<Language[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch('/api/languages')
        const data = await response.json()
        if (data.success) {
          setLanguages(data.data)
        }
      } catch (error) {
        console.error('Error fetching languages:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLanguages()
  }, [])

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const selectedLang = languages.find((lang) => lang.code === selectedLanguage)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
          selectedLanguage ? 'bg-white' : 'bg-gray-50'
        }`}
      >
        <div className="flex items-center gap-2">
          <Languages className="w-4 h-4 text-gray-500" />
          {selectedLang ? (
            <span className="flex items-center gap-2">
              <span>{selectedLang.flag}</span>
              <span>{selectedLang.name}</span>
            </span>
          ) : (
            <span className="text-gray-500">Select study medium</span>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 mt-2 w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg max-h-64 overflow-hidden"
          >
            {/* Search Input */}
            <div className="p-3 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search languages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>

            {/* Language List */}
            <div className="overflow-y-auto max-h-48">
              {isLoading ? (
                <div className="p-4 text-center text-gray-500">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-500 mx-auto"></div>
                  <p className="mt-2 text-sm">Loading languages...</p>
                </div>
              ) : filteredLanguages.length === 0 ? (
                <div className="p-4 text-center text-gray-500 text-sm">
                  No languages found
                </div>
              ) : (
                <div className="p-2">
                  {filteredLanguages.map((lang) => {
                    const isSelected = lang.code === selectedLanguage
                    return (
                      <div
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code)
                          setIsOpen(false)
                          setSearchQuery('')
                        }}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-primary-50 text-primary-700'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{lang.name}</div>
                          {lang.nativeName !== lang.name && (
                            <div className="text-xs text-gray-500">{lang.nativeName}</div>
                          )}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


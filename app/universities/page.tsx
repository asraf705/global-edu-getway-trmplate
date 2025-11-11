'use client'

import { useState } from 'react'
import LazyImage from '@/components/LazyImage'
import { motion } from 'framer-motion'
import { Building2, MapPin, Search, GraduationCap } from 'lucide-react'

const universities = [
  { id: 1, name: 'Moscow State University', city: 'Moscow', programs: ['Medicine', 'Engineering', 'Science', 'Arts'], image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=600&h=400&fit=crop', description: 'One of the oldest and most prestigious universities in Russia, ranked #74 globally.' },
  { id: 2, name: 'St. Petersburg State University', city: 'St. Petersburg', programs: ['Medicine', 'Engineering', 'Business', 'Law'], image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=600&h=400&fit=crop', description: 'Cultural capital\'s leading university with world-class facilities and programs.' },
  { id: 3, name: 'Novosibirsk State University', city: 'Novosibirsk', programs: ['Science', 'Engineering', 'Medicine', 'Technology'], image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=600&h=400&fit=crop', description: 'Major scientific center with strong focus on research and innovation.' },
  { id: 4, name: 'Kazan Federal University', city: 'Kazan', programs: ['Medicine', 'Engineering', 'Science', 'Arts'], image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=600&h=400&fit=crop', description: 'Historic university with excellent medical and engineering programs.' },
  { id: 5, name: 'Tomsk State University', city: 'Tomsk', programs: ['Medicine', 'Science', 'Engineering', 'Arts'], image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=600&h=400&fit=crop', description: 'Siberia\'s oldest university, known for medical excellence.' },
  { id: 6, name: 'Ural Federal University', city: 'Yekaterinburg', programs: ['Engineering', 'Science', 'Business', 'Technology'], image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=600&h=400&fit=crop', description: 'Leading technical university in the Ural region.' },
  { id: 7, name: 'Peoples\' Friendship University', city: 'Moscow', programs: ['Medicine', 'Engineering', 'Science', 'Economics'], image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=600&h=400&fit=crop', description: 'International university welcoming students from around the world.' },
  { id: 8, name: 'Siberian Federal University', city: 'Krasnoyarsk', programs: ['Engineering', 'Science', 'Medicine', 'Technology'], image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=600&h=400&fit=crop', description: 'Modern university with state-of-the-art research facilities.' },
  { id: 9, name: 'Southern Federal University', city: 'Rostov-on-Don', programs: ['Engineering', 'Science', 'Medicine', 'Arts'], image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=600&h=400&fit=crop', description: 'Comprehensive university offering diverse academic programs.' },
  { id: 10, name: 'Far Eastern Federal University', city: 'Vladivostok', programs: ['Engineering', 'Science', 'Business', 'Medicine'], image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=600&h=400&fit=crop', description: 'Premier university in Russia\'s Far East region.' },
]

export default function UniversitiesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState('All')

  const cities = ['All', ...Array.from(new Set(universities.map(u => u.city)))]

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         uni.city.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCity = selectedCity === 'All' || uni.city === selectedCity
    return matchesSearch && matchesCity
  })

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partner Universities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our network of top-ranked Russian universities offering world-class education 
            in various fields of study.
          </p>
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search universities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* City Filter */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredUniversities.length} of {universities.length} universities
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((university, index) => (
            <motion.div
              key={university.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border-2 border-transparent hover:border-primary-500 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <LazyImage
                  src={university.image}
                  alt={university.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 z-20">
                  <GraduationCap className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <Building2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {university.name}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{university.city}</span>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {university.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {university.programs.slice(0, 3).map((program, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {program}
                    </span>
                  ))}
                  {university.programs.length > 3 && (
                    <span className="text-xs text-gray-500">+{university.programs.length - 3} more</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No universities found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  )
}


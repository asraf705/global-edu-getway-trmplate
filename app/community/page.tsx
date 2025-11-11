'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Users, MapPin, GraduationCap, Search, Plus, Building2, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import UniversityFilter from '@/components/community/UniversityFilter'
import CityFilter from '@/components/community/CityFilter'

interface Community {
  id: string
  name: string
  type: 'city' | 'university'
  city?: string
  cityId?: number // Add city ID for proper filtering
  university?: string
  universityId?: number // Add university ID for proper filtering
  description: string
  memberCount: number
  leader: {
    name: string
    avatar?: string
  }
  image?: string
  isJoined: boolean
  joinStatus: 'member' | 'pending' | 'guest' | 'none'
}

// Mock communities data
const mockCommunities: Community[] = [
  {
    id: '1',
    name: 'Moscow Student Community',
    type: 'city',
    city: 'Moscow',
    cityId: 1,
    description: 'Connect with students studying in Moscow. Share experiences, events, and support each other.',
    memberCount: 245,
    leader: { name: 'Ahmed Rahman', avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop' },
    isJoined: false,
    joinStatus: 'none',
  },
  {
    id: '2',
    name: 'St. Petersburg Community',
    type: 'city',
    city: 'St. Petersburg',
    cityId: 2,
    description: 'Join fellow students in St. Petersburg. Organize meetups, cultural events, and study groups.',
    memberCount: 189,
    leader: { name: 'Fatima Khan', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop' },
    isJoined: true,
    joinStatus: 'member',
  },
  {
    id: '3',
    name: 'Moscow State University',
    type: 'university',
    university: 'Moscow State University',
    universityId: 1,
    city: 'Moscow',
    cityId: 1,
    description: 'Official community for MSU students. Academic discussions, campus events, and student support.',
    memberCount: 156,
    leader: { name: 'Rashid Ali', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    isJoined: false,
    joinStatus: 'pending',
  },
  {
    id: '4',
    name: 'Novosibirsk Students',
    type: 'city',
    city: 'Novosibirsk',
    cityId: 3,
    description: 'Community for students in Novosibirsk. Share resources, organize activities, and build friendships.',
    memberCount: 98,
    leader: { name: 'Sara Ahmed', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    isJoined: false,
    joinStatus: 'none',
  },
  {
    id: '5',
    name: 'ITMO University',
    type: 'university',
    university: 'ITMO University',
    universityId: 11,
    city: 'St. Petersburg',
    cityId: 2,
    description: 'ITMO University student community. Tech events, hackathons, and academic collaboration.',
    memberCount: 112,
    leader: { name: 'Mohammad Hasan', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
    isJoined: true,
    joinStatus: 'guest',
  },
  {
    id: '6',
    name: 'Kazan Community',
    type: 'city',
    city: 'Kazan',
    cityId: 4,
    description: 'Join students in Kazan. Cultural exchange, study groups, and community events.',
    memberCount: 134,
    leader: { name: 'Ayesha Begum', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
    isJoined: false,
    joinStatus: 'none',
  },
]

export default function CommunityPage() {
  const [communities, setCommunities] = useState<Community[]>(mockCommunities)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState<'all' | 'city' | 'university'>('all')
  const [selectedCities, setSelectedCities] = useState<number[]>([])
  const [selectedUniversities, setSelectedUniversities] = useState<number[]>([])

  // Optimized filtering with useMemo
  const filteredCommunities = useMemo(() => {
    let filtered = communities

    // Filter by type
    if (filterType !== 'all') {
      filtered = filtered.filter((comm) => comm.type === filterType)
    }

    // Filter by cities (for city-type communities or communities in those cities)
    if (selectedCities.length > 0) {
      filtered = filtered.filter((comm) => {
        if (comm.cityId) {
          return selectedCities.includes(comm.cityId)
        }
        // Fallback to name matching if ID not available
        return comm.city && selectedCities.some((cityId) => {
          // This would need proper city name to ID mapping in production
          return true // Placeholder
        })
      })
    }

    // Filter by universities (for university-type communities)
    if (selectedUniversities.length > 0) {
      filtered = filtered.filter((comm) => {
        if (comm.type === 'university' && comm.universityId) {
          return selectedUniversities.includes(comm.universityId)
        }
        // If it's a city community, show it if no university filter is applied
        return comm.type === 'city'
      })
    }

    // Optimized search with multiple fields
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      const searchTerms = query.split(/\s+/).filter((term) => term.length > 0)
      
      filtered = filtered.filter((comm) => {
        const searchableText = [
          comm.name,
          comm.description,
          comm.city,
          comm.university,
          comm.leader.name,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()

        // Match all search terms (AND logic)
        return searchTerms.every((term) => searchableText.includes(term))
      })
    }

    return filtered
  }, [searchQuery, filterType, selectedCities, selectedUniversities, communities])

  const handleJoinRequest = (communityId: string) => {
    setCommunities((prev) =>
      prev.map((comm) =>
        comm.id === communityId ? { ...comm, joinStatus: 'pending' as const } : comm
      )
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Users className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Student Communities in Russia
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Connect with students in your city or university. Join communities, post events, share requests, and build lasting friendships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search communities by name, city, or university..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col gap-4">
              {/* Type Filter */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium text-gray-700">Type:</span>
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                    filterType === 'all'
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterType('city')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-1 ${
                    filterType === 'city'
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  City
                </button>
                <button
                  onClick={() => setFilterType('university')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-1 ${
                    filterType === 'university'
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  University
                </button>
              </div>

              {/* City and University Filters */}
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                {/* City Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">City:</span>
                  <CityFilter
                    selectedCities={selectedCities}
                    onCitiesChange={setSelectedCities}
                  />
                </div>

                {/* University Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">University:</span>
                  <UniversityFilter
                    selectedUniversities={selectedUniversities}
                    onUniversitiesChange={setSelectedUniversities}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredCommunities.length} {filteredCommunities.length === 1 ? 'Community' : 'Communities'} Found
          </h2>
        </div>

        {filteredCommunities.length === 0 ? (
          <div className="text-center py-16">
            <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No communities found</h3>
            <p className="text-gray-600">Try adjusting your filters or search query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCommunities.map((community, index) => (
              <motion.div
                key={community.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200"
              >
                <Link href={`/community/${community.id}`}>
                  <div className="relative h-32 bg-gradient-to-r from-primary-500 to-primary-600">
                    {community.image && (
                      <Image
                        src={community.image}
                        alt={community.name}
                        fill
                        className="object-cover opacity-80"
                      />
                    )}
                    <div className="absolute top-3 right-3">
                      {community.type === 'city' ? (
                        <span className="bg-white/90 text-primary-600 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          City
                        </span>
                      ) : (
                        <span className="bg-white/90 text-primary-600 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          University
                        </span>
                      )}
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <Link href={`/community/${community.id}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                      {community.name}
                    </h3>
                  </Link>

                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    {community.type === 'city' ? (
                      <>
                        <MapPin className="w-4 h-4 mr-1" />
                        {community.city}
                      </>
                    ) : (
                      <>
                        <GraduationCap className="w-4 h-4 mr-1" />
                        {community.university}
                        {community.city && (
                          <span className="ml-2 flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {community.city}
                          </span>
                        )}
                      </>
                    )}
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {community.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      {community.memberCount} members
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="text-xs">Leader: {community.leader.name}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {community.joinStatus === 'member' ? (
                      <Link
                        href={`/community/${community.id}`}
                        className="flex-1 bg-primary-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors text-center text-sm flex items-center justify-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        View Community
                      </Link>
                    ) : community.joinStatus === 'pending' ? (
                      <button
                        disabled
                        className="flex-1 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-medium text-sm cursor-not-allowed"
                      >
                        Pending Approval
                      </button>
                    ) : community.joinStatus === 'guest' ? (
                      <Link
                        href={`/community/${community.id}`}
                        className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center text-sm"
                      >
                        View as Guest
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleJoinRequest(community.id)}
                        className="flex-1 bg-primary-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors text-sm"
                      >
                        Join Community
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}


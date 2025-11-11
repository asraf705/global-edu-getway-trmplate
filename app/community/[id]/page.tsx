'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, MapPin, GraduationCap, Calendar, MessageSquare, Plus, 
  CheckCircle2, Clock, User, Shield, X, Edit, Trash2, Heart,
  Share2, MoreVertical, Send
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Activity {
  id: string
  type: 'event' | 'request' | 'post' | 'join'
  title: string
  content: string
  author: {
    name: string
    avatar?: string
    role: 'leader' | 'member' | 'guest'
  }
  timestamp: string
  eventDate?: string
  location?: string
  likes: number
  comments: number
  isLiked?: boolean
}

interface Community {
  id: string
  name: string
  type: 'city' | 'university'
  city?: string
  university?: string
  description: string
  memberCount: number
  leader: {
    name: string
    avatar?: string
  }
  joinStatus: 'member' | 'pending' | 'guest' | 'none'
  isLeader: boolean
}

// Mock data
const mockCommunity: Community = {
  id: '1',
  name: 'Moscow Student Community',
  type: 'city',
  city: 'Moscow',
  description: 'Connect with students studying in Moscow. Share experiences, events, and support each other.',
  memberCount: 245,
  leader: { name: 'Ahmed Rahman', avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop' },
  joinStatus: 'member',
  isLeader: false,
}

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  organizer: {
    name: string
    avatar?: string
  }
  attendees: number
  maxAttendees?: number
  category: string
  image?: string
}

interface Member {
  id: string
  name: string
  avatar?: string
  role: 'leader' | 'member' | 'guest'
  joinDate: string
  university?: string
  course?: string
  status: 'active' | 'pending'
}

const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'event',
    title: 'Cultural Exchange Meetup',
    content: 'Join us for a cultural exchange event this Saturday! We\'ll have food, music, and games from different countries.',
    author: { name: 'Ahmed Rahman', avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop', role: 'leader' },
    timestamp: '2 hours ago',
    eventDate: '2024-01-20T15:00:00',
    location: 'Moscow City Center',
    likes: 24,
    comments: 8,
    isLiked: false,
  },
  {
    id: '2',
    type: 'request',
    title: 'Looking for Study Group',
    content: 'I\'m looking for a study group for Russian language classes. Anyone interested in joining?',
    author: { name: 'Fatima Khan', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop', role: 'member' },
    timestamp: '5 hours ago',
    likes: 12,
    comments: 5,
    isLiked: true,
  },
  {
    id: '3',
    type: 'post',
    title: 'Tips for New Students',
    content: 'Here are some helpful tips for new students arriving in Moscow: 1) Get your metro card early, 2) Join student groups, 3) Learn basic Russian phrases...',
    author: { name: 'Rashid Ali', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', role: 'member' },
    timestamp: '1 day ago',
    likes: 45,
    comments: 12,
    isLiked: false,
  },
]

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Cultural Exchange Meetup',
    description: 'Join us for a cultural exchange event this Saturday! We\'ll have food, music, and games from different countries.',
    date: '2024-01-20',
    time: '15:00',
    location: 'Moscow City Center, Red Square',
    organizer: { name: 'Ahmed Rahman', avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop' },
    attendees: 24,
    maxAttendees: 50,
    category: 'Social',
  },
  {
    id: '2',
    title: 'Study Group Session',
    description: 'Weekly study group for Russian language learners. All levels welcome!',
    date: '2024-01-22',
    time: '18:00',
    location: 'Moscow State University Library',
    organizer: { name: 'Fatima Khan', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop' },
    attendees: 12,
    maxAttendees: 20,
    category: 'Academic',
  },
  {
    id: '3',
    title: 'City Tour for New Students',
    description: 'Explore Moscow with fellow students! Visit historical sites and popular spots.',
    date: '2024-01-25',
    time: '10:00',
    location: 'Meeting at Metro Station: Lubyanka',
    organizer: { name: 'Rashid Ali', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    attendees: 18,
    maxAttendees: 30,
    category: 'Tour',
  },
]

const mockMembers: Member[] = [
  {
    id: '1',
    name: 'Ahmed Rahman',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop',
    role: 'leader',
    joinDate: '2023-01-15',
    university: 'Moscow State University',
    course: 'Medicine',
    status: 'active',
  },
  {
    id: '2',
    name: 'Fatima Khan',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
    role: 'member',
    joinDate: '2023-03-20',
    university: 'St. Petersburg State University',
    course: 'Engineering',
    status: 'active',
  },
  {
    id: '3',
    name: 'Rashid Ali',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    role: 'member',
    joinDate: '2023-05-10',
    university: 'Novosibirsk State University',
    course: 'Computer Science',
    status: 'active',
  },
  {
    id: '4',
    name: 'Sara Ahmed',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    role: 'member',
    joinDate: '2023-07-05',
    university: 'Kazan Federal University',
    course: 'Business Administration',
    status: 'active',
  },
  {
    id: '5',
    name: 'Mohammad Hasan',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    role: 'guest',
    joinDate: '2023-09-12',
    status: 'active',
  },
  {
    id: '6',
    name: 'Ayesha Begum',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    role: 'member',
    joinDate: '2023-11-01',
    university: 'ITMO University',
    course: 'Information Technology',
    status: 'pending',
  },
]

export default function CommunityDetailPage({ params }: { params: { id: string } }) {
  const [community] = useState<Community>(mockCommunity)
  const [activities, setActivities] = useState<Activity[]>(mockActivities)
  const [events] = useState<Event[]>(mockEvents)
  const [members] = useState<Member[]>(mockMembers)
  const [showEventForm, setShowEventForm] = useState(false)
  const [showRequestForm, setShowRequestForm] = useState(false)
  const [activeTab, setActiveTab] = useState<'feed' | 'members' | 'events'>('feed')
  const [memberFilter, setMemberFilter] = useState<'all' | 'active' | 'pending' | 'guest'>('all')

  const handleLike = (activityId: string) => {
    setActivities((prev) =>
      prev.map((activity) =>
        activity.id === activityId
          ? {
              ...activity,
              isLiked: !activity.isLiked,
              likes: activity.isLiked ? activity.likes - 1 : activity.likes + 1,
            }
          : activity
      )
    )
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'event':
        return <Calendar className="w-5 h-5" />
      case 'request':
        return <MessageSquare className="w-5 h-5" />
      case 'join':
        return <Users className="w-5 h-5" />
      default:
        return <MessageSquare className="w-5 h-5" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'event':
        return 'bg-blue-100 text-blue-800'
      case 'request':
        return 'bg-green-100 text-green-800'
      case 'join':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // Filter members based on selected filter
  const filteredMembers = members.filter((member) => {
    if (memberFilter === 'all') return true
    if (memberFilter === 'active') return member.status === 'active'
    if (memberFilter === 'pending') return member.status === 'pending'
    if (memberFilter === 'guest') return member.role === 'guest'
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Community Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                {community.type === 'city' ? (
                  <MapPin className="w-6 h-6" />
                ) : (
                  <GraduationCap className="w-6 h-6" />
                )}
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                  {community.type === 'city' ? 'City Community' : 'University Community'}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{community.name}</h1>
              <div className="flex items-center gap-4 text-primary-100">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {community.city}
                </div>
                {community.university && (
                  <div className="flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" />
                    {community.university}
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {community.memberCount} members
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {community.isLeader && (
                <button className="bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Manage Community
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Community Info</h3>
              <p className="text-sm text-gray-600 mb-6">{community.description}</p>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-primary-600" />
                    <span className="text-sm font-medium text-gray-900">Community Leader</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {community.leader.avatar && (
                      <Image
                        src={community.leader.avatar}
                        alt={community.leader.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    )}
                    <span className="text-sm text-gray-700">{community.leader.name}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Quick Actions</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => setShowEventForm(true)}
                      className="w-full flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium"
                    >
                      <Plus className="w-4 h-4" />
                      Post Event
                    </button>
                    <button
                      onClick={() => setShowRequestForm(true)}
                      className="w-full flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Post Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('feed')}
                  className={`flex-1 px-6 py-3 font-medium transition-colors ${
                    activeTab === 'feed'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Activity Feed
                </button>
                <button
                  onClick={() => setActiveTab('events')}
                  className={`flex-1 px-6 py-3 font-medium transition-colors ${
                    activeTab === 'events'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Events
                </button>
                <button
                  onClick={() => setActiveTab('members')}
                  className={`flex-1 px-6 py-3 font-medium transition-colors ${
                    activeTab === 'members'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Members
                </button>
              </div>
            </div>

            {/* Activity Feed */}
            {activeTab === 'feed' && (
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <div className="flex items-start gap-4">
                      {activity.author.avatar ? (
                        <Image
                          src={activity.author.avatar}
                          alt={activity.author.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                          <User className="w-6 h-6 text-primary-600" />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-gray-900">{activity.author.name}</span>
                          {activity.author.role === 'leader' && (
                            <Shield className="w-4 h-4 text-primary-600" />
                          )}
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getActivityColor(activity.type)} flex items-center gap-1`}>
                            {getActivityIcon(activity.type)}
                            {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                          </span>
                          <span className="text-sm text-gray-500">{activity.timestamp}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h3>
                        <p className="text-gray-700 mb-3">{activity.content}</p>
                        {activity.eventDate && (
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(activity.eventDate).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </div>
                            {activity.location && (
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {activity.location}
                              </div>
                            )}
                          </div>
                        )}
                        <div className="flex items-center gap-4 pt-3 border-t border-gray-200">
                          <button
                            onClick={() => handleLike(activity.id)}
                            className={`flex items-center gap-2 text-sm transition-colors ${
                              activity.isLiked ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
                            }`}
                          >
                            <Heart className={`w-4 h-4 ${activity.isLiked ? 'fill-current' : ''}`} />
                            {activity.likes}
                          </button>
                          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            <MessageSquare className="w-4 h-4" />
                            {activity.comments} comments
                          </button>
                          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            <Share2 className="w-4 h-4" />
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="space-y-4">
                {events.length === 0 ? (
                  <div className="bg-white rounded-lg shadow-md p-12 text-center">
                    <Calendar className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Events Yet</h3>
                    <p className="text-gray-600 mb-6">Be the first to post an event in this community!</p>
                    <button
                      onClick={() => setShowEventForm(true)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                      Post an Event
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {events.length} Upcoming {events.length === 1 ? 'Event' : 'Events'}
                      </h3>
                      <button
                        onClick={() => setShowEventForm(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors text-sm"
                      >
                        <Plus className="w-4 h-4" />
                        New Event
                      </button>
                    </div>
                    {events.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                      >
                        <div className="p-6">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-3">
                                <div>
                                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                      {event.category}
                                    </span>
                                    <span className="text-sm text-gray-600">
                                      Organized by {event.organizer.name}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <p className="text-gray-700 mb-4">{event.description}</p>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Calendar className="w-5 h-5 text-primary-600" />
                                  <div>
                                    <div className="font-medium text-gray-900">
                                      {new Date(event.date).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                      })}
                                    </div>
                                    <div className="text-xs text-gray-500">{event.time}</div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <MapPin className="w-5 h-5 text-primary-600" />
                                  <span className="font-medium text-gray-900">{event.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Users className="w-5 h-5 text-primary-600" />
                                  <div>
                                    <span className="font-medium text-gray-900">{event.attendees}</span>
                                    {event.maxAttendees && (
                                      <span className="text-gray-500"> / {event.maxAttendees}</span>
                                    )}{' '}
                                    attending
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
                            <button className="flex-1 bg-primary-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors text-sm">
                              Join Event
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">
                              Share
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </>
                )}
              </div>
            )}

            {/* Members Tab */}
            {activeTab === 'members' && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {members.length} {members.length === 1 ? 'Member' : 'Members'}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {members.filter((m) => m.status === 'active').length} active,{' '}
                        {members.filter((m) => m.status === 'pending').length} pending approval
                      </p>
                    </div>
                    {community.isLeader && (
                      <button className="px-4 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors text-sm">
                        Manage Members
                      </button>
                    )}
                  </div>

                  {/* Filter Tabs */}
                  <div className="flex gap-2 mb-4 border-b border-gray-200">
                    <button
                      onClick={() => setMemberFilter('all')}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        memberFilter === 'all'
                          ? 'text-primary-600 border-b-2 border-primary-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      All ({members.length})
                    </button>
                    <button
                      onClick={() => setMemberFilter('active')}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        memberFilter === 'active'
                          ? 'text-primary-600 border-b-2 border-primary-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Active ({members.filter((m) => m.status === 'active').length})
                    </button>
                    <button
                      onClick={() => setMemberFilter('pending')}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        memberFilter === 'pending'
                          ? 'text-primary-600 border-b-2 border-primary-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Pending ({members.filter((m) => m.status === 'pending').length})
                    </button>
                    <button
                      onClick={() => setMemberFilter('guest')}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        memberFilter === 'guest'
                          ? 'text-primary-600 border-b-2 border-primary-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Guest ({members.filter((m) => m.role === 'guest').length})
                    </button>
                  </div>

                  {/* Members List */}
                  {filteredMembers.length === 0 ? (
                    <div className="text-center py-12">
                      <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">No Members Found</h3>
                      <p className="text-gray-600">
                        {memberFilter === 'active' && 'No active members match this filter.'}
                        {memberFilter === 'pending' && 'No pending members to approve.'}
                        {memberFilter === 'guest' && 'No guest members in this community.'}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {filteredMembers.map((member, index) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                      >
                        {member.avatar ? (
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                            <User className="w-6 h-6 text-primary-600" />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-gray-900">{member.name}</span>
                            {member.role === 'leader' && (
                              <Shield className="w-4 h-4 text-primary-600" />
                            )}
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                member.role === 'leader'
                                  ? 'bg-primary-100 text-primary-800'
                                  : member.role === 'guest'
                                  ? 'bg-gray-100 text-gray-800'
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                            </span>
                            {member.status === 'pending' && (
                              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                Pending
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            {member.university && (
                              <div className="flex items-center gap-1">
                                <GraduationCap className="w-4 h-4" />
                                {member.university}
                              </div>
                            )}
                            {member.course && (
                              <span>{member.course}</span>
                            )}
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              Joined {new Date(member.joinDate).toLocaleDateString('en-US', {
                                month: 'short',
                                year: 'numeric',
                              })}
                            </div>
                          </div>
                        </div>
                        {community.isLeader && member.status === 'pending' && (
                          <div className="flex gap-2">
                            <button className="px-3 py-1.5 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                              Approve
                            </button>
                            <button className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors">
                              Reject
                            </button>
                          </div>
                        )}
                        {community.isLeader && member.status === 'active' && member.role !== 'leader' && (
                          <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                            Manage
                          </button>
                        )}
                      </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Event Form Modal */}
      {showEventForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Post an Event</h2>
              <button
                onClick={() => setShowEventForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Title *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="e.g., Cultural Exchange Meetup"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Describe your event..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date & Time *</label>
                  <input
                    type="datetime-local"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Event location"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                >
                  Post Event
                </button>
                <button
                  type="button"
                  onClick={() => setShowEventForm(false)}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Request Form Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Post a Request</h2>
              <button
                onClick={() => setShowRequestForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Request Title *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="e.g., Looking for Study Group"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Describe what you're looking for..."
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  Post Request
                </button>
                <button
                  type="button"
                  onClick={() => setShowRequestForm(false)}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}


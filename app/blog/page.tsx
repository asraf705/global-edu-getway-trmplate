'use client'

import { useState } from 'react'
import Link from 'next/link'
import LazyImage from '@/components/LazyImage'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, BookOpen, Search, Tag, Clock, TrendingUp } from 'lucide-react'

// Metadata moved to layout.tsx

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Russian Universities for International Students',
    excerpt: 'Discover the best universities in Russia that welcome international students and offer world-class education. Learn about admission requirements, programs, and campus life.',
    date: '2024-01-15',
    category: 'Universities',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=800&h=600&fit=crop',
    featured: true,
    author: 'Dr. Mohammad Rahman',
  },
  {
    id: 2,
    title: 'Complete Guide to Student Visa for Russia',
    excerpt: 'Everything you need to know about applying for a Russian student visa, required documents, processing time, and tips for a successful application.',
    date: '2024-01-10',
    category: 'Visa',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    featured: true,
    author: 'Fatima Ahmed',
  },
  {
    id: 3,
    title: 'Living Costs in Russia: A Student\'s Budget Guide',
    excerpt: 'Detailed breakdown of monthly expenses for students living in major Russian cities like Moscow and St. Petersburg. Learn how to budget effectively.',
    date: '2024-01-05',
    category: 'Living',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    featured: false,
    author: 'Rashid Khan',
  },
  {
    id: 4,
    title: 'Scholarships Available for Bangladeshi Students in Russia',
    excerpt: 'Learn about various scholarship opportunities and financial aid programs available for Bangladeshi students. Government and university scholarships explained.',
    date: '2023-12-28',
    category: 'Scholarships',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
    featured: false,
    author: 'Dr. Mohammad Rahman',
  },
  {
    id: 5,
    title: 'Why Study Medicine in Russia?',
    excerpt: 'Explore the benefits of pursuing a medical degree in Russia, including affordable tuition, global recognition, and excellent clinical training opportunities.',
    date: '2023-12-20',
    category: 'Courses',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop',
    featured: false,
    author: 'Fatima Ahmed',
  },
  {
    id: 6,
    title: 'Russian Language Learning Tips for International Students',
    excerpt: 'Practical tips and resources to help you learn Russian quickly and adapt to life in Russia. Language courses and immersion strategies.',
    date: '2023-12-15',
    category: 'Language',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop',
    featured: false,
    author: 'Rashid Khan',
  },
  {
    id: 7,
    title: 'Student Life in Moscow: What to Expect',
    excerpt: 'A comprehensive guide to student life in Moscow, including accommodation, transportation, food, entertainment, and cultural experiences.',
    date: '2023-12-10',
    category: 'Living',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&h=600&fit=crop',
    featured: false,
    author: 'Dr. Mohammad Rahman',
  },
  {
    id: 8,
    title: 'How to Choose the Right University in Russia',
    excerpt: 'Factors to consider when selecting a Russian university, including rankings, programs, location, costs, and career opportunities.',
    date: '2023-12-05',
    category: 'Universities',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=800&h=600&fit=crop&sig=2',
    featured: false,
    author: 'Fatima Ahmed',
  },
]

const categories = ['All', 'Universities', 'Visa', 'Living', 'Scholarships', 'Courses', 'Language']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-12 pb-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                Blog & News
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Latest Insights & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, tips, and insights about studying in Russia. 
              Expert advice to help you make informed decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 items-center">
              <Tag className="w-5 h-5 text-gray-400" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Showing {filteredPosts.length} of {blogPosts.length} articles
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-primary-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group border-2 border-primary-100"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="aspect-video relative overflow-hidden">
                    <LazyImage
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      {/* Regular Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
        {regularPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="aspect-video relative overflow-hidden">
                    <LazyImage
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  )
}


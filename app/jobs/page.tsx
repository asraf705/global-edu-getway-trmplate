'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Filter, Search, Plus, Languages } from 'lucide-react'
import Link from 'next/link'
import JobCard, { Job, JobType, LanguageRequirement } from '@/components/jobs/JobCard'

// Mock data - In production, this would come from an API or database
// To integrate job scraping, use the API route: /api/jobs/scrape
// Example: const response = await fetch('/api/jobs/scrape?type=full-time&location=Moscow')
// You can also set up a cron job or scheduled task to scrape jobs periodically
const mockJobs: Job[] = [
  {
    id: '1',
    title: 'English Teacher',
    company: 'Language School Moscow',
    location: 'Moscow',
    type: 'full-time',
    salary: '60,000 - 80,000 RUB/month',
    description: 'We are looking for an experienced English teacher to join our team. Must have teaching certification and experience working with students.',
    postedDate: new Date().toISOString(),
    source: 'HeadHunter',
    sourceUrl: 'https://hh.ru',
    requirements: ['Teaching certification', '2+ years experience', 'Fluent English'],
    languages: ['english'],
  },
  {
    id: '2',
    title: 'Restaurant Server',
    company: 'Cafe Pushkin',
    location: 'St. Petersburg',
    type: 'part-time',
    salary: '25,000 - 35,000 RUB/month',
    description: 'Part-time server position in a high-end restaurant. Flexible hours, evening shifts available.',
    postedDate: new Date(Date.now() - 86400000).toISOString(),
    source: 'Avito',
    sourceUrl: 'https://avito.ru',
    languages: ['russian'],
  },
  {
    id: '3',
    title: 'IT Support Specialist',
    company: 'Tech Solutions Russia',
    location: 'Moscow',
    type: 'full-time',
    salary: '80,000 - 120,000 RUB/month',
    description: 'Looking for an IT support specialist with experience in troubleshooting and customer service.',
    postedDate: new Date(Date.now() - 172800000).toISOString(),
    source: 'SuperJob',
    sourceUrl: 'https://superjob.ru',
    requirements: ['IT degree or equivalent', '2+ years experience', 'Russian language'],
    languages: ['russian'],
  },
  {
    id: '4',
    title: 'Event Staff',
    company: 'Event Management Co.',
    location: 'Kazan',
    type: 'temporary',
    salary: '1,500 RUB/day',
    description: 'Temporary event staff needed for upcoming festivals and conferences. Multiple dates available.',
    postedDate: new Date(Date.now() - 259200000).toISOString(),
    languages: ['both'],
  },
  {
    id: '5',
    title: 'Translator (English-Russian)',
    company: 'Translation Services',
    location: 'Remote',
    type: 'part-time',
    salary: '500 RUB/hour',
    description: 'Remote translation work. Flexible schedule, work from home. Must be bilingual.',
    postedDate: new Date(Date.now() - 345600000).toISOString(),
    source: 'Rabota.ru',
    sourceUrl: 'https://rabota.ru',
    languages: ['both'],
  },
  {
    id: '6',
    title: 'Sales Manager',
    company: 'International Trading',
    location: 'Moscow',
    type: 'full-time',
    salary: '70,000 - 100,000 RUB/month + commission',
    description: 'Sales manager position for international trading company. Experience in B2B sales required.',
    postedDate: new Date(Date.now() - 432000000).toISOString(),
    requirements: ['Sales experience', 'B2B background', 'English proficiency'],
    languages: ['english'],
  },
  {
    id: '7',
    title: 'French Language Tutor',
    company: 'Multilingual Academy',
    location: 'St. Petersburg',
    type: 'part-time',
    salary: '800 RUB/hour',
    description: 'Looking for a native French speaker to teach French language classes. Flexible schedule.',
    postedDate: new Date(Date.now() - 518400000).toISOString(),
    languages: ['other'],
    otherLanguages: ['French'],
  },
  {
    id: '8',
    title: 'Customer Service Representative',
    company: 'International Call Center',
    location: 'Moscow',
    type: 'full-time',
    salary: '50,000 - 70,000 RUB/month',
    description: 'Customer service position requiring both English and Russian language skills for international clients.',
    postedDate: new Date(Date.now() - 604800000).toISOString(),
    languages: ['both'],
  },
]

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>(mockJobs)
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs)
  const [selectedType, setSelectedType] = useState<JobType | 'all'>('all')
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageRequirement | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    let filtered = jobs

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter((job) => job.type === selectedType)
    }

    // Filter by language
    if (selectedLanguage !== 'all') {
      filtered = filtered.filter((job) => 
        job.languages && job.languages.includes(selectedLanguage)
      )
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(query) ||
          job.company.toLowerCase().includes(query) ||
          job.location.toLowerCase().includes(query) ||
          job.description.toLowerCase().includes(query)
      )
    }

    setFilteredJobs(filtered)
  }, [selectedType, selectedLanguage, searchQuery, jobs])

  const jobTypes: { value: JobType | 'all'; label: string }[] = [
    { value: 'all', label: 'All Jobs' },
    { value: 'full-time', label: 'Full-Time' },
    { value: 'part-time', label: 'Part-Time' },
    { value: 'temporary', label: 'Temporary' },
  ]

  const languageOptions: { value: LanguageRequirement | 'all'; label: string; icon: string }[] = [
    { value: 'all', label: 'All Languages', icon: '🌐' },
    { value: 'english', label: 'English Only', icon: '🇬🇧' },
    { value: 'russian', label: 'Russian Only', icon: '🇷🇺' },
    { value: 'both', label: 'English & Russian', icon: '🌍' },
    { value: 'other', label: 'Other Languages', icon: '🗣️' },
  ]

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
            <Briefcase className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Jobs in Russia
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Find part-time, full-time, and temporary job opportunities across Russia.
              Browse jobs from top Russian job portals or post your own listing.
            </p>
            <Link
              href="/jobs/post"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Post a Job
            </Link>
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
                  placeholder="Search jobs by title, company, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filters Row */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Job Type Filters */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 flex items-center mr-2">
                  <Briefcase className="w-4 h-4 mr-1" />
                  Type:
                </span>
                {jobTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setSelectedType(type.value)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                      selectedType === type.value
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>

              {/* Language Filters */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700 flex items-center mr-2">
                  <Languages className="w-4 h-4 mr-1" />
                  Language:
                </span>
                {languageOptions.map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => setSelectedLanguage(lang.value)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-1 ${
                      selectedLanguage === lang.value
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>{lang.icon}</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
          </h2>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="text-center py-16">
            <Briefcase className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search query.
            </p>
            <Link
              href="/jobs/post"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Post a Job
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 bg-primary-50 rounded-lg p-6 border border-primary-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            About Our Job Listings
          </h3>
          <p className="text-gray-700 mb-4">
            Our job listings are aggregated from major Russian job portals including HeadHunter, 
            SuperJob, Avito, and Rabota.ru. We also allow employers to post jobs directly on our platform.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Note:</strong> Job scraping is updated regularly, but for the most current information, 
            please visit the original job portal links provided with each listing.
          </p>
        </div>
      </section>
    </div>
  )
}


'use client'

import { Briefcase, MapPin, Clock, Building2, ExternalLink, Languages } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export type JobType = 'full-time' | 'part-time' | 'temporary'
export type LanguageRequirement = 'english' | 'russian' | 'both' | 'other'

export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: JobType
  salary?: string
  description: string
  postedDate: string
  source?: string
  sourceUrl?: string
  requirements?: string[]
  languages: LanguageRequirement[]
  otherLanguages?: string[]
}

interface JobCardProps {
  job: Job
  index?: number
}

export default function JobCard({ job, index = 0 }: JobCardProps) {
  const getTypeColor = (type: JobType) => {
    switch (type) {
      case 'full-time':
        return 'bg-green-100 text-green-800'
      case 'part-time':
        return 'bg-blue-100 text-blue-800'
      case 'temporary':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const getLanguageLabel = (lang: LanguageRequirement) => {
    switch (lang) {
      case 'english':
        return 'English'
      case 'russian':
        return 'Russian'
      case 'both':
        return 'English & Russian'
      case 'other':
        return 'Other'
      default:
        return lang
    }
  }

  const getLanguageColor = (lang: LanguageRequirement) => {
    switch (lang) {
      case 'english':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'russian':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'both':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'other':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {job.title}
              </h3>
              <div className="flex items-center text-gray-600 mb-2">
                <Building2 className="w-4 h-4 mr-1" />
                <span className="text-sm">{job.company}</span>
              </div>
            </div>
            {job.source && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {job.source}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-600">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {job.location}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {formatDate(job.postedDate)}
            </div>
          </div>

          <p className="text-gray-700 mb-4 line-clamp-2">
            {job.description}
          </p>

          {job.requirements && job.requirements.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-900 mb-2">Requirements:</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {job.requirements.slice(0, 3).map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Language Requirements */}
          {job.languages && job.languages.length > 0 && (
            <div className="mb-3">
              <div className="flex items-center mb-2">
                <Languages className="w-4 h-4 mr-1 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Languages Required:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {job.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border ${getLanguageColor(lang)}`}
                  >
                    {getLanguageLabel(lang)}
                  </span>
                ))}
                {job.otherLanguages && job.otherLanguages.length > 0 && (
                  <>
                    {job.otherLanguages.map((lang, idx) => (
                      <span
                        key={`other-${idx}`}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200"
                      >
                        {lang}
                      </span>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(job.type)}`}>
              {job.type.charAt(0).toUpperCase() + job.type.slice(1).replace('-', ' ')}
            </span>
            {job.salary && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                {job.salary}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 md:w-auto w-full">
          {job.sourceUrl ? (
            <a
              href={job.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium"
            >
              Apply Now
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          ) : (
            <Link
              href={`/jobs/${job.id}`}
              className="flex items-center justify-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}


'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, Loader2, Plus, Trash2, GraduationCap, FileText, X, AlertCircle, Award, Languages } from 'lucide-react'
import Link from 'next/link'
import StudyMediumSelector from '@/components/apply/StudyMediumSelector'

interface AcademicEntry {
  id: string
  academyName: string
  degreeType: string
  university: string
  gpa?: string
  year?: string
  isDoubleDegree: boolean
  studyMedium?: string
  certificate: File | null // Academic Certificate (PDF)
  transcript: File | null // Academic Transcript/Mark Sheet (PDF)
}

interface TestEntry {
  id: string
  testType: 'ielts' | 'russian'
  score: string
  certificate: File | null
  examDate?: string
  examCenter?: string // For Russian language - Russian House, Cultural Center, etc.
  isVerified: boolean // For Russian language - verified center or not
}

type FormData = {
  name: string
  email: string
  whatsapp: string
  academics: AcademicEntry[]
  tests: TestEntry[]
  preferredCourse: string
  preferredUniversity: string
  additionalInfo: string
}

export default function ApplyPage() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    whatsapp: '',
    academics: [],
    tests: [],
    preferredCourse: '',
    preferredUniversity: '',
    additionalInfo: '',
  })
  const [academicErrors, setAcademicErrors] = useState<Record<string, string>>({})

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const validateStep1 = () => {
    return formData.name && formData.email && formData.whatsapp
  }

  const validateStep2 = () => {
    return formData.academics.length > 0 && formData.academics.every(academic => 
      academic.academyName && academic.degreeType && academic.university && academic.studyMedium
    )
  }

  const checkDuplicate = (newEntry: AcademicEntry, excludeId?: string): boolean => {
    return formData.academics.some(entry => {
      if (excludeId && entry.id === excludeId) return false
      // Check if same university and same degree type (and not a double degree)
      if (
        entry.university.toLowerCase() === newEntry.university.toLowerCase() &&
        entry.degreeType === newEntry.degreeType &&
        !newEntry.isDoubleDegree &&
        !entry.isDoubleDegree
      ) {
        return true
      }
      return false
    })
  }

  const addAcademicEntry = () => {
    const newEntry: AcademicEntry = {
      id: Date.now().toString(),
      academyName: '',
      degreeType: '',
      university: '',
      gpa: '',
      year: '',
      isDoubleDegree: false,
      studyMedium: '',
      certificate: null,
      transcript: null,
    }
    setFormData(prev => ({
      ...prev,
      academics: [...prev.academics, newEntry],
    }))
  }

  const removeAcademicEntry = (id: string) => {
    setFormData(prev => ({
      ...prev,
      academics: prev.academics.filter(entry => entry.id !== id),
    }))
    // Clear error for removed entry
    setAcademicErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[id]
      return newErrors
    })
  }

  const updateAcademicEntry = (id: string, field: keyof AcademicEntry, value: any) => {
    setFormData(prev => ({
      ...prev,
      academics: prev.academics.map(entry => {
        if (entry.id === id) {
          const updatedEntry = { ...entry, [field]: value }
          
          // Validate for duplicates when university or degree type changes
          if ((field === 'university' || field === 'degreeType' || field === 'isDoubleDegree') && 
              updatedEntry.university && updatedEntry.degreeType) {
            const isDuplicate = checkDuplicate(updatedEntry, id)
            if (isDuplicate) {
              setAcademicErrors(prev => ({
                ...prev,
                [id]: 'This combination of university and degree type already exists. Enable "Double Degree" if this is a second degree.',
              }))
            } else {
              setAcademicErrors(prev => {
                const newErrors = { ...prev }
                delete newErrors[id]
                return newErrors
              })
            }
          }
          
          return updatedEntry
        }
        return entry
      }),
    }))
  }

  const handleCertificateUpload = (id: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      academics: prev.academics.map(entry => {
        if (entry.id === id) {
          return { ...entry, certificate: file }
        }
        return entry
      }),
    }))
  }

  const handleTranscriptUpload = (id: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      academics: prev.academics.map(entry => {
        if (entry.id === id) {
          return { ...entry, transcript: file }
        }
        return entry
      }),
    }))
  }

  const validateStep3 = () => {
    // Tests are optional, so no validation needed
    return true
  }

  const validateStep4 = () => {
    return formData.preferredCourse && formData.preferredUniversity
  }

  const addTestEntry = (testType: 'ielts' | 'russian') => {
    const newTest: TestEntry = {
      id: Date.now().toString(),
      testType,
      score: '',
      certificate: null,
      examDate: '',
      examCenter: '',
      isVerified: false,
    }
    setFormData(prev => ({
      ...prev,
      tests: [...prev.tests, newTest],
    }))
  }

  const removeTestEntry = (id: string) => {
    setFormData(prev => ({
      ...prev,
      tests: prev.tests.filter(test => test.id !== id),
    }))
  }

  const updateTestEntry = (id: string, field: keyof TestEntry, value: any) => {
    setFormData(prev => ({
      ...prev,
      tests: prev.tests.map(test => {
        if (test.id === id) {
          return { ...test, [field]: value }
        }
        return test
      }),
    }))
  }

  const handleTestCertificateUpload = (id: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      tests: prev.tests.map(test => {
        if (test.id === id) {
          return { ...test, certificate: file }
        }
        return test
      }),
    }))
  }

  const handleSubmit = async () => {
    if (!validateStep4()) return

    setIsSubmitting(true)

    // Create WhatsApp message with academic info
    const academicSummary = formData.academics.map(ac => 
      `${ac.degreeType}${ac.isDoubleDegree ? ' (Double Degree)' : ''} from ${ac.academyName}, ${ac.university}${ac.gpa ? ` (GPA: ${ac.gpa})` : ''}`
    ).join('\n')
    
    const testSummary = formData.tests.map(test => {
      if (test.testType === 'ielts') {
        return `IELTS: ${test.score}${test.examDate ? ` (Date: ${test.examDate})` : ''}`
      } else {
        return `Russian Language: ${test.score}${test.examCenter ? ` (Center: ${test.examCenter})` : ''}${test.isVerified ? ' [Verified]' : ''}`
      }
    }).join('\n')
    
    const message = `Hello GlobalEdu Gateway! I'm ${formData.name}, interested in ${formData.preferredCourse} at ${formData.preferredUniversity}.

Academic Background:
${academicSummary}

${formData.tests.length > 0 ? `Tests & Certificates:\n${testSummary}\n\n` : ''}Contact: ${formData.whatsapp}
Email: ${formData.email}`

    // Redirect to WhatsApp
    const whatsappNumber = '8801314924003'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    
    // Small delay for UX
    setTimeout(() => {
      window.location.href = whatsappUrl
    }, 1000)
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Apply Now
          </h1>
          <p className="text-xl text-gray-600">
            Start your journey to study in Russia. Fill out the form below.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= s
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step > s ? <Check className="w-5 h-5" /> : s}
                  </div>
                  <span className="mt-2 text-xs text-gray-600 text-center">
                    {s === 1 && 'Personal Info'}
                    {s === 2 && 'Academic'}
                    {s === 3 && 'Tests'}
                    {s === 4 && 'Preferences'}
                  </span>
                </div>
                {s < 4 && (
                  <div
                    className={`h-1 flex-1 mx-2 ${
                      step > s ? 'bg-primary-500' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Personal Information
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => updateFormData('whatsapp', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+880 1234 567 890"
                    required
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Include country code (e.g., +880 for Bangladesh)
                  </p>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setStep(2)}
                    disabled={!validateStep1()}
                    className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    Next Step
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Academic Background */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Your Academic Background
                  </h2>
                  <button
                    type="button"
                    onClick={addAcademicEntry}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    Add Academy
                  </button>
                </div>

                {formData.academics.length === 0 ? (
                  <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
                    <GraduationCap className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-4">No academic entries added yet.</p>
                    <button
                      type="button"
                      onClick={addAcademicEntry}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                      Add Your First Academy
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {formData.academics.map((academic, index) => (
                      <div
                        key={academic.id}
                        className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-primary-600" />
                            <h3 className="text-lg font-semibold text-gray-900">
                              Academic Entry {index + 1}
                            </h3>
                          </div>
                          {formData.academics.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeAcademicEntry(academic.id)}
                              className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                              title="Remove this entry"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          )}
                        </div>

                        {academicErrors[academic.id] && (
                          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-red-700">{academicErrors[academic.id]}</p>
                          </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Academy/Institution Name *
                            </label>
                            <input
                              type="text"
                              value={academic.academyName}
                              onChange={(e) => updateAcademicEntry(academic.id, 'academyName', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              placeholder="e.g., Dhaka College"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Degree Type *
                            </label>
                            <select
                              value={academic.degreeType}
                              onChange={(e) => updateAcademicEntry(academic.id, 'degreeType', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              required
                            >
                              <option value="">Select degree type</option>
                              <option value="SSC">SSC (Secondary School Certificate)</option>
                              <option value="High School">High School</option>
                              <option value="A-Levels">A-Levels</option>
                              <option value="Diploma">Diploma</option>
                              <option value="Bachelor's">Bachelor's Degree</option>
                              <option value="Master's">Master's Degree</option>
                              <option value="PhD">PhD</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              University/Board *
                            </label>
                            <input
                              type="text"
                              value={academic.university}
                              onChange={(e) => updateAcademicEntry(academic.id, 'university', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              placeholder="e.g., University of Dhaka"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              GPA/CGPA
                            </label>
                            <input
                              type="text"
                              value={academic.gpa || ''}
                              onChange={(e) => updateAcademicEntry(academic.id, 'gpa', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              placeholder="e.g., 3.5 or 4.5"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Year of Completion
                            </label>
                            <input
                              type="text"
                              value={academic.year || ''}
                              onChange={(e) => updateAcademicEntry(academic.id, 'year', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              placeholder="e.g., 2023"
                            />
                          </div>

                          <div className="flex items-center">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={academic.isDoubleDegree}
                                onChange={(e) => updateAcademicEntry(academic.id, 'isDoubleDegree', e.target.checked)}
                                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                              />
                              <span className="text-sm font-medium text-gray-700">
                                Double Degree (e.g., Double Bachelor, Double Master's)
                              </span>
                            </label>
                          </div>
                        </div>

                        {/* Study Medium */}
                        <div className="mt-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Study Medium *
                          </label>
                          <StudyMediumSelector
                            selectedLanguage={academic.studyMedium || ''}
                            onLanguageChange={(code) => updateAcademicEntry(academic.id, 'studyMedium', code)}
                            required
                          />
                        </div>

                        {/* Documents Upload */}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <h4 className="text-sm font-semibold text-gray-900 mb-4">Academic Documents (PDF Format)</h4>
                          
                          <div className="space-y-4">
                            {/* Academic Certificate */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Academic Certificate (PDF) *
                              </label>
                              <div className="space-y-2">
                                <input
                                  type="file"
                                  accept=".pdf"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0] || null
                                    handleCertificateUpload(academic.id, file)
                                  }}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                                />
                                <p className="text-xs text-gray-500">
                                  Upload your academic certificate in PDF format
                                </p>
                                
                                {academic.certificate && (
                                  <div className="mt-2 flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                                    <div className="flex items-center gap-2 flex-1 min-w-0">
                                      <FileText className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                      <span className="text-sm text-gray-700 truncate">{academic.certificate.name}</span>
                                      <span className="text-xs text-gray-500">
                                        ({(academic.certificate.size / 1024).toFixed(1)} KB)
                                      </span>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => handleCertificateUpload(academic.id, null)}
                                      className="text-red-600 hover:text-red-700 p-1 hover:bg-red-50 rounded transition-colors"
                                    >
                                      <X className="w-4 h-4" />
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Academic Transcript/Mark Sheet */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Academic Transcript / Mark Sheet (PDF) *
                              </label>
                              <div className="space-y-2">
                                <input
                                  type="file"
                                  accept=".pdf"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0] || null
                                    handleTranscriptUpload(academic.id, file)
                                  }}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                                />
                                <p className="text-xs text-gray-500">
                                  Upload your academic transcript or mark sheet in PDF format
                                </p>
                                
                                {academic.transcript && (
                                  <div className="mt-2 flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                                    <div className="flex items-center gap-2 flex-1 min-w-0">
                                      <FileText className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                      <span className="text-sm text-gray-700 truncate">{academic.transcript.name}</span>
                                      <span className="text-xs text-gray-500">
                                        ({(academic.transcript.size / 1024).toFixed(1)} KB)
                                      </span>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => handleTranscriptUpload(academic.id, null)}
                                      className="text-red-600 hover:text-red-700 p-1 hover:bg-red-50 rounded transition-colors"
                                    >
                                      <X className="w-4 h-4" />
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-between pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setStep(1)}
                    className="text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
                  >
                    <ArrowLeft className="mr-2 w-5 h-5" />
                    Previous
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!validateStep2()}
                    className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    Next Step
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Tests (IELTS & Russian Language) */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Language Tests & Certificates
                  </h2>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => addTestEntry('ielts')}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm"
                    >
                      <Plus className="w-4 h-4" />
                      Add IELTS
                    </button>
                    <button
                      type="button"
                      onClick={() => addTestEntry('russian')}
                      className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors text-sm"
                    >
                      <Plus className="w-4 h-4" />
                      Add Russian Test
                    </button>
                  </div>
                </div>

                {formData.tests.length === 0 ? (
                  <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
                    <Award className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-4">No test certificates added yet.</p>
                    <p className="text-sm text-gray-500 mb-6">
                      Add your IELTS score and certificate, or Russian language test results from verified centers.
                    </p>
                    <div className="flex gap-3 justify-center">
                      <button
                        type="button"
                        onClick={() => addTestEntry('ielts')}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                        Add IELTS
                      </button>
                      <button
                        type="button"
                        onClick={() => addTestEntry('russian')}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                        Add Russian Test
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {formData.tests.map((test, index) => (
                      <div
                        key={test.id}
                        className={`border-2 rounded-lg p-6 ${
                          test.testType === 'ielts'
                            ? 'border-blue-200 bg-blue-50'
                            : 'border-red-200 bg-red-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Award className={`w-5 h-5 ${
                              test.testType === 'ielts' ? 'text-blue-600' : 'text-red-600'
                            }`} />
                            <h3 className="text-lg font-semibold text-gray-900">
                              {test.testType === 'ielts' ? 'IELTS Test' : 'Russian Language Test'} {index + 1}
                            </h3>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeTestEntry(test.id)}
                            className="text-red-600 hover:text-red-700 p-2 hover:bg-red-100 rounded-lg transition-colors"
                            title="Remove this test"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Score/Mark *
                            </label>
                            <input
                              type="text"
                              value={test.score}
                              onChange={(e) => updateTestEntry(test.id, 'score', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              placeholder={test.testType === 'ielts' ? 'e.g., 7.5' : 'e.g., A2, B1, B2, C1'}
                              required
                            />
                            <p className="mt-1 text-xs text-gray-500">
                              {test.testType === 'ielts'
                                ? 'Enter your overall IELTS band score'
                                : 'Enter your Russian language level (A1, A2, B1, B2, C1, C2)'}
                            </p>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Exam Date
                            </label>
                            <input
                              type="date"
                              value={test.examDate || ''}
                              onChange={(e) => updateTestEntry(test.id, 'examDate', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                          </div>

                          {test.testType === 'russian' && (
                            <>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Exam Center *
                                </label>
                                <select
                                  value={test.examCenter || ''}
                                  onChange={(e) => updateTestEntry(test.id, 'examCenter', e.target.value)}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                  required
                                >
                                  <option value="">Select exam center</option>
                                  <option value="Russia">Russia</option>
                                  <option value="Russian House">Russian House</option>
                                  <option value="Russian Cultural Center">Russian Cultural Center</option>
                                  <option value="Other Verified Center">Other Verified Center</option>
                                </select>
                              </div>

                              <div className="flex items-center">
                                <label className="flex items-center gap-2 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={test.isVerified}
                                    onChange={(e) => updateTestEntry(test.id, 'isVerified', e.target.checked)}
                                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  />
                                  <span className="text-sm font-medium text-gray-700">
                                    Verified Russian Cultural Center
                                  </span>
                                </label>
                              </div>
                            </>
                          )}
                        </div>

                        {/* Certificate Upload */}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Certificate Image *
                          </label>
                          <div className="space-y-2">
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => {
                                const file = e.target.files?.[0] || null
                                handleTestCertificateUpload(test.id, file)
                              }}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                            />
                            <p className="text-xs text-gray-500">
                              Upload your {test.testType === 'ielts' ? 'IELTS' : 'Russian language'} certificate (PDF, JPG, PNG)
                            </p>
                            
                            {test.certificate && (
                              <div className="mt-3 flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                  <FileText className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                  <span className="text-sm text-gray-700 truncate">{test.certificate.name}</span>
                                  <span className="text-xs text-gray-500">
                                    ({(test.certificate.size / 1024).toFixed(1)} KB)
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleTestCertificateUpload(test.id, null)}
                                  className="text-red-600 hover:text-red-700 p-1 hover:bg-red-50 rounded transition-colors"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-between pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setStep(2)}
                    className="text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
                  >
                    <ArrowLeft className="mr-2 w-5 h-5" />
                    Previous
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    disabled={!validateStep3()}
                    className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    Next Step
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Preferences (formerly Step 3) */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Course & University Preferences
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Course/Program *
                  </label>
                  <input
                    type="text"
                    value={formData.preferredCourse}
                    onChange={(e) => updateFormData('preferredCourse', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g., Medicine, Engineering, Computer Science"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred University *
                  </label>
                  <input
                    type="text"
                    value={formData.preferredUniversity}
                    onChange={(e) => updateFormData('preferredUniversity', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g., Moscow State University"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Any additional information you'd like to share..."
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setStep(3)}
                    className="text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
                  >
                    <ArrowLeft className="mr-2 w-5 h-5" />
                    Previous
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!validateStep4() || isSubmitting}
                    className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}


          </AnimatePresence>
        </div>

        {/* Info Note */}
        <div className="mt-8 p-4 bg-primary-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> After submitting, you'll be redirected to WhatsApp to complete 
            your application. Our team will contact you within 24 hours to discuss your application 
            and next steps.
          </p>
        </div>
      </div>
    </div>
  )
}


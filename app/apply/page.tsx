'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, Loader2 } from 'lucide-react'
import Link from 'next/link'

type FormData = {
  name: string
  email: string
  whatsapp: string
  academicLevel: string
  currentInstitution: string
  gpa: string
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
    academicLevel: '',
    currentInstitution: '',
    gpa: '',
    preferredCourse: '',
    preferredUniversity: '',
    additionalInfo: '',
  })

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const validateStep1 = () => {
    return formData.name && formData.email && formData.whatsapp
  }

  const validateStep2 = () => {
    return formData.academicLevel && formData.currentInstitution && formData.gpa
  }

  const validateStep3 = () => {
    return formData.preferredCourse && formData.preferredUniversity
  }

  const handleSubmit = async () => {
    if (!validateStep3()) return

    setIsSubmitting(true)

    // Create WhatsApp message
    const message = `Hello GlobalEdu Gateway! I'm ${formData.name}, interested in ${formData.preferredCourse} at ${formData.preferredUniversity}. Contact: ${formData.whatsapp}. Email: ${formData.email}`

    // Redirect to WhatsApp
    const whatsappNumber = '8801234567890' // Replace with actual number
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
            {[1, 2, 3].map((s) => (
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
                    {s === 3 && 'Preferences'}
                  </span>
                </div>
                {s < 3 && (
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Academic Background
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Academic Level *
                  </label>
                  <select
                    value={formData.academicLevel}
                    onChange={(e) => updateFormData('academicLevel', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select level</option>
                    <option value="High School">High School</option>
                    <option value="A-Levels">A-Levels</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor's">Bachelor's Degree</option>
                    <option value="Master's">Master's Degree</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Institution *
                  </label>
                  <input
                    type="text"
                    value={formData.currentInstitution}
                    onChange={(e) => updateFormData('currentInstitution', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="School/College/University name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GPA/CGPA *
                  </label>
                  <input
                    type="text"
                    value={formData.gpa}
                    onChange={(e) => updateFormData('gpa', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g., 3.5 or 4.5"
                    required
                  />
                </div>

                <div className="flex justify-between pt-4">
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

            {/* Step 3: Preferences */}
            {step === 3 && (
              <motion.div
                key="step3"
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
                    onClick={() => setStep(2)}
                    className="text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
                  >
                    <ArrowLeft className="mr-2 w-5 h-5" />
                    Previous
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!validateStep3() || isSubmitting}
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


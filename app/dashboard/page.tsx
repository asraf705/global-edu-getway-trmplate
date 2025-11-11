'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  LogOut, 
  CheckCircle2, 
  Circle, 
  FileText, 
  User, 
  Bell, 
  GraduationCap,
  Upload,
  CheckSquare
} from 'lucide-react'

const applicationSteps = [
  { id: 1, name: 'Profile Complete', completed: true },
  { id: 2, name: 'Documents Uploaded', completed: true },
  { id: 3, name: 'Application Submitted', completed: true },
  { id: 4, name: 'Response Received', completed: false },
  { id: 5, name: 'Visa Processing', completed: false },
  { id: 6, name: 'Ready to Fly', completed: false },
]

const tasks = [
  { id: 1, title: 'Upload passport copy', completed: true },
  { id: 2, title: 'Submit academic transcripts', completed: true },
  { id: 3, title: 'Complete medical certificate', completed: false },
  { id: 4, title: 'Confirm university preference', completed: false },
]

const notifications = [
  { id: 1, message: 'Your application is under review', time: '2 hours ago', unread: true },
  { id: 2, message: 'Document verification completed', time: '1 day ago', unread: true },
  { id: 3, message: 'Welcome to GlobalEdu Gateway!', time: '3 days ago', unread: false },
]

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    const userData = localStorage.getItem('user')

    if (!isAuthenticated || !userData) {
      router.push('/login')
      return
    }

    setUser(JSON.parse(userData))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
    router.push('/login')
  }

  if (!user) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const completedSteps = applicationSteps.filter(step => step.completed).length
  const progressPercentage = (completedSteps / applicationSteps.length) * 100

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Welcome, {user.name || 'Student'}! 👋
            </h1>
            <p className="text-gray-600 mt-2">Track your application progress</p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </motion.button>
        </div>

        {/* Application Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Application Progress</h2>
            <span className="text-primary-600 font-semibold">
              {completedSteps}/{applicationSteps.length} Complete
            </span>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-primary-500 h-3 rounded-full"
              />
            </div>
            <p className="text-sm text-gray-600 text-right">
              {Math.round(progressPercentage)}% Complete
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`p-4 rounded-lg border-2 ${
                  step.completed
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  {step.completed ? (
                    <CheckCircle2 className="w-8 h-8 text-primary-600" />
                  ) : (
                    <Circle className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <p className={`text-sm text-center font-medium ${
                  step.completed ? 'text-primary-700' : 'text-gray-600'
                }`}>
                  {step.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tasks Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <CheckSquare className="w-6 h-6 mr-2 text-primary-600" />
                Tasks
              </h2>
              <span className="text-sm text-gray-600">
                {tasks.filter(t => t.completed).length}/{tasks.length} completed
              </span>
            </div>
            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {task.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                  <span
                    className={`flex-1 ${
                      task.completed
                        ? 'text-gray-500 line-through'
                        : 'text-gray-900'
                    }`}
                  >
                    {task.title}
                  </span>
                  {!task.completed && (
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      Complete
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button className="mt-6 w-full flex items-center justify-center space-x-2 px-4 py-3 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors">
              <Upload className="w-5 h-5" />
              <span>Upload Documents</span>
            </button>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Bell className="w-6 h-6 mr-2 text-primary-600" />
                Notifications
              </h2>
              <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                {notifications.filter(n => n.unread).length} new
              </span>
            </div>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    notification.unread
                      ? 'bg-primary-50 border-primary-500'
                      : 'bg-gray-50 border-gray-300'
                  }`}
                >
                  <p className={`text-sm ${
                    notification.unread ? 'font-semibold text-gray-900' : 'text-gray-700'
                  }`}>
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full text-center text-sm text-primary-600 hover:text-primary-700 font-medium">
              View All
            </button>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <User className="w-8 h-8 text-primary-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Update Profile</h3>
            <p className="text-sm text-gray-600">Keep your information up to date</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <FileText className="w-8 h-8 text-primary-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">View Documents</h3>
            <p className="text-sm text-gray-600">Access your uploaded documents</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <GraduationCap className="w-8 h-8 text-primary-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Application Status</h3>
            <p className="text-sm text-gray-600">Check your application details</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


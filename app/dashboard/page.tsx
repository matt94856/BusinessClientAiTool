'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  AlertTriangle, 
  Bell, 
  BarChart3, 
  Clock, 
  DollarSign, 
  MessageSquare, 
  Settings, 
  Users,
  Zap,
  Lock,
  CheckCircle,
  XCircle,
  TrendingUp,
  TrendingDown
} from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  const { user, isLoading } = useUser()
  const [activeTab, setActiveTab] = useState('overview')
  const [showPaywall, setShowPaywall] = useState(true)

  // Mock data for demonstration
  const mockData = {
    totalInteractions: 1247,
    criticalIssues: 3,
    warningSigns: 8,
    resolvedToday: 12,
    avgResponseTime: '2.3 hours',
    customerValue: '$45,200',
    sentimentTrend: 'up',
    satisfactionScore: 4.8
  }

  const recentAlerts = [
    {
      id: 1,
      type: 'critical',
      customer: 'Sarah Johnson',
      issue: 'Product not working after update',
      value: '$2,400/year',
      time: '5 minutes ago',
      channel: 'Email'
    },
    {
      id: 2,
      type: 'warning',
      customer: 'Mike Chen',
      issue: 'Billing confusion',
      value: '$1,800/year',
      time: '15 minutes ago',
      channel: 'Chat'
    },
    {
      id: 3,
      type: 'warning',
      customer: 'Lisa Rodriguez',
      issue: 'Slow response time',
      value: '$3,200/year',
      time: '1 hour ago',
      channel: 'Social Media'
    }
  ]

  const sentimentData = [
    { label: 'Positive', value: 65, color: 'bg-success-500' },
    { label: 'Neutral', value: 25, color: 'bg-gray-400' },
    { label: 'Negative', value: 10, color: 'bg-danger-500' }
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">Please log in to access your dashboard.</p>
          <Link href="/api/auth/login" className="btn-primary">
            Log In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Last updated: 2 minutes ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user.name?.charAt(0) || user.email?.charAt(0) || 'U'}
                  </span>
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">{user.name || 'User'}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Interactions</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.totalInteractions}</p>
              </div>
              <div className="p-3 bg-primary-100 rounded-lg">
                <MessageSquare className="w-6 h-6 text-primary-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-success-600 mr-1" />
              <span className="text-success-600">+12% from last week</span>
            </div>
          </motion.div>

          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Critical Issues</p>
                <p className="text-2xl font-bold text-red-600">{mockData.criticalIssues}</p>
              </div>
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
              <span className="text-red-600">+2 from yesterday</span>
            </div>
          </motion.div>

          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Customer Value</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.customerValue}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-success-600 mr-1" />
              <span className="text-success-600">+8% from last month</span>
            </div>
          </motion.div>

          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Satisfaction</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.satisfactionScore}/5</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-success-600 mr-1" />
              <span className="text-success-600">+0.2 from last week</span>
            </div>
          </motion.div>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Alerts */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Alerts</h2>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`p-2 rounded-full ${
                      alert.type === 'critical' ? 'bg-red-100' : 'bg-yellow-100'
                    }`}>
                      {alert.type === 'critical' ? (
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                      ) : (
                        <Bell className="w-4 h-4 text-yellow-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900">{alert.customer}</h3>
                        <span className="text-sm text-gray-500">{alert.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{alert.issue}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                          {alert.channel}
                        </span>
                        <span className="text-xs text-gray-500">{alert.value}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sentiment Analysis */}
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Sentiment Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sentimentData.map((item, index) => (
                  <div key={item.label} className="text-center">
                    <div className={`w-16 h-16 rounded-full ${item.color} mx-auto mb-2 flex items-center justify-center`}>
                      <span className="text-white font-bold">{item.value}%</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Configure Integrations</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Manage Team</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">View Reports</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Upgrade CTA */}
            <div className="card bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
              <div className="text-center">
                <Lock className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Unlock Full Features</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Choose a plan to access real-time monitoring, advanced analytics, and team collaboration.
                </p>
                <button className="btn-primary w-full">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Features */}
        <div className="mt-12">
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Demo Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-success-600" />
                  <span className="font-medium text-gray-900">Email Monitoring</span>
                </div>
                <p className="text-sm text-gray-600">Monitor customer emails for sentiment changes</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-success-600" />
                  <span className="font-medium text-gray-900">Chat Integration</span>
                </div>
                <p className="text-sm text-gray-600">Connect Slack, Discord, and other chat platforms</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-success-600" />
                  <span className="font-medium text-gray-900">Social Media</span>
                </div>
                <p className="text-sm text-gray-600">Track mentions and comments across platforms</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-success-600" />
                  <span className="font-medium text-gray-900">Smart Alerts</span>
                </div>
                <p className="text-sm text-gray-600">Get notified when sentiment changes</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-success-600" />
                  <span className="font-medium text-gray-900">Analytics</span>
                </div>
                <p className="text-sm text-gray-600">Detailed reports and insights</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-success-600" />
                  <span className="font-medium text-gray-900">Team Collaboration</span>
                </div>
                <p className="text-sm text-gray-600">Assign and track customer issues</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 
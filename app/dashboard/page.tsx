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
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://raw.githubusercontent.com/matt94856/BusinessClientAiTool/refs/heads/master/whisprai.png" 
                    alt="Whispr AI Logo" 
                    className="w-8 h-8"
                  />
                  <h1 className="text-2xl font-bold text-primary-600">Whispr AI</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary-600">
                    {user.name?.[0] || user.email?.[0] || 'U'}
                  </span>
                </div>
                <span className="text-sm text-gray-700">{user.name || user.email}</span>
              </div>
              <Link href="/api/auth/logout" className="text-sm text-gray-500 hover:text-gray-700">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Paywall Banner */}
      {showPaywall && (
        <motion.div 
          className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Lock className="w-5 h-5" />
              <span className="font-semibold">Welcome! Choose a plan to unlock full features</span>
            </div>
            <button 
              onClick={() => setShowPaywall(false)}
              className="text-white hover:text-gray-200"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Monitor your customer interactions and sentiment in real-time</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Interactions</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.totalInteractions}</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Critical Issues</p>
                <p className="text-2xl font-bold text-danger-600">{mockData.criticalIssues}</p>
              </div>
              <div className="w-12 h-12 bg-danger-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-danger-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.avgResponseTime}</p>
              </div>
              <div className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-warning-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Customer Value</p>
                <p className="text-2xl font-bold text-success-600">{mockData.customerValue}</p>
              </div>
              <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-success-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Alerts */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Alerts</h2>
                <button className="text-sm text-primary-600 hover:text-primary-700">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`w-3 h-3 rounded-full mt-2 ${
                          alert.type === 'critical' ? 'bg-danger-500' : 'bg-warning-500'
                        }`}></div>
                        <div>
                          <p className="font-semibold text-gray-900">{alert.customer}</p>
                          <p className="text-sm text-gray-600">{alert.issue}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-xs text-gray-500">{alert.channel}</span>
                            <span className="text-xs text-gray-500">{alert.value}</span>
                            <span className="text-xs text-gray-500">{alert.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-xs bg-primary-600 text-white px-3 py-1 rounded">
                          Respond
                        </button>
                        <button className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded">
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sentiment Overview */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sentiment Overview</h3>
              <div className="space-y-3">
                {sentimentData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

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
      </div>
    </div>
  )
} 
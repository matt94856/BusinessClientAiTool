'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  MessageSquare, 
  Shield, 
  TrendingUp, 
  Users,
  Zap,
  BarChart3,
  Bell,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const { user, isLoading } = useUser()
  const [activeTab, setActiveTab] = useState('features')

  const features = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Real-Time Sentiment Detection",
      description: "Instantly detect negative sentiment in customer emails, chats, and social media before it escalates."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Alerts",
      description: "Get immediate notifications when customers show frustration, with suggested resolution strategies."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Customer Value Tracking",
      description: "See which customers are at risk and their lifetime value to prioritize your response."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time Optimization",
      description: "Track and improve your response times to prevent customer churn."
    }
  ]

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-success-600" />,
      title: "Save Revenue",
      description: "Prevent customer churn by catching issues early. Save $100-1,000+ per customer."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-600" />,
      title: "Protect Reputation",
      description: "Stop negative reviews before they happen by resolving issues proactively."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-warning-600" />,
      title: "Improve Satisfaction",
      description: "Boost customer satisfaction scores by responding to issues faster and more effectively."
    },
    {
      icon: <Users className="w-6 h-6 text-primary-600" />,
      title: "Scale Support",
      description: "Handle more customers with the same team by automating issue detection and prioritization."
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      features: [
        "Up to 1,000 interactions/month",
        "Email sentiment monitoring",
        "Basic alerts",
        "Dashboard access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      features: [
        "Up to 5,000 interactions/month",
        "All channels (email, chat, social)",
        "Advanced analytics",
        "Team collaboration",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      features: [
        "Unlimited interactions",
        "All features",
        "Custom AI training",
        "Dedicated support",
        "SLA guarantees",
        "On-premise option"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
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
              {user ? (
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link href="/login" className="text-gray-600 hover:text-gray-900">
                    Sign In
                  </Link>
                  <Link href="/signup" className="btn-primary">
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Stop Losing Customers to
            <span className="text-primary-600"> Poor Service</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI-powered customer service monitoring that detects negative sentiment before it escalates. 
            Get instant alerts and save customer relationships.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {user ? (
              <Link href="/dashboard" className="btn-primary text-lg px-8 py-4">
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link href="/signup" className="btn-primary text-lg px-8 py-4">
                  Start Free Trial
                </Link>
                <button className="border border-primary-600 text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-primary-50 transition-all duration-200 text-lg">
                  Watch Demo
                </button>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Businesses Choose Whispr AI
            </h2>
            <p className="text-lg text-gray-600">
              Stop customer churn before it happens with intelligent monitoring
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transform Your Customer Service
            </h2>
            <p className="text-lg text-gray-600">
              See measurable improvements in customer satisfaction and retention
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`bg-white border rounded-lg p-8 ${
                  plan.popular ? 'border-primary-500 shadow-lg' : 'border-gray-200'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-primary-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-success-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full btn-primary">
                  {user ? 'Upgrade Plan' : 'Start Free Trial'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Stop Losing Customers?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join hundreds of businesses already using Whispr AI to protect their customer relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link href="/dashboard" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-all duration-200">
                Go to Dashboard
              </Link>
            ) : (
              <Link href="/signup" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-all duration-200">
                Start Free Trial
              </Link>
            )}
            <button className="border border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-400 mb-4">Whispr AI</h3>
              <p className="text-gray-400">
                AI-powered customer service monitoring that prevents customer churn before it happens.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
                <li><a href="#" className="hover:text-white">Contact Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Whispr AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 
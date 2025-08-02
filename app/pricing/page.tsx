'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Star,
  Lock,
  Zap,
  Users,
  BarChart3,
  Bell,
  Shield
} from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const { user } = useUser()
  const [selectedPlan, setSelectedPlan] = useState('professional')
  const [isProcessing, setIsProcessing] = useState(false)

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 19,
      period: 'month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 interactions/month',
        'Email sentiment monitoring',
        'Basic alerts',
        'Dashboard access',
        'Email support',
        'Basic analytics'
      ],
      popular: false,
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 49,
      period: 'month',
      description: 'Ideal for growing businesses with multiple channels',
      features: [
        'Up to 5,000 interactions/month',
        'All channels (email, chat, social)',
        'Advanced analytics',
        'Team collaboration',
        'Priority support',
        'Custom integrations',
        'Advanced reporting',
        'API access'
      ],
      popular: true,
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 99,
      period: 'month',
      description: 'For large teams with unlimited needs',
      features: [
        'Unlimited interactions',
        'Advanced AI insights',
        'Predictive analytics',
        'Custom reporting',
        'Dedicated support',
        'Full API access',
        'White-label options',
        'Custom integrations'
      ],
      popular: false,
      icon: <BarChart3 className="w-6 h-6" />
    }
  ]

  const handleSubscribe = async (planId: string) => {
    if (!user) {
      // Redirect to login
      window.location.href = '/api/auth/login'
      return
    }

    setIsProcessing(true)
    
    try {
      // Here you would integrate with PayPal
      // For now, we'll simulate the process
      console.log(`Subscribing to ${planId} plan`)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Redirect to dashboard with success message
      window.location.href = '/dashboard?plan=selected'
    } catch (error) {
      console.error('Subscription error:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary-600">
                Whispr AI
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <Link href="/dashboard" className="btn-primary">
                  Dashboard
                </Link>
              ) : (
                <Link href="/api/auth/login" className="btn-primary">
                  Get Started
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose the plan that fits your business. Start free, upgrade as you grow. 
            No hidden fees, no surprises.
          </motion.p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`card relative ${plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-1">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe(plan.id)}
                disabled={isProcessing}
                className={`w-full btn-primary ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  'Choose Plan'
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I change my plan later?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is there a free trial?
              </h3>
              <p className="text-gray-600">
                Yes! You can create a free account and explore the dashboard before choosing a plan.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards and PayPal. All payments are processed securely.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-600">
                Absolutely. You can cancel your subscription at any time with no cancellation fees.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
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
              <Link href="/api/auth/login" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-all duration-200">
                Start Free Trial
              </Link>
            )}
            <Link href="/" className="border border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 
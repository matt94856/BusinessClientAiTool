# SentimentGuard - AI Customer Service Sentiment Tracker

An AI-powered tool that monitors customer interactions in real-time, detects negative sentiment before it escalates, and automatically alerts the right person to take action.

## 🚀 Features

### Core Functionality
- **Real-Time Sentiment Detection**: Monitor emails, chats, and social media for negative sentiment
- **Smart Alerts**: Get immediate notifications when customers show frustration
- **Customer Value Tracking**: See which customers are at risk and their lifetime value
- **Response Time Optimization**: Track and improve response times to prevent churn

### Business Impact
- **Save Revenue**: Prevent customer churn by catching issues early ($100-1,000+ per customer)
- **Protect Reputation**: Stop negative reviews before they happen
- **Improve Satisfaction**: Boost customer satisfaction scores
- **Scale Support**: Handle more customers with the same team

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Backend & Services
- **Auth0** - Authentication (free tier)
- **OpenAI API** - Sentiment analysis
- **Make.com** - Automation workflows (free tier)
- **Supabase** - Database (free tier)
- **Vercel** - Hosting (free tier)

### Payment
- **PayPal** - Payment processing

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Auth0 account
- OpenAI API key
- Make.com account (optional)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sentimentguard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   # Auth0 Configuration
   AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
   AUTH0_BASE_URL='http://localhost:3000'
   AUTH0_ISSUER_BASE_URL='https://your-domain.auth0.com'
   AUTH0_CLIENT_ID='your-client-id'
   AUTH0_CLIENT_SECRET='your-client-secret'

   # OpenAI Configuration
   OPENAI_API_KEY='your-openai-api-key'
   ```

4. **Set up Auth0**
   - Create an Auth0 account
   - Create a new application
   - Set callback URLs: `http://localhost:3000/api/auth/callback`
   - Set logout URLs: `http://localhost:3000`
   - Copy your domain, client ID, and client secret to `.env.local`

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### For Users

1. **Sign Up**: Create a free account using Auth0
2. **Browse Features**: Explore the dashboard and see what's available
3. **Choose Plan**: Select a subscription plan to unlock full features
4. **Connect Integrations**: Set up email, chat, and social media monitoring
5. **Monitor Alerts**: Receive real-time notifications about customer sentiment

### Subscription Plans

- **Starter ($19/month)**: Up to 1,000 interactions/month
- **Professional ($49/month)**: Up to 5,000 interactions/month
- **Enterprise ($99/month)**: Unlimited interactions

## 🔧 Configuration

### Auth0 Setup
1. Go to [Auth0 Dashboard](https://manage.auth0.com/)
2. Create a new application
3. Configure callback and logout URLs
4. Set up user profiles and permissions

### OpenAI API
1. Get your API key from [OpenAI Platform](https://platform.openai.com/)
2. Add to `.env.local`
3. Monitor usage in OpenAI dashboard

### Make.com Integration (Optional)
1. Create a Make.com account
2. Set up webhook endpoints
3. Configure automation workflows
4. Add webhook URL to environment variables

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy automatically

### Environment Variables for Production

```env
AUTH0_SECRET='your-production-secret'
AUTH0_BASE_URL='https://your-domain.vercel.app'
AUTH0_ISSUER_BASE_URL='https://your-domain.auth0.com'
AUTH0_CLIENT_ID='your-client-id'
AUTH0_CLIENT_SECRET='your-client-secret'
OPENAI_API_KEY='your-openai-api-key'
```

## 📊 Analytics & Monitoring

### Built-in Analytics
- Customer interaction tracking
- Sentiment trend analysis
- Response time metrics
- Customer value calculations

### Monitoring
- Real-time alert system
- Performance monitoring
- Error tracking
- Usage analytics

## 🔒 Security

### Data Protection
- All data encrypted in transit
- Secure authentication via Auth0
- API key protection
- GDPR compliance ready

### Privacy
- No customer data stored permanently
- Anonymized analytics
- User consent management
- Data retention policies

## 🛠️ Development

### Project Structure
```
├── app/
│   ├── api/           # API routes
│   ├── dashboard/     # Dashboard pages
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Homepage
├── components/        # Reusable components
├── lib/              # Utility functions
├── public/           # Static assets
└── types/            # TypeScript types
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the README and inline comments
- **Issues**: Create an issue on GitHub
- **Email**: support@sentimentguard.com

## 🚀 Roadmap

### Phase 1 (Current)
- ✅ Basic sentiment analysis
- ✅ User authentication
- ✅ Dashboard interface
- ✅ Subscription management

### Phase 2 (Next)
- 🔄 Advanced integrations
- 🔄 Team collaboration
- 🔄 Custom reporting
- 🔄 API access

### Phase 3 (Future)
- 📋 Predictive analytics
- 📋 Machine learning models
- 📋 Enterprise features
- 📋 Mobile app

## 💰 Pricing

### Free Tier
- Account creation
- Dashboard preview
- Basic analytics

### Paid Plans
- **Starter**: $19/month
- **Professional**: $49/month  
- **Enterprise**: $99/month

## 📈 Business Model

### Revenue Streams
- Subscription fees
- Enterprise licensing
- API usage fees
- Professional services

### Target Market
- Small to medium businesses
- Customer service teams
- E-commerce companies
- SaaS companies

---

**Built with ❤️ using Next.js, Auth0, and OpenAI** 
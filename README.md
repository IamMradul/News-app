# 📰 News Sleuth 

> **Your intelligent news companion for staying informed**

🌐 **[Live Demo](https://newsly-global.vercel.app/)** | 📚 [Documentation](#-quick-start)

A modern, interactive news application that brings you the world's latest stories with smart categorization and elegant design. Explore curated content from trusted sources worldwide with an intuitive, visually appealing interface.

## ✨ Features

### 🎯 Smart News Discovery
- **Intelligent Categorization**: Top stories are automatically ranked with King (👑), Queen (👸), and Jack (🎭) badges based on importance, impact, and engagement
- **Relevance Scoring**: Advanced algorithm scores articles based on keywords, source reliability, and recency
- **20+ Categories**: Browse news by Technology, Business, Sports, Entertainment, Health, Science, Politics, and more
- **Smart Search**: Powerful search with spell correction and suggested queries when no results are found

### 🎨 Delightful User Experience
- **Interactive Cards**: Hidden easter eggs on top story badges reveal the significance of each news category
- **Smooth Animations**: Card reveal effects, hover interactions, and fluid transitions throughout
- **Dynamic Background**: Atmospheric video background with subtle overlay for enhanced readability
- **Responsive Design**: Seamless experience on desktop, tablet, and mobile devices

### 🌙 Modern Dark Theme
- Eye-friendly dark interface with gradient accents
- Smooth hover effects and visual feedback
- Optimized for extended reading sessions

### 📖 Rich Article View
- Detailed article pages with full content
- Clean typography for comfortable reading
- Direct links to original sources

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager
- A free News API key from [newsapi.org](https://newsapi.org/)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd news-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEWS_API_KEY=your_api_key_here
   ```
   
   > 💡 **Get your API key**: Sign up at [newsapi.org](https://newsapi.org/) for a free API key (100 requests/day)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 Usage Guide

### Exploring News
- **Top Stories**: The three featured cards at the top show the most important news of the day
- **Card Badges**: Click the K, Q, or J badges on top cards to learn about their significance
- **Hover Effects**: Hover over any card to expand the description and see enhanced visuals

### Searching for News
1. Enter your query in the search bar
2. Get instant results with relevance-based ranking
3. If no results found, the app suggests corrected queries

### Filtering by Category
- Click any category button to filter news by topic
- Click "Show More" to expand all 20+ categories
- Click the same category again to clear the filter

### Reading Articles
- Click any news card to view the full article
- See the complete story with images and formatted content
- Visit the original source for the full publication

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15.3** | React framework with App Router |
| **React 19** | UI library with latest features |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **News API** | Real-time news data |
| **Axios** | HTTP client for API requests |
| **date-fns** | Date formatting |
| **Heroicons** | Beautiful icons |
| **Cheerio** | HTML parsing for article content |

## 📁 Project Structure

```
news-app/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main news feed page
│   │   ├── layout.tsx            # Root layout with dark theme
│   │   ├── globals.css           # Global styles & animations
│   │   ├── article/              # Article detail page
│   │   └── api/                  # API routes
│   └── components/
│       └── BackgroundVideo.tsx   # Dynamic video background
├── public/                       # Static assets
└── .env.local                    # Environment variables
```

## 🎨 Key Features Explained

### Intelligent Article Scoring
The app uses a multi-factor scoring system:
- **Breaking News Keywords**: urgent, exclusive, crisis, emergency
- **Impact Keywords**: analysis, breakthrough, policy, summit
- **Engagement Keywords**: trending, viral, popular, spotlight
- **Source Reliability**: Bonus points for Reuters, AP, BBC, CNN, NYT
- **Recency**: Higher scores for articles published within 24 hours

### Easter Eggs 🥚
Click on the K, Q, or J badges on top stories to discover hidden messages about each card's significance!

## 🚢 Deployment

### Live Application

🎉 **This app is live at: [newsly-global.vercel.app](https://newsly-global.vercel.app/)**

### Deploy Your Own Version on Vercel

1. Push your code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Add your `NEWS_API_KEY` environment variable
5. Deploy!

Vercel automatically optimizes Next.js applications for peak performance.

### Other Platforms
This Next.js app can also be deployed to:
- Netlify
- Railway
- DigitalOcean
- AWS Amplify

## 📄 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📧 Support

Having trouble? Check the [Next.js documentation](https://nextjs.org/docs) or open an issue.

---

**Made with ❤️ using Next.js and News API**

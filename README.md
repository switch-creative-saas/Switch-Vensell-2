# Switch VendSell - Nigerian eCommerce Platform

A complete eCommerce platform designed specifically for African creators and entrepreneurs. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Instant Store Setup**: Create your online store in minutes with our drag-and-drop builder
- **Nigerian Payments**: Integrated Paystack & Flutterwave for seamless Naira transactions
- **Mobile-First Design**: Your store looks perfect on every device, especially mobile
- **AI-Powered Tools**: Generate product descriptions and get smart pricing suggestions
- **Sales Analytics**: Track your performance with detailed insights and reports
- **Custom Domains**: Use your own domain or get a free .switch.store subdomain

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Paystack Integration
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd switch-creative-saas
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your actual values:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

   # Paystack Configuration
   PAYSTACK_SECRET_KEY=your-paystack-secret-key
   PAYSTACK_PUBLIC_KEY=your-paystack-public-key

   # App Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

1. **Create a Supabase project** at [supabase.com](https://supabase.com)

2. **Run the database migrations**:
   ```bash
   # Copy the SQL from scripts/create-tables.sql
   # and run it in your Supabase SQL editor
   ```

3. **Seed the database** (optional):
   ```bash
   # Copy the SQL from scripts/seed-data.sql
   # and run it in your Supabase SQL editor
   ```

## 📁 Project Structure

```
switch-creative-saas/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── dashboard-layout.tsx
├── lib/                  # Utility functions
│   ├── supabase.ts       # Supabase client
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── scripts/              # Database scripts
```

## 🎨 Customization

### Themes
The app uses a custom theme system with CSS variables. You can customize colors in `app/globals.css`.

### Components
All UI components are built with shadcn/ui and can be customized in the `components/ui/` directory.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- Use TypeScript for all new files
- Follow the existing component patterns
- Use Tailwind CSS for styling
- Prefer functional components with hooks

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security

- All API routes are protected with proper validation
- Environment variables are used for sensitive data
- Supabase RLS (Row Level Security) is enabled
- Input validation is implemented throughout

## 📱 Mobile Support

The app is fully responsive and optimized for mobile devices. All components are mobile-first and work seamlessly across all screen sizes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Documentation**: Check the `/docs` folder
- **Issues**: Create an issue on GitHub
- **Email**: support@switchvend.com
- **WhatsApp**: +234 XXX XXX XXXX

## 🗺️ Roadmap

- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] API for third-party integrations
- [ ] White-label solutions
- [ ] Advanced AI features

---

Made with ❤️ in Nigeria 
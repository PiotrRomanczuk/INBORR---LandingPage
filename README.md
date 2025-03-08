# Inborr Apartment Rentals

A modern Next.js application for short-term apartment rentals in Warsaw, featuring a responsive design, dynamic routing, and interactive components.

## 🌟 Features

- **Dynamic Apartment Listings**: Browse through available apartments with detailed information
- **Interactive Gallery**: View high-quality images of each apartment
- **Booking System**: Easy-to-use reservation dashboard
- **Contact Form**: Direct email communication with property owners
- **Responsive Design**: Optimized for all device sizes
- **Multi-language Support**: Available in Polish and English
- **SEO Optimized**: Enhanced visibility for search engines
- **Dark/Light Mode**: Theme switching capability
- **Interactive Maps**: Location visualization using Google Maps
- **Testimonials**: Real customer reviews and feedback

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Maps**: Google Maps API
- **Email**: Mailgun
- **Analytics**: Google Analytics
- **Form Handling**: React Hook Form
- **Type Safety**: TypeScript
- **State Management**: React Context
- **Image Optimization**: Next.js Image Component

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/inborr.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
MAILGUN_API_KEY=your_mailgun_api_key
MAILGUN_DOMAIN=your_mailgun_domain
RECIPIENT_EMAIL=your_email
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
inborr/
├── app/                # Next.js app directory
│   ├── api/           # API routes
│   ├── apartments/    # Apartment pages
│   └── kontakt/       # Contact pages
├── components/        # Reusable components
├── lib/              # Utility functions
├── public/           # Static assets
└── styles/           # Global styles
```

## 🔧 Configuration

The project uses several configuration files:

- `tailwind.config.js` - Tailwind CSS configuration
- `next.config.js` - Next.js configuration
- `components.json` - shadcn/ui configuration

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop computers

## 🚀 Deployment

The application is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email [your-email@example.com](mailto:your-email@example.com)

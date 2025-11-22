# Smart Expense Tracker

A modern, feature-rich expense tracking application built with Next.js 15, TypeScript, and Tailwind CSS. This application allows users to record, categorize, and analyze their daily expenses with intelligent insights and beautiful visualizations.

## 🚀 Features

### Core Functionality
- **User Authentication**: Secure login and registration system
- **Expense Management**: Add, edit, and delete expenses with ease
- **Categorization**: Organize expenses by categories (Food, Transportation, Shopping, etc.)
- **Real-time Updates**: Instant reflection of changes across the application
- **Data Analytics**: Comprehensive spending insights with charts and graphs

### Analytics & Reports
- **Spending Overview**: Total spending, average expense, and expense count
- **Category Breakdown**: Pie chart showing spending distribution
- **Monthly Trends**: Bar chart displaying spending patterns over time
- **CSV Export**: Download expense data for external analysis
- **Recent Transactions**: Quick view of latest expenses

### User Experience
- **Modern Design**: Clean, minimalistic interface with deep blues and golden yellows
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Smooth Animations**: Subtle transitions and hover effects
- **Intuitive Navigation**: Easy-to-use interface with clear visual hierarchy

## 🛠 Technology Stack

### Frontend
- **Next.js 15** with App Router
- **TypeScript 5** for type safety
- **Tailwind CSS 4** for styling
- **shadcn/ui** component library
- **Recharts** for data visualization
- **Lucide React** for icons
- **date-fns** for date formatting

### Backend
- **Next.js API Routes** for serverless functions
- **Prisma ORM** for database management
- **SQLite** for data storage
- **bcryptjs** for password hashing

### Development Tools
- **ESLint** for code quality
- **TypeScript** for static typing
- **Hot Reload** for development efficiency

## 📁 Project Structure

```
expense-tracker/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   └── register/
│   │   │   ├── expenses/
│   │   │   └── summary/
│   │   ├── dashboard/
│   │   ├── summary/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ui/           # shadcn/ui components
│   ├── contexts/
│   │   └── AuthContext.tsx
│   └── lib/
│       ├── db.ts         # Prisma client
│       └── utils.ts
├── prisma/
│   └── schema.prisma     # Database schema
└── public/
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd expense-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```bash
   DATABASE_URL="file:./dev.db"
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   npm run db:generate
   ```
   Note: `prisma generate` runs automatically before builds, but you should run it manually the first time.

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

The application uses a simple yet powerful database structure:

### Users Table
- `id`: Unique identifier
- `email`: User email (unique)
- `name`: User's name
- `createdAt`: Account creation date
- `updatedAt`: Last update date

### Expenses Table
- `id`: Unique identifier
- `amount`: Expense amount
- `category`: Expense category
- `date`: Expense date
- `notes`: Optional notes
- `userId`: Foreign key to users table
- `createdAt`: Entry creation date
- `updatedAt`: Last update date

## 🔐 Authentication

The application uses a simple authentication system:

1. **Registration**: Users can create an account with name, email, and password
2. **Login**: Existing users can sign in with their credentials
3. **Session Management**: User sessions are maintained using localStorage
4. **Protected Routes**: Dashboard and summary pages require authentication

## 📈 API Endpoints

### Authentication
- `POST /api/auth/register` - Create a new user account
- `POST /api/auth/login` - Authenticate user

### Expenses
- `GET /api/expenses?userId={id}` - Get all expenses for a user
- `POST /api/expenses` - Create a new expense
- `PUT /api/expenses/{id}` - Update an existing expense
- `DELETE /api/expenses/{id}` - Delete an expense

### Analytics
- `GET /api/summary?userId={id}` - Get spending analytics and summary

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#3B82F6` (Blue 600)
- **Secondary Amber**: `#F59E0B` (Amber 500)
- **Background**: Gradient from blue-50 to amber-50
- **Text**: Blue-900 for headings, blue-700 for body text

### Typography
- **Headings**: Bold, large font sizes with blue-900 color
- **Body Text**: Regular weight with blue-700 color
- **UI Elements**: Consistent sizing and spacing

### Components
- **Cards**: Semi-transparent with blur effect
- **Buttons**: Blue primary, amber accents
- **Forms**: Clean inputs with blue focus states
- **Charts**: Custom colors matching the theme

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema changes
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:reset` - Reset database

## 🌟 Features in Detail

### Expense Management
- **Add Expenses**: Simple form with amount, category, date, and notes
- **Edit Expenses**: Click the edit button to modify existing entries
- **Delete Expenses**: Remove expenses with confirmation dialog
- **Category Selection**: Choose from predefined categories or add custom ones

### Analytics Dashboard
- **Overview Cards**: Key metrics displayed prominently
- **Spending Charts**: Visual representation of spending patterns
- **Category Analysis**: Detailed breakdown by category
- **Monthly Trends**: Track spending over time

### User Experience
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Loading States**: Visual feedback during data operations
- **Error Handling**: User-friendly error messages
- **Smooth Transitions**: Subtle animations for better UX

## 🚀 Deployment

### Production Build
1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

### Environment Variables
Create a `.env` file in the root directory with:
```
# Database
DATABASE_URL="file:./dev.db"

# Server Configuration (optional)
PORT=3000
HOSTNAME=0.0.0.0
NODE_ENV=production
```

### Windows Compatibility
This project now uses `cross-env` for cross-platform environment variable handling. All scripts work on Windows, macOS, and Linux.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 Future Enhancements

- **Google OAuth Integration**: Sign in with Google account
- **Advanced Analytics**: AI-powered spending insights
- **Budget Management**: Set and track budget limits
- **Recurring Expenses**: Automatic expense tracking
- **Multi-currency Support**: Handle different currencies
- **Mobile App**: Native mobile application
- **Data Export**: Multiple export formats (PDF, Excel)
- **Collaboration**: Shared accounts for families

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions, please:
1. Check the existing documentation
2. Search for similar issues
3. Create a new issue with detailed information

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**
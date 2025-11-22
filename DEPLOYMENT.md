# Deployment Guide

This guide will help you deploy the Smart Expense Tracker application.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Database (SQLite for development, PostgreSQL/MySQL for production)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="file:./dev.db"

# Server Configuration (optional)
PORT=3000
HOSTNAME=0.0.0.0
NODE_ENV=production
```

For production databases, use connection strings like:
- PostgreSQL: `DATABASE_URL="postgresql://user:password@localhost:5432/dbname"`
- MySQL: `DATABASE_URL="mysql://user:password@localhost:3306/dbname"`

## Build Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up the database:**
   ```bash
   npm run db:push
   npm run db:generate
   ```

3. **Build the application:**
   ```bash
   npm run build
   ```

4. **Start the production server:**
   ```bash
   npm run start
   ```

## Platform-Specific Deployment

### Vercel

1. Connect your repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Set build command: `npm run build`
4. Set output directory: `.next`
5. Deploy!

### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/server.ts ./server.ts
COPY --from=builder /app/prisma ./prisma
RUN npx prisma generate
EXPOSE 3000
CMD ["npm", "run", "start"]
```

### Traditional Server (PM2)

1. Install PM2: `npm install -g pm2`
2. Build the application: `npm run build`
3. Start with PM2: `pm2 start npm --name "expense-tracker" -- start`
4. Save PM2 configuration: `pm2 save`
5. Setup startup: `pm2 startup`

## Windows Compatibility

All scripts are now Windows-compatible using `cross-env`. The project works on:
- Windows
- macOS
- Linux

## Troubleshooting

### Build Errors

- Ensure all dependencies are installed: `npm install`
- Check that Prisma schema is valid: `npm run db:generate`
- Verify environment variables are set correctly

### Database Connection Issues

- Ensure `DATABASE_URL` is set correctly
- For SQLite, ensure the database file path is writable
- For production databases, verify connection credentials

### Port Already in Use

- Change the `PORT` environment variable
- Or kill the process using the port

## Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Use a production database (not SQLite)
- [ ] Set up proper error logging
- [ ] Configure HTTPS
- [ ] Set up database backups
- [ ] Configure CORS if needed
- [ ] Set up monitoring and alerts


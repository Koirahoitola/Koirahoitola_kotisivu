# Koirahoitola Kotisivu

A modern web application for a dog kennel/daycare service, built with Laravel backend and TypeScript/Vite frontend.

## 📋 Overview

This project is a website for "Koirahoitola" (Dog Kennel/Daycare in Finnish) featuring a clean separation between frontend and backend services. The application demonstrates a full-stack architecture with a RESTful API backend and a modern TypeScript frontend.

## 🏗️ Project Structure

```
Koirahoitola_kotisivu/
├── backend-laravel/    # Laravel backend API
├── frontend/           # TypeScript/Vite frontend
└── README.md          # This file
```

## 🛠️ Technology Stack

### Backend
- **Laravel 12** - PHP web application framework
- **PHP 8.2+** - Server-side scripting language
- **MySQL** - Relational database
- **Composer** - PHP dependency manager

### Frontend
- **TypeScript 5.9+** - Typed JavaScript
- **Vite 7.2+** - Fast build tool and development server
- **Modern CSS** - Styling

### Development Tools
- **Pest** - PHP testing framework
- **Laravel Pint** - PHP code style fixer
- **Laravel Sail** - Docker development environment

## 🚀 Getting Started

### Prerequisites

- PHP 8.2 or higher
- Composer
- Node.js (LTS version recommended)
- npm or yarn
- MySQL database server

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend-laravel
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Copy the environment file:
   ```bash
   cp .env.example .env
   ```

4. Configure your database settings in `.env`:
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=backend
   DB_USERNAME=root
   DB_PASSWORD=your_password
   ```

5. Generate application key:
   ```bash
   php artisan key:generate
   ```

6. Run database migrations:
   ```bash
   php artisan migrate
   ```

7. Install Node dependencies and build assets:
   ```bash
   npm install
   npm run build
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃 Running the Application

### Development Mode

#### Option 1: Run Services Separately

**Backend:**
```bash
cd backend-laravel
php artisan serve
```
The API will be available at `http://127.0.0.1:8000`

**Frontend:**
```bash
cd frontend
npm run dev
```
The frontend will be available at `http://localhost:5173` (or another port shown in terminal)

#### Option 2: Run All Services Together (Backend only)

From the `backend-laravel` directory:
```bash
composer dev
```
This command uses concurrently to run:
- Laravel development server
- Queue listener
- Vite development server

### Production Build

**Frontend:**
```bash
cd frontend
npm run build
```

**Backend:**
```bash
cd backend-laravel
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## 🧪 Testing

Run the backend tests:
```bash
cd backend-laravel
composer test
# or
php artisan test
```

## 📡 API Endpoints

### Test Endpoint
- `GET /api/test` - Returns a test message confirming the API is working

Example response:
```json
{
  "status": "ok",
  "message": "API toimii api.php:n kautta!"
}
```

## 🔧 Available Scripts

### Backend (backend-laravel)
- `composer setup` - Complete setup (install, generate key, migrate)
- `composer dev` - Run all development servers
- `composer test` - Run tests

### Frontend (frontend)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Key Files and Directories

### Backend
- `routes/api.php` - API route definitions
- `app/` - Application code (controllers, models, etc.)
- `database/migrations/` - Database migrations
- `config/` - Configuration files
- `tests/` - Test files

### Frontend
- `src/main.ts` - Application entry point
- `src/style.css` - Global styles
- `index.html` - HTML template
- `tsconfig.json` - TypeScript configuration
- `vite.config.js` - Vite configuration

## 🔒 Environment Variables

Key environment variables (see `backend-laravel/.env.example`):
- `APP_NAME` - Application name
- `APP_ENV` - Environment (local, production)
- `APP_KEY` - Application encryption key
- `DB_*` - Database configuration
- `VITE_APP_NAME` - Frontend app name

## 🐳 Docker Support (Laravel Sail)

Laravel Sail is included for Docker-based development:

```bash
cd backend-laravel
./vendor/bin/sail up
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Code Style

- Backend: Follow Laravel conventions and use Laravel Pint for formatting
- Frontend: Follow TypeScript best practices

## 📄 License

This project is proprietary software for Koirahoitola.

## 🔗 Links

- Repository: [https://github.com/Koirahoitola/Koirahoitola_kotisivu](https://github.com/Koirahoitola/Koirahoitola_kotisivu)

## ⚙️ Troubleshooting

### Common Issues

**API connection errors:**
- Ensure the backend server is running on `http://127.0.0.1:8000`
- Check CORS settings if accessing from different origins
- Verify the database is running and configured correctly

**Frontend build errors:**
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version compatibility

**Database migration errors:**
- Ensure database exists and credentials are correct
- Check PHP PDO MySQL extension is installed
- Run `php artisan migrate:fresh` to reset migrations (⚠️ this will delete all data)

## 📞 Support

For support, please open an issue in the GitHub repository.

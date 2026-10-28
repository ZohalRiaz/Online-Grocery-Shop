
# Backend - FreshMart Online Grocery Shop

## Technology Stack
- Django + Django REST Framework
- PostgreSQL (hosted on Supabase)
- Supabase Cloud Storage (product images)
- Token Authentication
- Hosted on Render

## Project Structure
- `config/` - Django project settings and root URLs
- `store/` - Main app (models, serializers, views, tests)
- `store/management/commands/` - `seed_data` command for sample data
- `media/` - Local media folder (development only)

## Database
PostgreSQL on Supabase. Tables are managed by Django migrations.
See `backend-schema.md` for the table reference and `database-setup.md` for the full database documentation.

## API Endpoints
See the four API documentation files:
- `API-Endpoints-Sprint-1.md` - Auth and catalog
- `API-Endpoints-Sprint-2.md` - Shopping cart
- `API-Endpoints-Sprint-3.md` - Checkout and orders
- `API-Endpoints-Sprint-4.md` - Admin Panel

## Environment Variables
These are set in the `.env` file locally and in the Render dashboard in production:
`SECRET_KEY`, `DEBUG`, `DATABASE_URL`, `CORS_ALLOWED_ORIGINS`, `SUPABASE_PROJECT_ID`, `SUPABASE_BUCKET`, `SUPABASE_S3_ACCESS_KEY`, `SUPABASE_S3_SECRET_KEY`

## Setup Instructions
1. Install the backend dependencies: Django, Django REST Framework, django-cors-headers, dj-database-url, psycopg2-binary, django-storages, boto3, and python-dotenv.
2. Create the `.env` file and fill in the variables listed in the Environment Variables section.
3. Run migrations to create the database tables.
4. Optionally run the seed command to load sample categories and products.
5. Start the Django development server.

The API runs locally at `http://127.0.0.1:8000/api`.
The live base URL is `https://freshmart-ikhw.onrender.com/api`.
The health check endpoint is `GET /api/health/`.

## Running Tests
The test suite is run with `python manage.py test store --keepdb`. The `--keepdb` flag is used because of how Supabase handles database connections. All 30 tests pass as of the end of Sprint 4.

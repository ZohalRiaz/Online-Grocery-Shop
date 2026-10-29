# Frontend - FreshMart Online Grocery Shop

The live site is at https://fronte-omega.vercel.app/ and uses the live backend at https://freshmart-ikhw.onrender.com/api.

## Technology Stack

- React 19 (JavaScript, JSX)
- Vite (development server and build)
- Tailwind CSS 4
- lucide-react (icons)
- react-hook-form (login, registration and checkout forms)
- Vitest, React Testing Library and jsdom (tests)
- ESLint (code checks)
- Hosted on Vercel

The frontend is a single-page application. It talks to the Django REST API (see the backend README) and keeps the login token in the browser's local storage under the key `freshmart_token`.

## Project Structure

- `src/main.jsx` - Starts the app with the login and cart providers
- `src/App.jsx` - Header, footer and routing (customer pages and admin pages)
- `src/pages/` - Customer pages: home, catalog, product, cart, checkout, orders, login and registration
- `src/pages/admin/` - Admin pages: layout and access control, dashboard, products, inventory, orders, customers
- `src/components/` - Shared pieces (product card, confirmation prompt, messages, loading placeholders, brand logo, admin badges and cards)
- `src/context/` - `AuthContext` (login state) and `CartContext` (basket)
- `src/services/api.js` - Every request to the backend (adds the token, handles errors and timeouts)
- `src/services/adminApi.js` - Admin requests and the rules copied from the backend
- `src/services/checkoutRules.js` - Checkout rules (phone number, delivery fees, labels)
- `src/index.css` - Tailwind setup, colours and shared component styles
- `tests/` - Automated tests, one file per sprint (see tests/README.md)

## Pages and Routes

The app uses address routes that start with `#`, for example `http://localhost:5173/#/products`. Because of this, the web host needs no special rewrite rules.

| Area | Address | Sprint |
|------|---------|--------|
| Home | `#/` | 1 |
| Catalog | `#/products` | 1 |
| Product details | `#/products/<id>` | 1 |
| Login and registration | `#/login`, `#/register` | 1 |
| Cart | `#/cart` | 2 |
| Checkout | `#/checkout` | 3 |
| My orders, order details and confirmation | `#/orders`, `#/orders/<id>`, `#/orders/<id>/confirmation` | 3 |
| Administrator login | `#/admin/login` | 1 |
| Admin dashboard | `#/admin` | 4 |
| Admin products | `#/admin/products`, `#/admin/products/new`, `#/admin/products/<id>/edit` | 4 |
| Admin inventory | `#/admin/inventory`, `#/admin/inventory/<id>` | 4 |
| Admin orders | `#/admin/orders`, `#/admin/orders/<id>` | 4 |
| Admin customers | `#/admin/customers`, `#/admin/customers/<id>` | 4 |

Admin pages are only for staff accounts. A visitor who is not signed in sees the administrator login form, and a customer account sees "Administrators only".

## Features by Sprint

- Sprint 1: registration, login, product catalog with search and categories, product details
- Sprint 2: shopping cart with quantity changes and a confirmation before clearing it
- Sprint 3: checkout (contact, shipping, delivery and payment options), order confirmation, order history
- Sprint 4: admin panel with dashboard, product management (including pictures), inventory with low-stock warnings, order status management and customer block and unblock

## How the Frontend Talks to the Backend

All requests go through `src/services/api.js`.

- The base address comes from `VITE_API_BASE_URL` (it must end with `/api`).
- Public endpoints (catalog, categories, login, registration) are sent without a token. Every other endpoint sends `Authorization: Token <token>`.
- Admin save requests are sent as form data so a product picture can be uploaded with the product.
- Requests stop after 15 seconds with a clear message.
- A 401 answer clears the saved token. A 403 answer means the account is not an administrator. A 404 answer that is not JSON is reported as an endpoint that was not found, which usually means the backend address is wrong or the backend is an older version.

The admin endpoints used are documented in the backend file `API-Endpoints-Sprint-4.md`.

## Environment Variables

Vite reads these when the app is started or built, from a `.env` file locally and from the hosting dashboard in production. Copy `.env.example` to `.env` to start.

| Variable | Purpose |
|----------|---------|
| `VITE_API_BASE_URL` | Address of the Django API, ending in `/api` (local: `http://127.0.0.1:8000/api`, live: `https://freshmart-ikhw.onrender.com/api`) |
| `VITE_API_URL` | Older name for the same setting, used only if `VITE_API_BASE_URL` is empty |

Restart `npm run dev` after changing a variable.

## Setup Instructions

1. Install Node.js (version 20.19 or newer, as required by Vite 8) and open the frontend folder in a terminal.
2. Install the packages: `npm install`
3. Copy `.env.example` to `.env` and set `VITE_API_BASE_URL`.
4. Start the development server: `npm run dev`
5. Open the address shown in the terminal (normally `http://localhost:5173`).

To use the admin panel, create an administrator on the backend with `python manage.py create_admin <email> <password> --name "<name>"` and log in at `#/admin/login`.

## Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build into the `dist/` folder
- `npm run preview` - Opens the production build locally
- `npm run lint` - Code checks
- `npm test` - Runs all automated tests once

## Running Tests

The test suite is run with `npm test`. The tests use sample data and do not need the backend. There is one test file for each sprint (`tests/sprint1.test.jsx` to `tests/sprint4.test.jsx`) and `tests/api.test.js` for the shared request code. See `tests/README.md` for what each file covers.

## Deployment

The frontend is deployed on Vercel at https://fronte-omega.vercel.app/ and is built as static files (`npm run build`, output folder `dist`). Three things must be right for the live site to reach the live backend:

1. **Backend address at build time.** Vite writes `VITE_API_BASE_URL` into the build. A `.env` file is not uploaded with the code (it is in `.gitignore`), so the variable must be added in the Vercel project under Settings, Environment Variables, set to `https://freshmart-ikhw.onrender.com/api`, and the project must be redeployed after it is added. If it is missing, the app uses the default address written in `src/services/api.js`.
2. **CORS on the backend.** The backend only accepts requests from the addresses listed in `CORS_ALLOWED_ORIGINS` in the Render dashboard. Add `https://fronte-omega.vercel.app` there (with `https://` and without a trailing slash; separate several addresses with commas), then redeploy the backend. Locally this works because `http://localhost:5173` is already allowed.
3. **HTTPS on both sides.** A page served over HTTPS cannot call an `http://` backend. The backend address must start with `https://`.

If the site loads but shows no products, open the browser's developer tools (Console and Network tabs): a CORS message points to item 2, a failed request to the wrong address points to item 1. A free Render backend goes to sleep when unused, so the first request after a pause can take up to a minute; the app shows a "took too long" message and works when the request is repeated.

## Known Limitations

- The low-stock limit (10 or fewer) is also written in the frontend; it must match the backend.
- Product pictures are uploaded from the admin form; products without a picture show their emoji.
- Customer accounts can only be blocked and unblocked from the admin panel.

# Backend Work Summary

**Project:** FreshMart - Online Grocery Shop  
**Developer:** Salma Rahman (Backend)  
**Sprint dates:** October 5–10, 2026  
**Sprint goal:** Develop customer account features and the product catalog / search functionality.

This is a short summary of my backend work in Sprint 1, based on the tasks that were given to me in the Sprint 1 backlog. I did this work with Django and PostgreSQL, and connect backend to frontend. I was still fairly new to Django, so a lot of this sprint was also about learning.

---

## What I Got Done

### Database Setup

At the beginning of the project, I chose PostgreSQL as our database and planned to use pgAdmin to manage it. pgAdmin is a tool for managing and viewing database data, while PostgreSQL is the database system itself. I also considered using Render for database hosting, but later decided to use Supabase, which is a serverless database. I explain this decision in more detail in the “Problems I Ran Into” section below.

The database is connected to the backend using a connection URL stored in the `.env` file.

```python
DATABASE_URL = os.getenv("DATABASE_URL", "").strip()

if DATABASE_URL:
    DATABASES = {
        "default": dj_database_url.parse(DATABASE_URL, conn_max_age=600)
    }
```

This setting allows Django to read the database connection URL from my `.env` file. The Django backend is currently running on my local development server, while the database is hosted on a serverless platform. The complete FreshMart project has not been deployed online yet; I plan to deploy it at the end of the project.

**Tables for Sprint 1:**

- `auth_user` - the customer account (Django's built-in user table). I save the full name, email, and hashed password.
- `store_category` - product categories (name and slug).
- `store_product` - product name, description, price, unit, stock, emoji / image, `is_active` (whether it is visible in the store), sold count, and a foreign key to the category.

I created a custom Django management command called `seed_data` that fills the database with sample categories and products, so Faezah and I can test with realistic-looking data.

---

### Registration Endpoint (US-01)

**Route:** `POST /api/auth/register/`

This allows a new customer to create an account.

- Takes full name, email, and password.
- Changes the email to lowercase and rejects a duplicate email.
- Checks the password with Django's validators: at least 8 characters, not too common, and not only numbers.
- **Saves the password hashed**, never as plain text (`create_user` does this).
- Saves the account in the database and returns an authentication token and basic user information after successful registration.

```python
def validate_email(self, value):
    value = value.lower()
    if User.objects.filter(username=value).exists():
        raise serializers.ValidationError(
            "An account with this email already exists."
        )
    return value
```

---

### Login Endpoint (US-02)

**Route:** `POST /api/auth/login/`

- Takes email and password.
- Checks them with Django's `authenticate`.
- If they are correct, it returns a **token** and the user information (`id`, `email`, `full_name`).
- If they are wrong, it returns `Incorrect email or password.`, and the frontend shows this message.

---

### Logout and Protected Routes (US-03)

**Route:** `GET /api/auth/me/`

- This endpoint returns the current authenticated user's information and requires a valid authentication token. Requests without a valid token are rejected with a `401 Unauthorized` response.
- When the customer logs out, the frontend removes the saved token and redirects the customer to the home page. Subsequent requests from that browser no longer include the token, so protected endpoints reject unauthenticated requests. The current backend does not provide a dedicated logout endpoint to invalidate the token.

---

### Product Catalog Endpoints (US-04, US-23)

- `GET /api/categories/` - returns the list of categories.
- `GET /api/products/` - returns products with their name, price, image, stock, and availability. Products with `is_active = False` are hidden from customers.
- `GET /api/products/<id>/` - returns the full details of one product. A hidden or missing product returns `404`.

---

### Search, Filter and Sort (US-24, US-25, US-26)

I made all three work on the same products route, so they can be used together:

```python
def get_queryset(self):
    params = self.request.query_params
    queryset = Product.objects.filter(is_active=True).select_related("category")

    search = params.get("search", "").strip()
    if search:
        queryset = queryset.filter(
            Q(name__icontains=search) | Q(description__icontains=search)
        )

    category = params.get("category", "").strip()
    if category:
        queryset = queryset.filter(category__slug=category)

    ordering = self.SORTS.get(
        params.get("sort", "popular"),
        self.SORTS["popular"]
    )
    return queryset.order_by(*ordering)
```

- **Search:** `?search=milk` (searches the name or description without case sensitivity).
- **Filter:** `?category=dairy-eggs` (the backend filters by category; the in-stock / out-of-stock filter is done in the frontend using the `stock` number).
- **Sort:** `?sort=price_asc`, `price_desc`, `name`, or `popular`. The frontend reverses the name order for Z–A.

---

### Connecting with the Frontend

I connect the frontend to the backend. I also added:

- `GET /api/health/` - tells us if the backend and the database are running (the home page uses it to show the connection status).
- CORS settings, so the frontend can talk to the backend.
- A short guide with the endpoints and the data format, so Faezah knows what to send and what comes back.
- I seeded 36 sample products that were previously stored in the frontend, so the product data is now stored in the backend database.
- I also transferred the product images from the frontend to the backend.

---

## My Sprint 1 Backlog Tasks

| User story (Product Backlog ID) | My backend tasks | Status |
|---|---|---|
| US-01 Registration | Registration logic, store the account in PostgreSQL, connect the form to the API, test | Done |
| US-02 Login | Validate the credentials, authentication with a token, connect the login to the API, test | Done |
| US-03 Logout | End the session (the frontend removes the token), protect restricted routes, test | Done |
| US-04 Product catalog | Product and category models, products API, test | Done |
| US-23 Product details | Get a product by ID, test | Done |
| US-24 Search | Search API / query, test | Done |
| US-25 Filter | Connect the filter to the API (category), test | Done |
| US-26 Sort | Sorting logic in the API, test | Done |

The Sprint Planning file numbers the stories differently from the Product Backlog, so I used the Product Backlog IDs.

---

## Testing

I tested the backend in two ways. First, I wrote automated Django tests (`store/tests.py`, run with `python manage.py test`) for registration, login, protected routes, the product list, search, filter, and sort. Second, Faezah and I tested the main features together on the website, with the frontend connected to my backend. We also showed the working features in our Sprint 1 Review session.

We ran 13 test cases. Twelve passed, and one found a problem in the email input validation (see the table below). The test cases, bugs, and results are in our **Sprint 1 Testing Document**.

---

## Problems I Ran Into

| Issue | Details | Status |
|---|---|---|
| Database hosting decision | I first wanted a Render cloud database, but the free one lasts only 30 days, and our project ends on November 1 and may be checked after that. | Moved to Supabase. I made a backup in pgAdmin and restored it to the new server to connect to Supabase, so no data was lost. |
| Frontend and backend did not match at first | They were built separately, so some endpoint names and data formats were different. | Compared both sides and fixed the Sprint 1 parts together with Faezah. |
| Weak passwords were accepted | A password like `12345678` should not be allowed. | Added Django's password validators, so weak passwords are rejected with a clear message. |
| Email typo was accepted | During testing, we saw that an email like `name@gmal.com` (a typo of Gmail) is accepted because Django only checks that the email has a valid format. | Found during testing and recorded in our Testing Document. I plan to fix it in Sprint 2. |
| Products showed emojis instead of real images after seeding | After I seeded the products with images, the site still showed emoji placeholders. The seed command reported “35 images attached,” but the files inside `store/seed_images/` were saved with capital letters (`Apple.jpg`, `Tomato.jpg`), while the seed command was looking for lowercase names (`apple.jpg`, `tomato.jpg`). Windows PowerShell silently refused to rename a file when only the case changed. | I plan to fix this in Sprint 2. |

What I really learned: check the limits of a free service before putting our data on it, and always keep a backup.

---

## Next Sprint Plans

In Sprint 2, I will focus on developing the shopping cart backend. I will implement adding products to the cart, viewing cart items, changing quantities, removing products, clearing the cart, and calculating the cart total. I will also integrate these features with Faezah's frontend and test the cart functionality.

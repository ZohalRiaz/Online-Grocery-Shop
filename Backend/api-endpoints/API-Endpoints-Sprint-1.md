# API Endpoints- Sprint 1

**Project:** FreshMart - Online Grocery Shop  
**Backend developer:** Salma Rahman  
**Sprint:** Sprint 1 (October 5-10, 2026)

This file lists the API endpoints I built in Sprint 1 for registration, login, and the product catalog / search. Faezah's frontend uses these endpoints. The endpoints for the cart, checkout and admin panel will be added in the next sprints.

**Base address (when we run it on our computers):** `http://127.0.0.1:8000/api`
---

## Authentication Endpoints

### Register User

*POST* /api/auth/register/

*Description:* Create a new customer account (US-01). The password is saved hashed.

*Authentication:* Not required

*Request:*
```json
{
  "full_name": "Salma Rahman",
  "email": "salma@example.com",
  "password": "StrongPass2026"
}
```

*Success Response (201):*
```json
{
  "token": "9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b",
  "user": {
    "id": 5,
    "email": "salma@example.com",
    "full_name": "Salma Rahman",
    "is_staff": false
  }
}
```

*Error Responses:*
- 400: The email already exists, for example `{"email": ["An account with this email already exists."]}`
- 400: The email is not valid or a field is missing
- 400: The password is too short (less than 8 characters), too common, or only numbers

---

### Login

*POST* /api/auth/login/

*Description:* Sign in with email and password (US-02).

*Authentication:* Not required

*Request:*
```json
{
  "email": "salma@example.com",
  "password": "StrongPass2026"
}
```

*Success Response (200):*
```json
{
  "token": "9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b",
  "user": {
    "id": 5,
    "email": "salma@example.com",
    "full_name": "Salma Rahman",
    "is_staff": false
  }
}
```

*Error Responses:*
- 400: Wrong email or password: `{"detail": "Incorrect email or password."}`
- 400: Email or password is missing

---

### Get Current User

*GET* /api/auth/me/

*Description:* Returns the signed-in user. The frontend uses it to keep the user signed in after a page refresh.

*Authentication:* Required (token)

*Success Response (200):*
```json
{
  "id": 5,
  "email": "salma@example.com",
  "full_name": "Salma Rahman",
  "is_staff": false
}
```

*Error Responses:*
- 401: No token or a wrong token: `{"detail": "Authentication credentials were not provided."}`

---

### Logout (US-03)

There is no separate logout endpoint. The token is kept in the browser, so when the customer logs out, the frontend removes the token and sends the user back to the home page. After that, protected endpoints like `/api/auth/me/` answer with 401.

---

## Catalog Endpoints

### Get All Categories

*GET* /api/categories/

*Description:* List of product categories, used for the category filter.

*Authentication:* Not required

*Success Response (200):*
```json
[
  { "id": 1, "name": "Dairy", "slug": "dairy" },
  { "id": 2, "name": "Bakery", "slug": "bakery" }
]
```

---

### Get All Products (with search, filter and sort)

*GET* /api/products/

*Description:* List of the products that are available in the store (US-04, US-24, US-25, US-26). Products that the store has hidden are not shown.

*Authentication:* Not required

*Query parameters (all optional, and they can be used together):*

| Parameter | What it does | Example |
|-----------|--------------|---------|
| `search` | Finds products by name or keyword | `?search=milk` |
| `category` | Shows only one category (use the category `slug`) | `?category=dairy` |
| `sort` | Orders the products. Values: `popular` (default), `price_asc`, `price_desc`, `name` | `?sort=price_asc` |

Example with everything together: `/api/products/?search=milk&category=dairy&sort=price_asc`

*Success Response (200):*
```json
[
  {
    "id": 1,
    "name": "Fresh Milk",
    "description": "Fresh whole milk",
    "price": "2.50",
    "unit": "1 L",
    "stock": 40,
    "emoji": "🥛",
    "image_url": "",
    "is_active": true,
    "sold_count": 12,
    "category": 1,
    "category_name": "Dairy",
    "category_slug": "dairy"
  }
]
```

*Notes:*
- If nothing matches, the answer is an empty list `[]` (200), and the frontend shows the "no results" message.

---

### Get One Product

*GET* /api/products/:id/

*Description:* Full details of one product (US-23).

*Authentication:* Not required

*Success Response (200):* the same product object as in the list above.

*Error Responses:*
- 404: The product does not exist or is hidden

---

## Health Check

### Check the Backend

*GET* /api/health/

*Description:* Tells if the backend and the database are running. The home page of the frontend uses it to show the connection status.

*Authentication:* Not required

*Success Response (200):*
```json
{ "status": "ok", "database": "ok" }
```

*Error Response (503):*
```json
{ "status": "error", "database": "unreachable" }
```

---

## Error Codes Summary

### 200 OK
Request successful

### 201 Created
The account was created

### 400 Bad Request
Invalid data, a missing field, or wrong login details

### 401 Unauthorized
The token is missing or wrong (login needed)

### 404 Not Found
The product does not exist

### 503 Service Unavailable
The database cannot be reached

---

## Authentication

Protected endpoints need the token that we get from register or login. The token is sent in the `Authorization` header, with the word `Token` before it (not `Bearer`):

```
Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b
```

In Sprint 1 only `/api/auth/me/` needs the token. Everything else is public, so visitors can browse the catalog without an account.

---

## Sprint 1 Summary

**New Endpoints:** 7

1. GET /api/health/ - Backend and database check
2. POST /api/auth/register/ - Register
3. POST /api/auth/login/ - Login
4. GET /api/auth/me/ - Current user
5. GET /api/categories/ - Categories
6. GET /api/products/ - Products (search, category filter, sort)
7. GET /api/products/:id/ - Product details

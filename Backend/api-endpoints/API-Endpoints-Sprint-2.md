# API Endpoints Documentation — Sprint 2

**Project:** Fresh Mart — Online Grocery Shop  
**Backend Developer:** Salma Rahman  
**Sprint:** Sprint 2 (October 11–13, 2026)

This document describes the shopping cart API endpoints implemented in Sprint 2. The backend stores each customer's cart in the database and returns the latest cart items, quantities, subtotals, and total price.

Sprint 2 also includes product image support and integration between the cart API and the React frontend.

---

## Base Address

When running the backend locally:

`http://127.0.0.1:8000/api`

## Authentication

All shopping cart endpoints require the customer to be logged in. The token received from registration or login must be sent in the `Authorization` header:

```http
Authorization: Token YOUR_AUTH_TOKEN
```

Each customer can access only their own cart and cart items.

---

## Shopping Cart Endpoints

### 1. Add Product to Cart (US-09)

**Method:** `POST`

**Endpoint:** `/api/cart/add/`

**Full URL:** `http://127.0.0.1:8000/api/cart/add/`

**Description:** Adds a product to the logged-in customer's cart. If the product is already in the cart, its quantity increases instead of creating a duplicate cart item.

**Authentication:** Required (token).

**Request body:**

```json
{
  "product_id": 1,
  "quantity": 2
}
```

**Success response (200 OK):**

Returns the updated cart, including the cart ID, items, total quantity, and total price.

```json
{
  "id": 1,
  "items": [
    {
      "id": 1,
      "product_id": 1,
      "name": "Apple",
      "price": "1.50",
      "unit": "per lb",
      "emoji": "🍎",
      "image_url": "http://127.0.0.1:8000/media/products/apple.jpg",
      "stock": 50,
      "quantity": 2,
      "subtotal": "3.00"
    }
  ],
  "total_items": 2,
  "total_price": "3.00"
}
```

**Possible errors:**

- `400 Bad Request`: Invalid input, invalid quantity, inactive or nonexistent product, or insufficient stock.
- `401 Unauthorized`: Missing or invalid authentication token.

---

### 2. View Shopping Cart (US-10 and US-14)

**Method:** `GET`

**Endpoint:** `/api/cart/`

**Full URL:** `http://127.0.0.1:8000/api/cart/`

**Description:** Returns the logged-in customer's cart. If the customer does not yet have a cart, the backend creates an empty one.

**Authentication:** Required (token).

**Request body:** None.

**Success response (200 OK):**

```json
{
  "id": 6,
  "items": [
    {
      "id": 5,
      "product_id": 1,
      "name": "Apple",
      "price": "1.50",
      "unit": "per lb",
      "emoji": "🍎",
      "image_url": "http://127.0.0.1:8000/media/products/apple.jpg",
      "stock": 50,
      "quantity": 4,
      "subtotal": "6.00"
    }
  ],
  "total_items": 4,
  "total_price": "6.00"
}
```
nside each item, id is the cart item ID (used for update/remove). product_id is the product ID. The backend calculates subtotal, total_items, and total_price.

Possible Errors:

401 — Missing or invalid token.

---

### 3. Change Cart Item Quantity (US-11)

**Method:** `PATCH`

**Endpoint:** `/api/cart/items/<id>/`

**Description:** Changes the quantity of an existing cart item.

**Authentication:** Required (token).

**Request body:**

```json
{
  "quantity": 4
}
```

The quantity must be between `1` and `99` and cannot exceed the available stock.

**Success response (200 OK):**

Returns the updated cart with recalculated subtotals and total price.

**Possible errors:**

- `400 Bad Request`: Invalid quantity or quantity greater than available stock.
- `401 Unauthorized`: Missing or invalid authentication token.
- `404 Not Found`: The cart item does not exist or does not belong to the logged-in customer.

**Important:** The frontend must send the cart item ID, not the product ID.

---

### 4. Remove Product from Cart (US-12)

**Method:** `DELETE`

**Endpoint:** `/api/cart/items/<id>/remove/`

**Example URL:** `http://127.0.0.1:8000/api/cart/items/3/remove/`

**Description:** Removes one item from the logged-in customer's cart.

**Authentication:** Required (token).

**Request body:** None.

**Success response (200 OK):** Returns the updated cart after the item is removed.

Example response when the cart becomes empty:

```json
{
  "id": 1,
  "items": [],
  "total_items": 0,
  "total_price": "0.00"
}
```

**Possible errors:**

- `401 Unauthorized`: Missing or invalid authentication token.
- `404 Not Found`: The cart item does not exist or does not belong to the logged-in customer.

---

### 5. Clear Shopping Cart (US-13)

**Method:** `DELETE`

**Endpoint:** `/api/cart/clear/`

**Full URL:** `http://127.0.0.1:8000/api/cart/clear/`

**Description:** Removes all items from the logged-in customer's cart.

**Authentication:** Required (token).

**Request body:** None.

**Success response (200 OK):**

Returns the empty cart.

```json
{
  "id": 1,
  "items": [],
  "total_items": 0,
  "total_price": "0.00"
}
```

**Possible errors:**

- `401 Unauthorized`: Missing or invalid authentication token.

## Error Codes Summary

| Status Code | Meaning |
|---|---|
| `200 OK` | Request completed successfully. |
| `400 Bad Request` | Invalid input, unavailable product, or quantity/stock validation failure. |
| `401 Unauthorized` | Missing or invalid authentication token. |
| `404 Not Found` | Requested cart item does not exist or does not belong to the customer. |

---

## Sprint 2 Summary

**New shopping cart endpoints: 5**

1. `POST /api/cart/add/` — Add product to cart (US-09).
2. `GET /api/cart/` — View shopping cart (US-10).
3. `PATCH /api/cart/items/<id>/` — Change item quantity (US-11).
4. `DELETE /api/cart/items/<id>/remove/` — Remove an item (US-12).
5. `DELETE /api/cart/clear/` — Clear cart (US-13).

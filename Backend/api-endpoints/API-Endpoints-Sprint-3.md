# API Endpoints Documentation — Sprint 3

**Project:** FreshMart — Online Grocery Shop  
**Backend Developer:** Salma Rahman  
**Sprint:** Sprint 3 (October 14–17, 2026)

This document describes the checkout and order endpoints used in Sprint 3.

**Base address (local):** `http://127.0.0.1:8000/api`  
**Base address (live):** `https://fresh-mart-i62g.onrender.com/api`

**Authentication:** All order endpoints require a token:

```http
Authorization: Token YOUR_AUTH_TOKEN
```

Each customer can only access their own orders.

---

## Order Endpoints

### 1. Place Order (US-11, US-12, US-14, US-15, US-16)

**Method:** `POST`  
**Endpoint:** `/api/orders/`

Creates an order from the customer's cart. The cart is cleared after a successful order.

**Request:**
```json
{
  "full_name": "Test User",
  "email": "checkout1@freshmart.local",
  "phone": "0700123456",
  "address": "123 Test Street",
  "city": "Kabul",
  "notes": "Leave at the door",
  "payment_method": "cash",
  "delivery_option": "standard",
  "items": [
    { "product": 1, "quantity": 2 },
    { "product": 2, "quantity": 1 }
  ]
}
```

Field notes:
- `payment_method` is `"cash"` or `"card"`.
- `delivery_option` is `"standard"` or `"express"`.
- `items` is the list of products to buy.

**Response (201 Created):**
```json
{
  "id": 12,
  "customer_email": "checkout1@freshmart.local",
  "full_name": "Test User",
  "email": "checkout1@freshmart.local",
  "phone": "0700123456",
  "address": "123 Test Street",
  "city": "Kabul",
  "notes": "Leave at the door",
  "payment_method": "cash",
  "delivery_option": "standard",
  "status": "pending",
  "subtotal": "5.00",
  "delivery_fee": "2.00",
  "total": "7.00",
  "created_at": "2026-10-17T09:15:42.123456Z",
  "items": [
    {
      "id": 30,
      "product": 1,
      "product_name": "Apple",
      "unit_price": "1.50",
      "quantity": 2,
      "line_total": "3.00"
    },
    {
      "id": 31,
      "product": 2,
      "product_name": "Milk",
      "unit_price": "2.00",
      "quantity": 1,
      "line_total": "2.00"
    }
  ]
}
```

**Errors:**
- `400` — Missing or invalid field, product out of stock, product inactive, or duplicate submission within 30 seconds.
- `401` — Missing or invalid token.

---

### 2. Order History (US-27)

**Method:** `GET`  
**Endpoint:** `/api/orders/`

Returns the logged-in customer's own orders, newest first.

**Response (200 OK):**
```json
[
  {
    "id": 12,
    "customer_email": "checkout1@freshmart.local",
    "full_name": "Test User",
    "status": "pending",
    "subtotal": "5.00",
    "delivery_fee": "2.00",
    "total": "7.00",
    "payment_method": "cash",
    "delivery_option": "standard",
    "created_at": "2026-10-17T09:15:42.123456Z",
    "items": []
  }
]
```

**Errors:**
- `401` — Missing or invalid token.

---

### 3. Order Detail

**Method:** `GET`  
**Endpoint:** `/api/orders/<id>/`

Returns one order. Only the customer who placed it can see it.

**Response (200 OK):** the same shape as one item in the history response above.

**Errors:**
- `401` — Missing or invalid token.
- `404` — The order does not exist or belongs to another customer.

---

## Delivery Options

| Option | Meaning | Fee |
|---|---|---|
| `standard` | Standard delivery (2–3 days) | `2.00` |
| `express` | Express delivery (next day) | `5.00` |

The delivery fee is calculated on the backend. The frontend displays the returned `delivery_fee` and `total`.

**Total = Subtotal + Delivery Fee**

Example with subtotal `3.00`:
- Standard: `3.00 + 2.00 = 5.00`
- Express: `3.00 + 5.00 = 8.00`

---

## Error Codes Summary

| Status Code | Meaning |
|---|---|
| `200 OK` | Order list or single order returned. |
| `201 Created` | Order placed successfully. |
| `400 Bad Request` | Invalid field, out of stock, or duplicate submission. |
| `401 Unauthorized` | Missing or invalid token. |
| `404 Not Found` | Order does not exist or belongs to another customer. |

---

## Frontend Integration Workflow

1. Customer logs in and gets a token.
2. Customer adds products to the cart.
3. Customer fills the checkout form (contact, address, payment, delivery).
4. Frontend sends `POST /api/orders/` with the form data and cart items.
5. Backend validates, saves the order, reduces stock, clears the cart, and returns the order.
6. Frontend uses the returned order id to show the order confirmation.
7. Customer can see past orders with `GET /api/orders/`.
8. Customer can open one order with `GET /api/orders/<id>/`.

---

## Sprint 3 Summary

**Endpoints covered: 3 (existing endpoints extended in this sprint — no new routes added)**

1. `POST /api/orders/` — Place Order (modified: added delivery option, duplicate prevention, cart clearing, extra validation)
2. `GET /api/orders/` — Order History (existing)
3. `GET /api/orders/<id>/` — Order Detail (existing)

**User stories covered:** US-11, US-12, US-13 (delivery fee), US-14, US-15, US-16, US-17, US-27.

**Changes to the `Order` model:** added `delivery_option` field.

**Changes to `OrderCreateSerializer`:**
- Validates contact, shipping, payment, and delivery fields.
- Prevents duplicate submissions within 30 seconds.
- Clears the cart after a successful order.
- Express delivery adds 3.00 to the delivery fee.

---

## Live Deployment

- **Live base URL:** `https://fresh-mart-i62g.onrender.com/api`
- **Health check:** `https://fresh-mart-i62g.onrender.com/api/health/`
- **Hosting:** Render (free tier — sleeps after 15 minutes of inactivity)
- **Database:** Supabase PostgreSQL
```
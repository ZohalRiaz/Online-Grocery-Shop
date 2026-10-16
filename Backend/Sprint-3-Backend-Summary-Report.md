# Sprint 3 - Backend Work Summary

**Project:** FreshMart - Online Grocery Shop  
**Developer:** Salma Rahman (Backend)  
**Sprint dates:** October 14–17, 2026  
**Sprint goal:** Develop the checkout and order backend.

In Sprint 2, I built the cart. In Sprint 3, I turned that cart into a real order — validating customer and payment information, saving the order, reducing stock, clearing the cart, and letting customers see their order history.

---

## What I Got Done

### Order Database Update

I added one new field to the `Order` model:

- `delivery_option` — customer choice between Standard (`2.00`) and Express (`5.00`).

Contact and shipping fields (`full_name`, `email`, `phone`, `address`, `city`, `notes`) already existed, so I reused them.

---

### Checkout Serializers

I updated two serializers in `serializers.py`:

- **`OrderCreateSerializer`** — the checkout request.
  - Validates name, phone, address, city, payment method, and delivery option.
  - Locks each product row with `select_for_update()` so two customers cannot buy the last item at the same time.
  - Rejects out-of-stock or inactive products.
  - Saves the order and its items, reduces stock, and increases `sold_count`.
  - Calculates subtotal, delivery fee, and total on the backend.
  - Clears the customer's cart after a successful order.
  - Blocks duplicate submissions within 30 seconds.

- **`OrderSerializer`** — the response. Added `delivery_option` so the frontend can show it.

---

### Order Endpoints

Sprint 3 reuses the existing order endpoints — no new routes were added.

- **`POST /api/orders/`** — Place Order (now with validation, delivery option, duplicate prevention, and cart clearing).
- **`GET /api/orders/`** — Order History (existing).
- **`GET /api/orders/<id>/`** — Order Detail (existing).

---

### Deployment

I deployed the backend to Render so the frontend can use a live URL.

- **Live base URL:** `https://fresh-mart-i62g.onrender.com/api`
- **Health check:** `https://fresh-mart-i62g.onrender.com/api/health/` returns `{"status": "ok", "database": "ok"}`
- **Hosting:** Render (free tier — sleeps after 15 minutes of inactivity)
- **Database:** Supabase PostgreSQL

---

## My Sprint 3 Backlog Tasks

| Task | Status |
|---|---|
| Validate required contact fields | Done |
| Store contact data with order | Done |
| Validate required address fields | Done |
| Save shipping information | Done |
| Connect shipping data to checkout/API | Done |
| Validate selected delivery option | Done |
| Include delivery option in order | Done |
| Validate required payment fields | Done |
| Handle payment data within project scope | Done |
| Validate checkout completeness | Done |
| Implement Place Order API | Done |
| Save order and reduce inventory | Done |
| Prevent duplicate submissions | Done |
| Clear purchased shopping cart | Done |
| Create or reuse private orders API | Done |
| Retrieve only current customer's orders | Done |

All 16 backend tasks from the Sprint 3 planning are complete.

---

## Testing

I tested the checkout backend in two ways.

First, I updated the existing order tests in `store/tests.py` to send the new `delivery_option` field, so all 24 tests pass again.

Second, I tested the endpoints end-to-end with `Invoke-RestMethod`:

- Placed a Standard order — subtotal `3.00`, delivery `2.00`, total `5.00`.
- Tried to place the same order again within 30 seconds — rejected with `"This order was already submitted. Please wait."`
- Placed an Express order — delivery fee `5.00` (base 2.00 + 3.00 express).
- Checked that the cart was empty right after the order.
- Loaded the order history — only the logged-in customer's orders were returned.

The full test list is in the **Test Results — Sprint 3** document.

---

## Problems I Ran Into

| Issue | Details | How I fixed it |
|---|---|---|
| Existing order tests broke after adding `delivery_option` | The old tests sent the previous order body without `delivery_option`, so the API returned `400` and the tests failed with `KeyError: 'id'`. | Added `"delivery_option": "standard"` to the shared `ORDER_FORM` in `store/tests.py`, so all 24 tests pass again. |
| Lost the authentication token between terminal sessions | PowerShell loses its variables when the terminal is closed, so the checkout tests failed with `"Invalid token header"`. | Saved the token to a small file and reloaded it with `Get-Content` before each test run. |

What I learned this sprint is that changing a serializer's required fields breaks every existing caller — I had to update the tests at the same time as the serializer. Giving the backend the delivery fee and total (instead of the frontend) keeps the checkout consistent across devices. And a small setup problem like losing a token variable can look like a code bug, so it is better to keep test setup in a file than in the terminal.

---

## Next Sprint Plans

In Sprint 4, I plan to continue with admin and reporting features, resolve the remaining test-database cleanup issue, and support final frontend integration and deployment.

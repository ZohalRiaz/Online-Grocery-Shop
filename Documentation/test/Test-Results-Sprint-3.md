# Test Results — Sprint 3

**Project:** FreshMart — Online Grocery Shop  
**Testers:** Salma Rahman (Backend)  
**Sprint:** Sprint 3 (October 14–17, 2026)  
**Environment:** Local development server (Django backend), database on Supabase (PostgreSQL). Deployed to Render for live testing.

During Sprint 3, I tested the checkout and order endpoints on the backend and confirmed that the frontend can use them for the checkout page.

---

## Test Summary

| Metric | Value |
|---|---|
| Automated Tests Passed | 24 |
| Automated Tests Failed | 0 |
| Manual Test Cases | 9 |
| Critical Bugs | 0 |
| Major Bugs | 0 |
| Minor Bugs | 1 (carried from Sprint 2) |

---

## Test Execution Details

### TC-001: Place Order with Standard Delivery

**Status:** PASSED  
**Summary:** Posted a valid order body with `delivery_option: "standard"`. The order was created with `subtotal: "3.00"`, `delivery_fee: "2.00"`, `total: "5.00"`, and `status: "pending"`.

### TC-002: Duplicate Submission Is Blocked

**Status:** PASSED  
**Summary:** Sent the same order body again within 30 seconds. The response was `400` with `"This order was already submitted. Please wait."` No duplicate order was created.

### TC-003: Express Delivery Fee Is Correct

**Status:** PASSED  
**Summary:** Placed an order with `delivery_option: "express"`. The response showed `delivery_fee: "5.00"`, and the total equaled the subtotal plus 5.00.

### TC-004: Cart Is Cleared After Order

**Status:** PASSED  
**Summary:** Immediately after a successful order, `GET /api/cart/` returned `items: []`, `total_items: 0`, and `total_price: 0.00`.

### TC-005: Order History Returns Only My Orders

**Status:** PASSED  
**Summary:** `GET /api/orders/` returned only the logged-in customer's orders, newest first. A second user's request returned only that user's own orders.

### TC-006: Order Detail Is Private

**Status:** PASSED  
**Summary:** Another customer requesting `GET /api/orders/<id>/` for an order that did not belong to them received `404`.

### TC-007: Product Stock Is Reduced

**Status:** PASSED  
**Summary:** After an order for 2 Apples, the product's stock decreased by 2 and `sold_count` increased by 2.

### TC-008: Validation Rejects Bad Input

**Status:** PASSED  
**Summary:** Orders with missing fields, non-digit phone numbers, or invalid delivery-option values were rejected with a clear `400` error.

### TC-009: Live Backend Health Check

**Status:** PASSED  
**Summary:** After deploying the backend to Render, opened `https://fresh-mart-i62g.onrender.com/api/health/` and received `{"status": "ok", "database": "ok"}`. The live URL was reachable and connected to the Supabase database.

---

## Automated API Testing

Django tests were run with the following command:

```powershell
python manage.py test store --keepdb
```

**Result:** 24 tests passed.

Django reported no system-check issues. The existing order tests were updated to include the new `delivery_option` field, and all 24 automated tests passed.

---

## Security and Validation Checks

- Order endpoints require authentication.
- A customer can only access their own orders.
- Product stock cannot go below zero.
- Duplicate order submissions are blocked within 30 seconds.
- The cart is cleared only after a successful order.
- The backend calculates the subtotal, delivery fee, and total.
- The live Render deployment connects to the Supabase database.

---

## Bugs Found

No new bugs were found during Sprint 3 testing. Two minor issues encountered during development were fixed before the final tests:

- **Order test failure:** The existing order tests failed when the new `delivery_option` field became required. This was fixed by updating `ORDER_FORM` in `store/tests.py`.
- **Authentication token issue:** The authentication token was lost between terminal sessions. This was resolved by saving the token to a file and reloading it.

Neither issue affected the final behavior of the API after the fixes.

---

## Bugs Carried Forward

### BUG-001 (from Sprint 2): Database Test Cleanup Error

**Severity:** Minor  
**Priority:** Low  
**Status:** Still open (planned for Sprint 4)  
**Found by:** Salma Rahman

**Description:**  
When running Django tests without `--keepdb`, the test database cannot be cleaned up because Supabase's connection pooler keeps connections open longer than Django expects.

**Impact:**  
Tests pass, but automatic test-database deletion fails. This is a cleanup issue only; the test results are correct.

**Workaround:**  
Use `python manage.py test store --keepdb` to skip the test database cleanup and reuse the existing test database.

**Plan:**  
Investigate the connection-pooling configuration in Sprint 4. If a fix is not practical with Supabase, document the workaround as the standard way to run tests for this project.
---

## Conclusion

Sprint 3 added the checkout backend, including validation, order placement, stock updates, cart clearing, duplicate-submission prevention, delivery options, and order history. All 24 automated tests passed, and the endpoints were verified with real requests. The backend was also deployed to Render so the frontend can connect to it. One minor bug (BUG-001) remains open from Sprint 2 and is planned for Sprint 4.

---
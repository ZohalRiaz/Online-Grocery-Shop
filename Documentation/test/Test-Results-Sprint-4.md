# Test Results — Sprint 4

**Project:** FreshMart — Online Grocery Shop  
**Testers:** Salma Rahman (Backend Developer), Faezah Ahmadi (Frontend Developer)    
**Sprint:** Sprint 4 (October 18–22, 2026)  
**Environment:** Local development server (Django), deployed on Render, database on Supabase (PostgreSQL), storage on Supabase Buckets, React 19, Vite, Tailwind CSS 4, lucide-react

During Sprint 4, I (Salma Rahman)tested the new Admin Panel endpoints and confirmed that the security rules, order transitions, customer management logic, and cloud image uploads work correctly.
During sprint four I (Faezah Ahmadi) tested managing products, stock, customer orders and customer accounts from front end side.

---

## 1. Test Summary

| Metric | Value |
|---|---|
| Automated Tests Passed | 30 |
| Automated Tests Failed | 0 |
| Manual Test Cases | 8 |
| Critical Bugs | 0 |
| Major Bugs | 0 |
| Minor Bugs |0 |

---

## 2. Test Execution Details

### TC-001: Admin Product Management
**Status:** PASSED  
**Summary:** Admins can successfully create new products using `POST`, update existing products' stock and prices using `PATCH`, and delete products. Deleting a product does not break past orders, and order history is preserved.

### TC-002: Admin Order Status Transition Rules
**Status:** PASSED  
**Summary:** Confirmed that an admin cannot skip order status transitions (e.g., changing an order directly from `pending` to `delivered`). The API returns a `400 Bad Request` response with a clear error message. Cancelled orders correctly restore product stock.

### TC-003: Admin Order Filtering
**Status:** PASSED  
**Summary:** The endpoint `GET /api/admin/orders/?status=pending` correctly returns only pending orders. Invalid status values return a `400 Bad Request` response.

### TC-004: Low-Stock Notifications
**Status:** PASSED  
**Summary:** The product API now returns a `stock_status` field. Testing confirmed: Stock of `0` returns `"out_of_stock"`, stock of `3` returns `"low_stock"`, and stock of `50` returns `"in_stock"`.

### TC-005: Admin Customer Management
**Status:** PASSED  
**Summary:** Admins can view a list of all non-staff customers. The customer detail view correctly displays `order_count` and `total_spent`.

### TC-006: Blocking and Unblocking Customers and Security
**Status:** PASSED  
**Summary:** Admins can update a customer's profile using `PATCH` to set `is_active` to `false`. The system prevents an admin from blocking another admin account. Unauthorized requests return a `403 Forbidden` response.

### TC-007: Admin Image Upload via React Form
**Status:** PASSED  
**Summary:** Admins can upload an image directly from the React Admin Panel when creating or editing a product. The file is sent to the backend via `FormData`, successfully reaches Django (`request.FILES` is populated), and is saved to Supabase Storage.

### TC-008: Persistent Cloud Storage Verification
**Status:** PASSED  
**Summary:** Verified that images uploaded through the Admin panel persist after a Render deployment/restart. Since images are stored in Supabase (instead of Render's local hard drive), the image URLs remain accessible and correctly load on the frontend, returning `200 OK` instead of `403 Forbidden`.

---

## 3. Automated API Testing

Django tests were executed using the following command in PowerShell:

```powershell
python manage.py test store --keepdb
```

**Result:** 30 tests passed, with 0 failures.

Django reported no system-check issues. All previous tests for the cart, checkout, and authentication also passed alongside the six new Sprint 4 admin tests.

---

## 4. Security and Validation Checks

The following security and validation checks were confirmed during testing:

- All `/api/admin/` endpoints require `is_staff=True`.
- Product stock cannot be updated to negative values.
- Order status transitions are strictly enforced to prevent workflow errors.
- Blocking a customer prevents them from logging in.
- Customer account information, including `total_spent`, is calculated securely on the backend.
- **Supabase bucket access policies were tested to ensure images are publicly readable but can only be uploaded by the backend using secret keys.**

---

## 5. Bugs Found

Two issues encountered during development were fixed immediately, and one new issue was encountered during the cloud storage integration.

### Issue 1: Serializer Mismatch
**Description:** Blocking a customer failed because the wrong serializer type was being used.  
**Resolution:** Fixed by switching to `ModelSerializer`.

### Issue 2: Order Transition Test Failure
**Description:** An older test attempted an illegal order status transition.  
**Resolution:** The test was updated to match the new business rules.

### Issue 3: Admin Image Upload Silently Dropped
**Description:** When an admin tried to add a new product with an image, the image was not being saved to the database or Supabase. The API returned `201 Created`, but the `image_url` field was empty.  
**Cause:** The `AdminProductViewSet` was not configured to parse `multipart/form-data`, and the `"image"` field was missing from the `ProductSerializer.Meta.fields`.  
**Resolution:** Added `parser_classes = [MultiPartParser, FormParser]` to the viewset and included `"image"` in the serializer fields.

### Issue 4: 403 Forbidden on Supabase Images
**Description:** After uploading images to Supabase, the frontend received a `403 Forbidden` when trying to load them.  
**Cause:** The Supabase bucket policy was too restrictive and blocked public read access.  
**Resolution:** Updated the Supabase Storage policy to allow public read access (`SELECT` on `bucket_id = 'media'`).

Note: The minor issues reported in earlier sprints (from Sprint 2 onwards) were all resolved this sprint, so this document records only the eight test cases carried out in Sprint 4.
---

## **Frontend Testing**

Sprint four test report  
**Tested by:** Faezah Ahmadi, front end developer

---

## 📅 Sprint Information

| Item            | Detail                                |
|-----------------|----------------------------------------|
| Sprint          | Sprint 4 of 4, October 18 to October 26, 2026 |
| Sprint theme    | Admin panel                           |
| Backlog scope   | stories US-21, US-22, US-28 and US-29 |
| Test tools      | Vitest, React Testing Library, jsdom  |
| Test files      | `tests/sprint4.test.jsx` and `tests/api.test.js` |
| Automated tests | 16                                    |
| Manual checks   | 18                                    |

---

## 1. Purpose and Scope

Sprints one to three let the customer register, browse, fill the basket, check out and review orders.  
This sprint adds the administrator side: managing products, stock, customer orders and customer accounts.  

Covered by tests:
- Order status steps and stock/price rules
- Exact admin requests: addresses, methods, form data
- Access control (admins only)
- Dashboard, product list, add/edit/delete products
- Inventory warnings and stock quantity validation
- Order filters, status buttons, order details
- Blocking/unblocking customers
- Message when backend route is missing

Not covered:
- Visual layout (checked manually on phone, tablet, desktop)

---

## 2. Test Environment

| Item            | Detail                  |
|-----------------|--------------------------|
| Test runner     | Vitest                  |
| Screen testing  | React Testing Library with jsdom |
| Node.js version | v24.13.0                |
| Command         | `npm test`              |

---

## 3. Automated Test Cases

| ID     | Area                | What is tested | Expected result | Type   | Result |
|--------|---------------------|----------------|----------------|--------|--------|
| S4-T1  | Order status steps  | Allowed next steps | Pending → processing/cancelled; Processing → shipped/cancelled; Shipped → delivered; Delivered/cancelled → none | Logic | Pass |
| S4-T2  | Stock & price rules | Stock status at 0,1,10,11 | Out of stock at 0; low stock ≤10; API status wins; invalid values rejected | Logic | Pass |
| S4-T3  | Product request body | Form values for new/existing product | Correct fields, trimmed; no stock on edit; validation messages | Logic | Pass |
| S4-T4  | Admin endpoints     | Each request function | Correct address/method; form data values | Logic | Pass |
| S4-T5  | Admin layout        | Admin products page | Admin menu + logout shown; customer menu/footer hidden | Screen | Pass |
| S4-T6  | Access control      | Admin area with customer account | “Administrators only” shown; no requests sent | Screen | Pass |
| S4-T7  | Dashboard           | Sample counts/products/orders | Correct counts, restock list (Eggs, Milk), latest order | Screen | Pass |
| S4-T8  | Product list/delete | Delete + edit actions | Confirm before delete; product removed; edit opens form | Screen | Pass |
| S4-T9  | Add product         | Empty + filled form | Validation messages; then request + confirmation | Screen | Pass |
| S4-T10 | Edit product        | Change name + save | Returns to list; “was updated” message | Screen | Pass |
| S4-T11 | Inventory           | Low/sold-out products; stock update | Warnings shown; invalid blocked; valid saved | Screen | Pass |
| S4-T12 | Orders              | Pending/delivered orders; filters | Allowed buttons only; filters work; status updates | Screen | Pass |
| S4-T13 | Block/unblock       | Account actions | Confirm before block; status toggles with messages | Screen | Pass |
| S4-T14 | Customer details    | View customer | Details page opens; endpoint requested | Screen | Pass |
| S4-T15 | Order details       | Open order details | Heading, delivery info, back link | Screen | Pass |
| S4-T16 | Missing backend route | 404 non‑JSON | Error keeps 404; “endpoint not found” | Logic | Pass |

---

## 4. Manual Verification Checklist

| Scenario | Expected outcome | Result |
|----------|-----------------|--------|
| Open admin signed out | Login form shown | Pass |
| Admin with customer account | “Administrators only”; no requests | Pass |
| Dashboard as admin | Admin header only; counts, restock list, latest orders | Pass |
| Add product empty | Validation messages; nothing sent | Pass |
| Add product with picture | Confirmation; product appears with picture | Pass |
| Edit product price | Returns to list; request excludes stock | Pass |
| Delete product | Confirm first; row disappears | Pass |
| Inventory low/sold-out | Amber/red warnings | Pass |
| Enter -3 or 2.5 stock | Message; nothing sent | Pass |
| Save 25 stock | Returns with message; badge updated | Pass |
| Filter orders pending | Only pending shown | Pass |
| Compare pending vs delivered | Pending → Start/Cancel; Delivered → none | Pass |
| Start processing + cancel | Status updates; cancel restores stock | Pass |
| Order details | Items, delivery, payment, totals | Pass |
| Customer block/unblock | Confirm; status toggles | Pass |
| Backend without admin routes | “Endpoint not found” | Pass |
| Expired login token | “Log in again” message | Pass |
| Log out | Session ends; shop home opens | Pass |

---

## 5. Test Failure Analysis & Resolution

- **Timeouts:** Several UI tests exceeded Vitest’s 5s default due to jsdom overhead.  
- **Payload mismatch:** Product payload always returned FormData, even without image. Image field nested incorrectly inside emoji field.

**Fixes applied:**
- Increased timeout, enabled `vmThreads` in Vitest.  
- Payload builder returns JSON when no image; FormData only with image.  
- Separated image upload field from emoji field.

After fixes: **All 29 tests passed** across 5 files, production build succeeded.

---

## 📊 Result Summary

| Measure              | Value |
|-----------------------|-------|
| Automated tests written | 16   |
| Passed                 | 16   |
| Failed                 | 0    |
| Date of run            | Oct 26, 2026 |

---

## 7. Conclusion
Sprint 4 completed the Admin Panel backend: product management, stock status tracking, strict order transitions with stock restoration, customer account management, and persistent Supabase image uploads. All 30 automated tests passed and admin endpoints were verified against unauthorized access. The backend is ready for final frontend integration and deployment.
in frontend, the automated tests cover the rules and requests that must match the backend and the screens an administrator uses most: the dashboard, products, inventory, orders and customers. The manual checks follow the same paths in the browser and all passed.

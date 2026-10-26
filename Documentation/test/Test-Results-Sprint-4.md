# Test Results — Sprint 4

**Project:** FreshMart — Online Grocery Shop  
**Testers:** Salma Rahman (Backend)  
**Sprint:** Sprint 4 (October 18–22, 2026)  
**Environment:** Local development server (Django), deployed on Render, database on Supabase (PostgreSQL), storage on Supabase Buckets

During Sprint 4, I tested the new Admin Panel endpoints and confirmed that the security rules, order transitions, customer management logic, and cloud image uploads work correctly.

---

## 1. Test Summary

| Metric | Value |
|---|---|
| Automated Tests Passed | 30 |
| Automated Tests Failed | 0 |
| Manual Test Cases | 8 |
| Critical Bugs | 0 |
| Major Bugs | 0 |
| Minor Bugs | 1 (BUG-001 from Sprint 2, resolved through a workaround) |

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

---

## 6. Bugs Carried Forward

### BUG-001: Database Test Cleanup Error
**Severity:** Minor  
**Priority:** Low  
**Status:** Resolved through a standardized workaround  
**Found By:** Salma Rahman  
**Origin:** Sprint 2

**Description:** When Django tests are run without the `--keepdb` flag, the test database cannot be cleaned up successfully because Supabase's connection pooler keeps connections open longer than Django expects.

**Impact:** The tests pass, but automatic test-database deletion fails. This is a cleanup issue only and does not affect the correctness of the test results.

**Resolution:** The standardized command for running tests is:
```powershell
python manage.py test store --keepdb
```
The `--keepdb` flag reuses the existing test database instead of recreating it for every test run.

---

## 7. Conclusion
Sprint 4 completed the Admin Panel backend: product management, stock status tracking, strict order transitions with stock restoration, customer account management, and persistent Supabase image uploads. All 30 automated tests passed and admin endpoints were verified against unauthorized access. The backend is ready for final frontend integration and deployment.
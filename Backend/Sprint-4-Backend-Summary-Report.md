# Sprint 4 - Backend Work Summary

**Project:** FreshMart - Online Grocery Shop  
**Developer:** Salma Rahman (Backend)  
**Sprint dates:** October 18–22, 2026. but done on Oct 23

**Sprint goal:** Develop the Admin Panel backend (products, inventory, orders, customers).

In Sprint 3, I built the checkout and order placement flow. In Sprint 4, I built the Admin Panel backend so administrators can manage products, update inventory, control customer orders, and handle customer accounts. I also added strict security rules to ensure only authorized staff can access these features, and integrated cloud storage so images persist across deployments.

---

## What I Got Done

### Order Database & Serializer Updates

I upgraded the existing order logic to support strict admin controls:

- **`OrderStatusSerializer`** — Enforces strict status transition rules. An order must follow the flow: `pending → processing → shipped → delivered`. Cancelled orders are final. You cannot skip steps.
- **`AdminOrderViewSet`** — Added the ability to filter orders by status (e.g., `?status=pending`). When an admin cancels an order, the system safely restores the product stock and decreases the `sold_count`.

### Inventory Management

I updated the `ProductSerializer` to include a dynamic `stock_status` field. 

- This field automatically calculates if a product is `in_stock` (above 10), `low_stock` (10 or fewer), or `out_of_stock` (0). 
- This solves the Sprint 4 requirement for low-stock notifications, making it easy for the frontend to show warning badges without writing extra logic in React.

### Customer Management

I created a brand new set of features to handle customers. Admins can now list all registered customers and see details like their `order_count` and `total_spent`. I also implemented the "allowed operation" from the planning: the ability to block or unblock a customer account by toggling the `is_active` flag.

### Cloud Storage & Image Uploads

To solve the issue of Render's ephemeral file system (which wiped uploaded images on every deploy), I migrated the backend's media storage to **Supabase Cloud Storage**.

- Configured `django-storages` and `boto3` with S3-compatible credentials.
- Updated the `ProductSerializer` to explicitly accept the `"image"` field so admins can upload images directly from the React Admin Panel.
- Added `MultiPartParser` and `FormParser` to `AdminProductViewSet` so Django correctly receives file uploads.
- Created a custom `get_public_product_image_url` helper to ensure the frontend always receives the correct Supabase public URL instead of a broken local path.

---

## My Sprint 4 Backlog Tasks

| Task | Status |
|---|---|
| Create APIs for adding new products | Done |
| Implement product editing and deletion | Done |
| Save inventory changes to the database | Done |
| Prevent invalid stock quantities | Done |
| Display product availability status (Low stock alerts) | Done |
| Create API to retrieve customer orders | Done |
| Implement order status updates with strict rules | Done |
| Allow only authorized administrators to manage orders | Done |
| Implement retrieval of registered customer info | Done |
| Implement allowed customer account operations (Block/Unblock) | Done |
| Secure customer information from unauthorized access | Done |
| **Configure Supabase cloud storage for persistent image uploads** | **Done** |
| **Update serializers and views to accept admin image uploads** | **Done** |

All backend tasks from the Sprint 4 planning are complete.

---

## Testing

I tested the admin backend in two ways.

First, I expanded the automated test suite in `store/tests.py`. I added 6 new tests specifically for Sprint 4, covering customer listing, blocking/unblocking, stock status flags, order filtering, and strict status transitions. I also updated the old order cancellation test to match the new strict transition rules. All 30 tests passed successfully.

Second, I performed manual end-to-end testing:
- Verified that **new products can be created from the React Admin Panel with image uploads**, and that they correctly save to Supabase Storage.
- Verified that unauthorized requests (like a normal customer trying to access `/api/admin/customers/`) correctly return a `403 Forbidden`.
- Confirmed the Supabase connection locally by uploading 36 images via a Django shell script to verify bucket permissions.

The full test list is in the **Test Results — Sprint 4** document.

---

## Problems I Ran Into

| Issue | Details | How I fixed it |
|---|---|---|
| Test failed on Customer Blocking | My initial serializer for blocking customers was a standard `Serializer` instead of a `ModelSerializer`, which caused a `NotImplementedError` when trying to save. | Changed it to `ModelSerializer` and added the `Meta` class. |
| Old test failed due to new transition rules | A previous test tried to cancel an order directly from the "shipped" state. My new strict rules block this. | Updated the test to follow the legal flow: `pending → processing → cancelled`. |
| Database test cleanup error carry from sprint 2| When running tests without `--keepdb`, PostgreSQL threw an error because the connection was still open. | Used the `--keepdb` flag to reuse the database and skip cleanup. |
| Images not saving to Supabase (Admin Upload) | New products uploaded from the React panel returned an empty `image_url` because Django was not accepting `multipart/form-data` and the `"image"` field was not listed in the serializer's `fields`. | Added `MultiPartParser` and `FormParser` to the viewset, added `"image"` to `ProductSerializer.Meta.fields`, and updated `buildProductPayload` in React to send `FormData`. |
| 403 Forbidden on Supabase Images | The React frontend was blocked from loading images because the Supabase bucket lacked the correct public read policy. | Updated the Supabase SQL policy to `bucket_id = 'media'` and added `custom_domain` to `settings.py` to force correct public URL generation. |
| Render environment variables missing | Render was not connecting to Supabase because the 4 required environment variables (`SUPABASE_PROJECT_ID`, `SUPABASE_BUCKET`, `SUPABASE_S3_ACCESS_KEY`, `SUPABASE_S3_SECRET_KEY`) were not set in the dashboard. | Added all 4 keys to Render's Environment settings and redeployed. |

**What I learned:** business rules (like order transitions) need strict enforcement, and when a rule changes, its tests must change too. Cloud storage is essential for production, and DRF requires explicit `parser_classes` and field inclusion to accept React `FormData` uploads.

---

## Final Work
**Integration & Deployment:** support Faezah with final frontend integration, resolve any remaining mismatches, and back up the Supabase database before submission.

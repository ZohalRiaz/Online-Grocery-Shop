# Fresh Mart - Database Documentation

**Project:** FreshMart - Online Grocery Shop  
**Backend Developer:** Salma Rahman  
**Database:** PostgreSQL on Supabase  
**Sprints covered:** Sprint 1 - Sprint 4 (October 5-25, 2026)

This document covers the database side of the backend: what tables exist, how they connect, and what changed in each sprint. Column-by-column details are in `backend-schema.md`.

---

## Database Info

- **Engine:** PostgreSQL on Supabase
- **Connection:** through the `DATABASE_URL` environment variable
- **Migrations:** managed by Django
- **Storage:** product images are in Supabase Cloud Storage (bucket `media`), not in the database

I chose Supabase because Render's free database only lasts 30 days and our project may be checked after that. Supabase has a stable free tier, and I made a pgAdmin backup before moving so no data was lost. Images are stored in Supabase Cloud Storage because Render's file system is ephemeral and deletes files on every redeploy, so the database only keeps the URL.

---

## Tables Overview

| Table | Purpose | Introduced |
|---|---|---|
| `auth_user` | User accounts (customers and admins) | Sprint 1 |
| `store_category` | Product categories | Sprint 1 |
| `store_product` | Products (price, stock, image, `is_active`, `sold_count`) | Sprint 1 (extended in Sprint 2 and Sprint 4) |
| `store_cart` | One cart per customer | Sprint 2 |
| `store_cartitem` | Products inside a cart | Sprint 2 |
| `store_order` | Placed orders (contact, shipping, payment, delivery, status) | Before Sprint 3 (extended in Sprint 3) |
| `store_orderitem` | Products inside an order | Before Sprint 3 |
| `authtoken_token` | API tokens | Sprint 1 |

Django's built-in auth tables exist automatically. No database triggers or stored procedures are used - all business logic lives in Django serializers and views so it is easier to test and change.

---

## Sprint 1 - Accounts and Catalog

- Used Django's built-in `User` table with `full_name` and email-as-username.
- Created `Category` and `Product` models.
- Built the `seed_data` command with 36 sample products migrated from the old frontend.
- Moved the database to Supabase and kept a pgAdmin backup.

**Design decisions:**
- `is_active` on Product lets admins hide products instead of deleting them, so order history keeps its references.
- `sold_count` is stored and updated on order placement and cancellation, so the "popular" sort does not need an aggregate on every query.

---

## Sprint 2 - Cart and Product Images

- Added `store_cart` (one per customer) and `store_cartitem` with a `unique_together = ("cart", "product")` constraint, so adding the same product again increases the quantity.
- Added an `ImageField` to `Product` and configured `MEDIA_URL` / `MEDIA_ROOT`.
- Updated `seed_data` to copy product images into `media/products/`.

**Design decisions:**
- Cart lives in the database, not `localStorage`, so it survives a page refresh and is the same on every device.
- `select_for_update()` locks the product row while checking stock, so two customers cannot oversell the last item.
- The backend calculates subtotals and totals; the frontend never sends a price.

---

## Sprint 3 - Checkout and Orders

- Added `delivery_option` (`standard` or `express`) to `store_order`.
- Order creation runs inside a single `transaction.atomic()` block: lock each product row, check stock, save the order and items, reduce stock, increase `sold_count`, and clear the cart.
- Duplicate submissions within 30 seconds are rejected by checking recent orders for the same user.
- Stock restoration on cancellation is handled inside `transaction.atomic()` using `F()` expressions for atomic updates.

**Design decisions:**
- Delivery fee is calculated on the backend (standard 2.00, express 5.00). The frontend never sends the total.
- Stock is stored on `Product` because FreshMart sells a fixed product list - a separate inventory table would only be needed for per-warehouse or per-batch tracking.
- Duplicate prevention uses a time window rather than a unique constraint, so a genuine repeat order later is not blocked.

---

## Sprint 4 - Admin Panel

No new tables. All admin features work on existing tables.

- **Product management:** CRUD on `store_product`. `stock_status` (in_stock / low_stock / out_of_stock) is computed in the serializer, not stored, so it cannot drift.
- **Order management:** status updates on `store_order`. Strict transition rules are enforced in the serializer with clear error messages, because a database constraint would be harder to change.
- **Customer management:** block/unblock by setting `is_active` on `auth_user`. Django already enforces this at login, so no new column was needed.
- **Dashboard stats:** aggregate queries on existing tables. A stats table would be redundant because the counts must always reflect live data.

**Storage migration:** product images moved from Render's local `media/` to Supabase Cloud Storage. The bucket is public-read so customers can see images, and upload-restricted so only the backend with S3 secret keys can write. Uploads are handled by `django-storages` and exposed through the serializer as a public URL.

---

## Relationships

- A User has one Cart (Sprint 2).
- A Cart has many CartItems, each linked to one Product (Sprint 2).
- A User has many Orders.
- An Order has many OrderItems, each linked to one Product.
- A Product belongs to one Category (Sprint 1).
- An Admin user (`is_staff=True`) manages products, orders, and customers (Sprint 4).

Foreign keys, `on_delete` behavior, and column details are in `backend-schema.md`.

---

## Data Consistency

- `transaction.atomic()` wraps order creation and admin cancellation so changes are all-or-nothing.
- `select_for_update()` prevents race conditions on cart and checkout stock updates.
- `F()` expressions make stock increments atomic under concurrency.
- `unique_together` on `CartItem (cart, product)` prevents duplicate rows in a cart.
- Hidden products (`is_active=False`) are filtered in the ORM, so old orders can still reference them.

---

## Sprint-by-Sprint Summary

| Sprint | Database work |
|---|---|
| **Sprint 1** | Database moved to Supabase. `User`, `Category`, `Product`. `seed_data` with 36 products. |
| **Sprint 2** | `Cart` and `CartItem`. `Product.image` field. `select_for_update()` for stock safety. |
| **Sprint 3** | `Order.delivery_option` field. Order placement uses `transaction.atomic()` with stock and `sold_count` updates. |
| **Sprint 4** | No new tables. Storage migrated to Supabase Cloud Storage. |

---

## Related Documentation

- `backend-schema.md` - table reference (columns, foreign keys, `on_delete`)
- `API-Endpoints-Sprint-1.md` to `API-Endpoints-Sprint-4.md` - API reference
- `Test-Results-Sprint-1.md` to `Test-Results-Sprint-4.md` - test results per sprint
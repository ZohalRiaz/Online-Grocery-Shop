# API Endpoints Documentation — Sprint 4

**Project:** FreshMart — Online Grocery Shop  
**Backend Developer:** Salma Rahman  
**Sprint:** Sprint 4 (October 18–22, 2026), but done on Oct 23

This document describes the admin endpoints implemented or updated during Sprint 4.

**Base URL (Local):** `http://127.0.0.1:8000/api`  
**Base URL (Live):** `https://freshmart-ikhw.onrender.com/api`

**Authentication:** All admin endpoints require an admin authentication token.

```http
Authorization: Token YOUR_ADMIN_TOKEN
```

Only users with `is_staff=True` can access these routes. Authenticated non-admin users will receive a `403 Forbidden` response.

---

## 1. Product Management (US-21, US-22)

**Methods:** `GET`, `POST`, `PATCH`, `DELETE`

**Endpoints:**

- `GET /api/admin/products/` — List products.
- `POST /api/admin/products/` — Create a product.
- `GET /api/admin/products/<id>/` — Retrieve a specific product.
- `PATCH /api/admin/products/<id>/` — Update a product.
- `DELETE /api/admin/products/<id>/` — Delete a product.

**Description:**

Allows admins to manage products, including creating, viewing, updating, and deleting them.
The product response includes a `stock_status` field indicating the current stock level:

- `in_stock` — stock > 10
- `low_stock` — 1 ≤ stock ≤ 10
- `out_of_stock` — stock = 0

**Errors:**

- 400 — Invalid data (e.g. negative stock).
- 401 — Missing or invalid token.
- 403 — Not an admin.
- 404 — Product not found.
- 415 — Request body format not accepted.

---

## 2. Product Image Upload

**Method:** `POST`, `PATCH`  
**Content-Type:** `multipart/form-data`

**Endpoints:**

- `POST /api/admin/products/` (with file)
- `PATCH /api/admin/products/<id>/` (with file)

**Description:**

Admins can upload a product image directly from the React Admin Panel. The image is stored in **Supabase Cloud Storage** (bucket: `media`), and the `image_url` field is automatically generated in the product response.

The frontend must send the request as `FormData` (not JSON) with the following field:

- `image` — The image file (`.jpg`, `.jpeg`, or `.png`).

**Example Request — Upload Product with Image (JavaScript)**

```javascript
const formData = new FormData();
formData.append("name", "Apple");
formData.append("price", "1.50");
formData.append("category", 1);
formData.append("stock", 50);
formData.append("image", fileInput.files[0]); // The selected image

fetch("https://freshmart-ikhw.onrender.com/api/admin/products/", {
  method: "POST",
  headers: { Authorization: `Token ${token}` },
  body: formData,
});
```

**Example Response — `201 Created`**

```json
{
  "id": 41,
  "name": "Apple",
  "price": "1.50",
  "image_url": "https://sqdfgjxloigtdwnlieer.supabase.co/storage/v1/object/public/media/products/apple.jpg",
  "stock_status": "in_stock",
  ...
}
```
**Errors:**
400, 401, and 403 mentioned in above.

- 413 — Image too large.
---

## 3. Customer Order Management (US-28)

**Methods:** `GET`, `PATCH`

**Endpoints:**

- `GET /api/admin/orders/` — List all orders.
- `GET /api/admin/orders/?status=pending` — Filter orders by status.
- `GET /api/admin/orders/<id>/` — Retrieve a specific order.
- `PATCH /api/admin/orders/<id>/` — Update an order's status.
```

**Valid Order Status Transitions:**

- `pending` → `processing` or `cancelled`
- `processing` → `shipped` or `cancelled`
- `shipped` → `delivered`
- `delivered` → Final status; no further changes allowed.
- `cancelled` → Final status; no further changes allowed.

Invalid transitions return a `400 Bad Request` response. When an order is cancelled, the system restores the product stock.

---

## 4. Customer Account Management (US-29)

**Methods:** `GET`, `PATCH`

**Endpoints:**

- `GET /api/admin/customers/` — List all non-staff customers.
- `GET /api/admin/customers/<id>/` — Retrieve a specific customer.
- `PATCH /api/admin/customers/<id>/` — Update a customer's account status.

**Description:**

Allows admins to view customer accounts and manage whether customers can log in. Customer details include their order count and total amount spent.

**Security Rules:**

- Admins cannot block another admin account.
- Blocking a customer (is_active: false) prevents them from logging in.
- Only authorized staff users can access these endpoints.
- To unblock a customer, set `is_active` to `true`.
---

## 5. Admin Dashboard Statistics

**Method:** `GET`

**Endpoint:** `GET /api/admin/stats/`

**Description:**

Returns summary statistics for the admin dashboard, including product, order, customer, and low-stock counts.

**Example Response — `200 OK`**

```json
{
  "total_products": 42,
  "total_orders": 156,
  "total_customers": 89,
  "low_stock": 5
}
```
---

## 6. Cloud Storage (Supabase) — Integration Notes

Images are stored in the media bucket under products/. Render's local disk is ephemeral, so Supabase keeps images persistent across deployments. 

**Public URL Format:**

```
https://<PROJECT_ID>.supabase.co/storage/v1/object/public/media/products/<filename>
```
**Required Render environment variables:** SUPABASE_PROJECT_ID, SUPABASE_BUCKET, SUPABASE_S3_ACCESS_KEY, SUPABASE_S3_SECRET_KEY.
---

## 7. Error Codes Summary

| Status Code | Meaning |
|---|---|
| `200 OK` | The request was successful. |
| `201 Created` | The product was successfully created. |
| `400 Bad Request` | The submitted data is invalid, or an order status transition is not allowed. |
| `401 Unauthorized` | Authentication credentials are missing or invalid. |
| `403 Forbidden` | The authenticated user does not have admin permissions. |
| `404 Not Found` | The requested resource does not exist. |
| `413 Payload Too Large` | The uploaded image exceeds the maximum file size. |
| `415` | Unsupported request body format (e.g. JSON sent where multipart is required). |
---

## 8. Frontend Integration Workflow — Admin Panel

1. **Login:** The admin logs in through `POST /api/auth/login/`. The frontend checks whether `response.user.is_staff === true` before displaying the admin panel.

2. **Dashboard:** The frontend calls `GET /api/admin/stats/` to display summary cards for products, orders, customers, and low-stock items.

3. **Products:** The frontend calls `GET /api/admin/products/` to display the product table. It uses the `stock_status` field to show visual indicators, and the `image_url` field to display the product image. When creating or editing a product, the frontend must send `FormData` (not JSON) to include the image file.

4. **Orders:** The frontend calls `GET /api/admin/orders/` to display orders. It provides status-update actions based on the current order status and sends updates through the `PATCH` endpoint.

5. **Customers:** The frontend calls `GET /api/admin/customers/` to display customer accounts. It provides a control to block or unblock customers by updating the `is_active` field.

---

## 9. Sprint 4 Summary

### Endpoints Added

1. `GET /api/admin/customers/` — Customer list.
2. `GET /api/admin/customers/<id>/` — Customer detail.
3. `PATCH /api/admin/customers/<id>/` — Customer account management.
4. **`POST /api/admin/products/` (multipart)** — Product creation with image upload.
5. **`PATCH /api/admin/products/<id>/` (multipart)** — Product update with image upload.

### Endpoints Updated

1. `/api/admin/orders/` — Added status filtering and strict order transition rules.
2. `/api/admin/products/` — Added the `stock_status` field and `image_url` field to product responses.
3. **`ProductSerializer`** — Added the `"image"` field to accept file uploads and the `get_public_product_image_url` helper to generate correct Supabase URLs.

### Conclusion

Sprint 4 introduced customer account management, persistent cloud image uploads via Supabase, and enhanced the existing product and order management endpoints. The admin API now supports product management with image uploads, stock status tracking, order filtering, controlled order status transitions, and customer blocking and unblocking. These endpoints provide the backend functionality needed for the frontend team to integrate the Fresh Mart Admin Panel.
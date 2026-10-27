# Fresh Mart Sprint 4 Report: Frontend Development

**SPRINT 4 REPORT**  
Frontend Development  
Fresh Mart · Online Grocery Shop  

---

##  Sprint Information

| Item            | Detail                                                                 |
|-----------------|-------------------------------------------------------------------------|
| Course          | ITC 315, Software Engineering Project                                   |
| Sprint          | Sprint 4 of 4, October 18 to October 25, 2026                           |
| Epic            | Admin Panel                                                            |
| Prepared by     | Faezah Ahmadi, Frontend Developer                                       |
| Backlog scope   | US-21, US-22, US-28 and US-29 (Sprint 4 planning document)             |
| Frontend stack  | React 19, Vite, Tailwind CSS 4, lucide-react                            |
| Integration     | Django REST API (admin endpoints, token authentication)                 |
| Outcome         | Sprint goal reached: Admin can manage products, stock, orders, accounts |

---

## 1. Sprint Overview

The three sprints built the customer side of Fresh Mart online shop: registering, browsing, searching, filling a cart, checking out and reviewing past orders. Sprint 4 builds the other side of the shop. The frontend work was to give the administrator one place to keep the shop running: adding and editing products, watching stock, moving orders forward and managing customer accounts.
Every screen follows the rules of the Sprint 4 backend exactly, so that nothing has to be adjusted on the backend side when the two parts are joined.
**Sprint goal:** An authorized administrator can manage products, inventory, customer orders and customer accounts from a secure Admin Panel.

---

## 2. Backlog Coverage

| Story | Summary                  | Frontend deliverable                                                                 | Status |
|-------|--------------------------|--------------------------------------------------------------------------------------|--------|
| US-21 | Product management       | Product table with search, add/edit pages, delete confirmation, picture upload        | Done   |
| US-22 | Inventory management     | Stock quantities, update-stock page, availability badges, warnings                   | Done   |
| US-28 | Customer order management| Order list with filters, order details page, status buttons with allowed steps       | Done   |
| US-29 | Customer account mgmt    | Customer list, details page, block/unblock controls                                  | Done   |

---

### Task List (Sprint 4 Planning)

| No. | Task                                | Delivered as                                      |
|-----|-------------------------------------|--------------------------------------------------|
| 1   | Create Admin Dashboard              | Dashboard page with four count cards + panels    |
| 2   | Navigation                          | Admin header with links + Log out                |
| 3   | Display info                        | Count cards, restock list, latest orders         |
| 4   | Add product form                    | Full product fields + picture upload             |
| 5   | Edit product interface              | Edit page with current details                   |
| 6   | Delete product                      | Inline Confirm/Keep prompt                       |
| 7   | Display products                    | Products table with search, badges, visibility   |
| 8   | Connect product ops                 | API calls to `/admin/products/`                  |
| 9   | Display stock                       | Inventory table with stock/unit                  |
| 10  | Update stock controls               | Update stock page with Save                      |
| 11  | Availability badges                 | Green/amber/red badges                           |
| 12  | Low/out-of-stock warnings           | Warning banners + filters                        |
| 13  | Orders page                         | Orders list with filters                         |
| 14  | Order info                          | Order cards + details page                       |
| 15  | Order status controls               | Allowed step buttons only                        |
| 16  | Connect order ops                   | API calls to `/admin/orders/`                    |
| 17  | Customers page                      | Customers table with search                      |
| 18  | Customer info                       | Email, join date, orders, total spent, status    |
| 19  | Account operations                  | Block/unblock with confirmation                  |

---

## 3. Work Delivered

### 3.1 Admin Area & Dashboard
- Private area (admins only).  
- Own header: dark green, logo, links, logout.  
- Dashboard: counts, restock list, latest orders.  
- Loading placeholders + error messages.

### 3.2 Product Management
- Product list with search, badges, visibility.  
- Add/edit forms with validation.  
- Delete confirmation.  
- Picture upload replaces emoji.

### 3.3 Inventory Management
- Stock table with badges.  
- Warnings for low/out-of-stock.  
- Filters (All, Low, Out).  
- Update stock page with validation.

### 3.4 Order Management
- Order list with filters.  
- Status controls (allowed steps only).  
- Cancel confirmation returns items to stock.  
- Order details page with delivery/payment info.

### 3.5 Customer Management
- Customer list with search.  
- Details page with block/unblock.  
- Confirmation before blocking.
---

## 4. Interface & Experience

The admin panel uses the design of the earlier sprints: dark green header, rounded white cards, green buttons, soft shadows and the same status badges. Stock badges follow the same idea in three colors.
**Responsive layout:**  
  - **Phone:** single column, scrollable tables.  
  - **Tablet:** two-column forms.  
  - **Desktop:** full-width header, side-by-side panels.

---

## 5. Validation Rules

| Field            | Rule                                                                 |
|------------------|----------------------------------------------------------------------|
| Product name     | Required, ≤150 chars                                                 |
| Category         | Required, from shop categories                                       |
| Price            | Required, ≥0, ≤6 digits + 2 decimals                                 |
| Unit             | Required, ≤30 chars                                                  |
| Stock (new)      | Required, whole number ≥0                                            |
| Emoji            | Optional, ≤8 chars                                                   |
| Picture          | Optional, one image file                                             |
| New stock qty    | Whole number ≥0; negatives/decimals rejected                         |
| Order status     | Only next allowed step; delivered/cancelled final                    |
| Customer account | Block/unblock only                                                   |

---

## 6. API Interaction

| Action                  | Request                          | Result on screen                          |
|--------------------------|----------------------------------|-------------------------------------------|
| Dashboard                | GET /admin/stats/, /products/, /orders/ | Counts, restock list, latest orders |
| Products list            | GET /admin/products/             | Product table                             |
| Add/Edit form categories | GET /categories/                 | Category list                             |
| Add product              | POST /admin/products/            | Confirmation                              |
| Edit product             | PATCH /admin/products/{id}/      | Back to list + message                    |
| Delete product           | DELETE /admin/products/{id}/     | Row disappears                            |
| Save stock               | PATCH /admin/products/{id}/      | Back to inventory + message               |
| Orders list/filter       | GET /admin/orders/               | Order cards                               |
| Order details            | GET /admin/orders/{id}/          | Items, delivery, totals                   |
| Change order status      | PATCH /admin/orders/{id}/        | New status + message                      |
| Customers list           | GET /admin/customers/            | Customer table                            |
| Customer details         | GET /admin/customers/{id}/       | Customer record                           |
| Block/unblock customer   | PATCH /admin/customers/{id}/     | New status + message                      |

---

## 7. Daily Progress

| Date       | Focus                  | Result                                                   |
|------------|------------------------|----------------------------------------------------------|
| Oct 18 Sun | Planning & groundwork  | Admin API file, rules, routes, access control            |
| Oct 20 Mon | Dashboard & products   | Dashboard, product list, add/edit forms, delete confirm  |
| Oct 21 Tue | Inventory, orders, customers | Stock table, warnings, order list, customer list |
| Oct 22 Wed | Refinement             | Separate pages, header, picture upload, clearer errors   |
| Oct 23 Thu | Testing & delivery     | Automated tests, browser checks, fixes, sprint report    |

---

## 8. Verification Scenarios

| Scenario                                      | Expected outcome                                               |
|-----------------------------------------------|----------------------------------------------------------------|
| Open the admin address while signed out        | The administrator login form is shown                          |
| Open the admin address with a customer account | Administrators only is shown and no admin request is sent       |
| Open the dashboard as administrator            | Admin header only; counts, restock list and latest orders appear|
| Submit the add form empty                      | Messages under the fields; nothing is sent                     |
| Add a product with a picture                   | Confirmation message; the product is listed with its picture    |
| Edit a product's price and save                | Back on the list with a message; the stock was not sent         |
| Press Delete, then confirm                     | Confirmation question first; the row disappears only after Confirm |
| Open inventory with a low and a sold-out product | Amber and red warnings name the products                      |
| Enter -3 or 2.5 as the new stock               | Message under the box; nothing is sent                         |
| Save 25 as the new stock                       | Back on inventory with a message; the badge turns to In stock   |
| Filter orders by Pending                       | Only pending orders are listed                                 |
| Look at a pending and a delivered order        | Pending offers Start processing and Cancel; delivered offers no buttons |
| Cancel an order                                | Confirmation first; the items return to stock                  |
| Open an order's details                        | Items, delivery information, payment and totals are shown       |
| Open a customer, block and unblock             | Confirmation before blocking; the status changes each time      |
| Use a backend without the admin routes         | A message says the endpoint was not found                      |
| Use an expired login token                     | A message asks the administrator to log in again                |
| Press Log out                                  | The session ends and the shop home page opens                   |
---

## 9. Obstacles & Decisions

- Rules must match backend (price limits, etc.).  
- Pictures require form-data requests.  
- Separate pages for each task.  
- Admin header distinct from customer header.  
- Only allowed status steps shown.  
- Clearer error messages for wrong backend addresses.

---

## 10. Sprint Review & Retrospective

**What went well:**  
- Backend endpoint list simplified badge/warning logic.  
- Reused confirmation
## 11. Appendix

### A. Code organization

| Location                                | Purpose                                                   |
|-----------------------------------------|-----------------------------------------------------------|
| src/pages/admin/AdminLayout.jsx         | Access control, admin header and the route to every admin page |
| src/pages/admin/DashboardPage.jsx       | Count cards, restock list and latest orders               |
| src/pages/admin/ProductsAdminPage.jsx   | Product table, add page and edit page                     |
| src/pages/admin/InventoryPage.jsx       | Stock table, warnings and the update-stock page           |
| src/pages/admin/OrdersAdminPage.jsx     | Order list, status controls and the order details page    |
| src/pages/admin/CustomersAdminPage.jsx  | Customer table, customer details and block control        |
| src/components/AdminUI.jsx              | Stock badge, thumbnail, count card and form field         |
| src/services/adminApi.js                | Admin requests and the rules copied from the backend      |
| src/services/api.js                     | Shared request code: form-data bodies and clearer errors  |
| src/App.jsx                             | Admin routes, admin layout without customer header and footer, Admin link for staff |
| tests/sprint4.test.jsx, tests/api.test.js | Automated tests for this sprint                          |

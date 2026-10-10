# Sprint 2 – Sprint Planning

**Project:** E-Commerce Grocery Shop  
**Course:** ITC 315 – Software Engineering Project  
**Sprint:** 2 – Cart Management  
**Duration:** October 11–15, 2026  
**Epic:** Cart Management

---

## 1. Sprint Goal

Create a fully working Cart Management system within the given timeline.

---

## 2. User Stories and Task Assignment

The following user stories are selected for Sprint 2.

| User Story ID | User Story Title | Assigned To |
|---|---|---|
| US-09 | Add Product to Cart | Faezah Ahmadi / Salma Rahman |
| US-10 | View Shopping Cart | Faezah Ahmadi / Salma Rahman |
| US-11 | Change Quantity | Faezah Ahmadi / Salma Rahman |
| US-12 | Remove Product | Faezah Ahmadi / Salma Rahman |
| US-13 | Clear Cart | Faezah Ahmadi / Salma Rahman |
| US-14 | View Cart Total | Faezah Ahmadi / Salma Rahman |

---

## 3. Task Division and Responsibilities

### 3.1 Frontend Development

**Assigned To:** Faezah Ahmadi  
**Role:** Frontend Developer

#### US-09 – Add Product to Cart
- Implement Add to Cart button on product pages.
- Update cart icon/count when products are added.
- Display success or error feedback.

#### US-10 – View Shopping Cart
- Design the shopping cart page.
- Display product image, name, price, quantity, and subtotal.
- Show an empty-cart message when no products exist.

#### US-11 – Change Quantity
- Add increase (+) and decrease (−) quantity buttons.
- Update displayed subtotal and total when quantity changes.

#### US-12 – Remove Product
- Add a Remove button for each cart item.
- Update the displayed cart after removal.

#### US-13 – Clear Cart
- Add a Clear Cart button.
- Show a confirmation message before clearing the cart.
- Display the empty-cart state afterward.

#### US-14 – View Cart Total
- Display the total price clearly in the shopping cart.
- Update the displayed total whenever cart contents change.

### 3.2 Backend Development

**Assigned To:** Salma Rahman  
**Role:** Backend Developer

#### US-09 – Add Product to Cart
- Create Cart and CartItem models in Django.
- Implement Add to Cart API.
- Validate product availability and stock before adding.

#### US-10 – View Shopping Cart
- Implement API to retrieve the logged-in customer's cart.
- Return product details, quantities, prices, and subtotals.

#### US-11 – Change Quantity
- Implement API to update cart item quantities.
- Prevent invalid quantities and quantities exceeding available stock.

#### US-12 – Remove Product
- Implement API to remove a selected product from the cart.

#### US-13 – Clear Cart
- Implement API to remove all items from the customer's cart.

#### US-14 – View Cart Total
- Calculate each product's subtotal (price × quantity).
- Calculate and return the complete cart total.
- Recalculate totals whenever cart items change.

### 3.3 Scrum Master

**Assigned To:** Zohal Riaz  
**Role:** Scrum Master

- **Task 1:** Facilitate daily meetings 
- **Task 2:** Ensure the sprint 2 progress 

---

## 4. Integration & Testing

**Assigned To:** Faezah Ahmadi and Salma Rahman  
**Responsibility:** Frontend and Backend Developers

1. Connect frontend cart actions to Django REST APIs.
2. Ensure the cart belongs to the logged-in customer and is saved in the database.
3. Test adding products to the cart.
4. Test displaying cart items and the empty-cart state.
5. Test increasing and decreasing quantities, including stock limits.
6. Test removing individual products and clearing the entire cart.
7. Verify subtotal and total calculations after every cart change.
8. Fix integration errors and perform final testing.

---

## 5. Prepared By

**Sayeda Taiba Agha**  
**Role:** Product Owner  
**Project:** E-Commerce Grocery Shop  
**Sprint:** Sprint 2 – Cart Management

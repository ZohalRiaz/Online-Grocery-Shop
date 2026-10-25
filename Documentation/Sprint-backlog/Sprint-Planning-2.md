# Sprint 2 Planning – E-Commerce Grocery Shop (Fresh Mart)

**Course:** ITC 315 – Software Engineering Project  
**Project:** E-Commerce Grocery Shop (Fresh Mart)  
**Sprint:** Sprint 2 – Cart Management  
**Sprint Duration:** October 11–13, 2026  
**Epic:** Cart Management  
**Prepared by:** Sayeda Taiba Agha (Product Owner)

---

## 1. Sprint 2 Goal

Create a fully working Cart Management system within the given timeline.

## 2. Sprint 2 User Stories

The following user stories are selected for Sprint 2.

| User Story ID | User Story Title | Assigned To |
|---|---|---|
| US-05 | Add Product to Cart | Frontend + Backend |
| US-06 | View Shopping Cart | Frontend + Backend |
| US-07 | Change Quantity | Frontend + Backend |
| US-08 | Remove Product | Frontend + Backend |
| US-09 | Clear Cart | Frontend + Backend |
| US-10 | View Cart Total | Frontend + Backend |

**Total Sprint 2 User Stories:** 6

## 3. Sprint 2 Task Distribution

### 3.1 US-05 – Add Product to Cart

**Frontend Development – Faezah Ahmadi**
- Implement Add to Cart button on product pages.
- Update cart icon/count when products are added.
- Display success or error feedback.

**Backend Development – Salma Rahman**
- Create Cart and CartItem models in Django.
- Implement Add to Cart API.
- Validate product availability and stock before adding.

**Testing and Quality Assurance**
- Test adding products to the cart.
- Test product stock validation.

### 3.2 US-06 – View Shopping Cart

**Frontend Development – Faezah Ahmadi**
- Design the shopping cart page.
- Display product image, name, price, quantity, and subtotal.
- Show an empty-cart message when no products exist.

**Backend Development – Salma Rahman**
- Implement API to retrieve the logged-in customer's cart.
- Return product details, quantities, prices, and subtotals.

**Testing and Quality Assurance**
- Test displaying cart items.
- Test the empty-cart state.

### 3.3 US-07 – Change Quantity

**Frontend Development – Faezah Ahmadi**
- Add increase (+) and decrease (−) quantity buttons.
- Update displayed subtotal and total when quantity changes.

**Backend Development – Salma Rahman**
- Implement API to update cart item quantities.
- Prevent invalid quantities and quantities exceeding available stock.

**Testing and Quality Assurance**
- Test increasing and decreasing quantities.
- Test stock limits.
- Verify total calculations after quantity changes.

### 3.4 US-08 – Remove Product

**Frontend Development – Faezah Ahmadi**
- Add a Remove button for each cart item.
- Update the displayed cart after removal.

**Backend Development – Salma Rahman**
- Implement API to remove a selected product from the cart.

**Testing and Quality Assurance**
- Test removing individual products.
- Verify the cart total after removal.

### 3.5 US-09 – Clear Cart

**Frontend Development – Faezah Ahmadi**
- Add a Clear Cart button.
- Show a confirmation message before clearing the cart.
- Display the empty-cart state afterward.

**Backend Development – Salma Rahman**
- Implement API to remove all items from the customer's cart.

**Testing and Quality Assurance**
- Test clearing the entire cart.
- Verify the empty-cart state.

### 3.6 US-10 – View Cart Total

**Frontend Development – Faezah Ahmadi**
- Display the total price clearly in the shopping cart.
- Update the displayed total whenever cart contents change.

**Backend Development – Salma Rahman**
- Calculate each product's subtotal (price × quantity).
- Calculate and return the complete cart total.
- Recalculate totals whenever cart items change.

**Testing and Quality Assurance**
- Verify subtotal and total calculations after every cart change.

### 3.7 Integration and Testing

**Assigned To:** Faezah Ahmadi and Salma Rahman

- Connect frontend cart actions to Django REST APIs.
- Ensure the cart belongs to the logged-in customer and is saved in the database.
- Test cart functionality.
- Fix integration errors and perform final testing.

## 4. Scrum Master Responsibilities

**Assigned To:** Zohal Riaz

- Arrange daily Scrum meetings.
- Ensure follow-ups for the team’s progress.
- Make sure that the sprint burndown chart is updated.
- Assist the team in problem-solving during the sprint.
- Arrange the sprint review meeting.

## 5. Product Owner Duties

**Assigned To:** Sayeda Taiba Agha

- Create a Sprint 2 plan.
- Explain the user stories to the development team.
- Review the user stories completed.
- See if the features meet the acceptance criteria.
- Accept or reject the user stories completed.
- Develop a Sprint 2 review report.

## 6. Sprint 2 Expected Deliverables

- Working Add to Cart button.
- Shopping cart page displaying selected products.
- Product quantity controls.
- Remove Product functionality.
- Clear Cart functionality.
- Correct subtotal and cart total calculations.
- Connected cart frontend and backend.
- Tested cart features.

## 7. Sprint 2 Definition of Done

The completion of a user story can be defined by:

- Completing all the assigned tasks.
- Functioning of the feature as intended.
- Connecting the frontend and backend.
- Testing the feature.
- Resolving any significant issues.
- Meeting the acceptance criteria.
- Acceptance of the user story by the Product Owner.

---

**Prepared by:**  
Sayeda Taiba Agha  
Product Owner – Fresh Mart

**Approved by:** 

Developer Team 
(Salma Rahman & Faezah Ahmadi)

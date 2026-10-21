# Sprint 2 Review Report

**Prepared by:** Product Owner (Sayeda Taiba Agha)  
**Course:** ITC 315 – Software Engineering Project  
**Project:** E-Commerce Grocery Shop (Fresh Mart)  
**Sprint 2:** 11–13 October, 2026  
**Report Date:** 13 October, 2026  
**Epic:** Cart Management

---

## 1. Sprint 2 Goal

Create a fully working Cart Management system that help users to manage the products quantity and price in one place within the given timeline.

## 2. Sprint 2 Achievements

| User Story ID | User Story Title | Status | Notes |
|---|---|---|---|
| US-05 | Add Product to Cart | Done | Fully functioning add to cart button |
| US-06 | View Shopping Cart | Done | A functional cart page created succefully |
| US-07 | Change Quantity | Done | Functional product quantity management buttons |
| US-08 | Remove Product | Done | Functional remove button |
| US-09 | Clear Cart | Done | Functional clear cart button |
| US-10 | View Cart Total | Done | Functional view cart total card |

**Final Note:** All the determined user stories were achieved for Sprint 2.

## 3. Sprint Backlog Completion

| Description | Result |
|---|---|
| Total Planned User Stories | 6 |
| Completed User Stories | 6 |
| Incomplete User Stories | 0 |
| Accepted User Stories | 6 |
| Rejected User Stories | 0 |
| Sprint Completion Percentage | 100% |

All six planned user stories were completed within the Sprint 2 timeline and accepted by the Product Owner.

## 4. Acceptance Criteria Review

| US ID | User Story Title | Acceptance Criteria | Acceptance Criteria Review | PO Decision | Notes |
|---|---|---|---|---|---|
| US-05 | Add Product to Cart | Add cart option for each product by clicking, which allows the user to add the product to their cart. | An Add to Cart button is created, which is visible in both the product card and product details. The button is successfully connected to the cart page. | Accepted | No comments |
| US-06 | View Shopping Cart | Cart page that shows all the added products by the user. | A well developed cart page where customers can see all the products that they aim to buy in one place. Customers are able to manage the products in the cart page. | Accepted | No comments |
| US-07 | Change Quantity | Quantity controller that helps add or reduce the number of the product. | Quantity controller added to the product detail page and cart page. Users can increase and decrease the number of the product. | Accepted | No comments |
| US-08 | Remove Product | Remove option for each product. | A remove button for each product to manage the product individually. | Accepted | No comments |
| US-09 | Clear Cart | Clear all option that clears the whole cart at once. | Clear cart option that clears the whole cart. | Accepted | No comments |
| US-10 | View Cart Total | A total price section that gives the summary of the product purchase with correct price calculation. | View total section correctly shows the number of products and calculates the total price. | Accepted | No comments |

**Total User Stories Reviewed:** 6  
**PO Decision:** All Accepted

## 5. Sprint Demonstration

During the Sprint 2 Review Meeting, the completed Cart Management features were presented for review.

The demonstration covered:

- Adding available products to the shopping cart.
- Viewing selected products on the cart page.
- Increasing and decreasing product quantities.
- Preventing quantities from exceeding available stock.
- Removing individual products from the cart.
- Clearing the shopping cart.
- Viewing the total number of products and calculated price.
- Displaying confirmation messages when products are added.
- Showing error messages when invalid quantities are entered.

**Demonstration Result:** All six user stories were accepted by the Product Owner.

## 6. User Abilities After Sprint 2 Has Been Completed

- Users can add products in stock to their cart.
- Users can see all the products that they added to the cart on the cart page.
- Users can see a total summary section on the cart page.
- Users cannot add products out of stock to their cart.
- Customers can manage product quantities using quantity controller (increase & decrease) in product details.
- Customers can manage product quantities using quantity controller (increase & decrease) on the cart page.
- Users can see a pop-up message when the product is added to the cart.
- Users can put a valid amount for the product quantity.
- Users can see a pop-up message if they put an invalid number in quantity controller.
- Users can remove an individual product from the cart.
- Users can clear the whole cart.

## 7. Business Values

- A user friendly platform.
- A user can manage the products they want to buy using the cart management page.
- Customers can review selected products before proceeding to checkout.
- Accurate quantity and price calculations help avoid purchasing mistakes.
- Stock validation prevents customers from adding unavailable products.

## 8. Sprint Metrics

| Metric | Target | Actual | Status |
|---|---|---|---|
| User Stories Completed | 6 | 6 | Done 100% |
| User Stories Accepted | 6 | 6 | Done 100% |
| Backend Automated Tests Passed | 24 | 24 | Done |
| Frontend Automated Tests Passed | 5 | 5 | Done |
| Automated Tests Failed | 0 | 0 | Done |
| Critical Bugs | 0 | 0 | Done |
| Major Bugs | 0 | 0 | Done |
| Open Bugs | 0 | 2 reported issues | Pending |
| Sprint Goal Met | Yes | Yes | Done |

## 9. Quality Assessment

### 9.1 Code Quality

- The codes are fully functional.
- The codes are clear and well structured.
- The codes have potential to reuse.

| Quality Criteria | Review |
|---|---|
| Functionality | Completed |
| Input Validation | Passed reported cart checks |
| Authentication and Authorization | Passed reported checks |
| Backend Automated Testing | 24 Tests Passed |
| Frontend Automated Testing | 5 Tests Passed |
| Critical and Major Bugs | None |
| Code Maintainability | Further review required |

The frontend and backend Cart Management features were successfully connected. The backend validates product availability, quantity limits, and cart ownership.

### 9.2 Testing Quality

**Testing Summary:**

| Metric | Value |
|---|---|
| Backend Automated Tests Passed | 24 |
| Backend Automated Tests Failed | 0 |
| Frontend Automated Tests Passed | 5 |
| Frontend Manual Checks Listed | 8 |
| Critical Bugs | 0 |
| Major Bugs | 0 |
| Minor Bugs | 1 in main test summary |
| Open Bugs | 2 issues described in bug section |
| Sprint 1 Bugs Fixed | 2 |

The backend automated tests were completed successfully using `python manage.py test store --keepdb`.

The frontend automated tests were completed using Vitest, React Testing Library, and jsdom.

The testing report also confirms that the backend correctly calculates cart subtotals and total prices, prevents invalid quantities, and restricts access to each customer's own cart.

### 9.3 User Experience

- A well-organized and clean UI.
- Stops invalid entries for quantity controllers.
- Clear pop-up messages to facilitate user experience.
- A well-developed cart page for managing selected products.
- Clear product quantity and price information.
- A confirmation option before clearing the whole cart.

### 9.4 Stakeholder Feedback

- A user-friendly UI made it easy to navigate through the platform.
- Easy to add products to the cart.
- Pop-up messages help avoiding mistakes.
- Total summary view makes it easier to calculate the total amount.
- Cart management page is easy to manage.

**Product Owner Review:**

- All six planned user stories were completed.
- All six user stories were accepted.
- Cart Management features meet the acceptance criteria.
- The out-of-stock notification needs improvement.

## 10. Outstanding Bugs

### BUG-001: Database Test Cleanup Error

| Description | Details |
|---|---|
| Severity | Minor |
| Priority | Medium |
| Status | Open |
| Origin | Sprint 2 |
| Found By | Salma Rahman |
| Impact | Test database cleanup only; test cases passed |
| Planned Resolution | Sprint 3 |

During Django automated testing, the test cases passed, but an error occurred when cleaning up the test database because another database connection was still using it.

**Workaround:** Run tests using `python manage.py test store --keepdb`.

**Plan:** Investigate the database connection and cleanup issue during Sprint 3.

### BUG-002: Out-of-Stock Add to Cart Notification

| Description | Details |
|---|---|
| Severity | Not specified |
| Priority | Not specified |
| Status | Open |
| Origin | Sprint 2 |
| Found By | Faezah Ahmadi |
| Impact | Missing warning notification when attempting to add an out-of-stock product |
| Planned Resolution | Sprint 3 |

When customers try to add an out-of-stock product to their cart, they should receive a toast notification explaining that the product is out of stock.

**Plan:** Add an out-of-stock warning notification in Sprint 3.

### Bugs Fixed in Sprint 2 (Carried From Sprint 1)

| Bug | Description | Status |
|---|---|---|
| Sprint 1 BUG-001 | Mistyped email domain was accepted | Fixed |
| Sprint 1 BUG-002 | Name length was not checked | Fixed |

Both issues were corrected through registration validation changes in the backend.

## 11. Sprint Challenges

- A minor database test cleanup issue occurred during automated testing.
- The database cleanup issue required using the `--keepdb` option to complete testing successfully.
- The out-of-stock notification was not fully implemented.
- Two minor validation issues from Sprint 1 required correction.

These issues did not prevent the completion of the planned Sprint 2 user stories.

## 12. Sprint Improvements

- Cart Management functionality was completed.
- Add to Cart and cart viewing features were connected to the backend.
- Product quantity validation was implemented.
- Cart subtotals and total price calculations were added.
- Stock availability checks were implemented.
- Product image support was improved.
- The two registration validation bugs from Sprint 1 were fixed.
- Backend and frontend automated tests passed successfully.

## 13. Product Owner Feedback

All six user stories have been completed and accepted. The planned Sprint 2 goal has been achieved.

The Cart Management system allows customers to manage selected products, quantities, and total prices before proceeding to checkout.

The remaining database cleanup issue and out-of-stock notification should be reviewed in Sprint 3.

## 14. Alignment With Project Goal

### Goal

The goal of this project is to simplify daily shopping by providing an online platform where users can register an account, browse products they want to buy, and have them delivered to their homes instead of going to physical stores.

### Sprint 2 Contribution

- Adding products to the cart management.
- Managing the products.
- Finalizing the products for the delivery section.
- Calculating the total amount of selected products.
- Preventing invalid product quantities.
- Preparing the shopping cart for checkout.

Sprint 2 contributes to the main project goal by allowing customers to manage their selected products before purchasing.

## 15. Preparation for Sprint 3

The following user stories will be considered to develop the Payment, Checkout, and Orders section.

| User Story ID | User Story Title |
|---|---|
| US-11 | Contact Information |
| US-12 | Shipping Information |
| US-13 | Delivery Options |
| US-14 | Payment Information |
| US-15 | Review Order |
| US-16 | Place Order |
| US-17 | Order Confirmation |
| US-27 | Order History |

## 16. Sprint 3 Priorities and Goal

Once the products are managed, they will be prepared for the payment and checkout section.

In Sprint 3, the priority is to create a secure payment line.

Avoid taking any invalid information.

Manage orders and order history.

Sprint 3 will focus on:

- Collecting customer contact information.
- Collecting shipping information.
- Providing delivery options.
- Adding payment information.
- Reviewing the order summary.
- Placing customer orders.
- Providing order confirmation.
- Allowing customers to view their order history.

## 17. Summary of Sprint 2 Review

- All 6 expected user stories were completed.
- All the acceptance criteria have been met and accepted by the Product Owner.
- Scrum meetings and progress went smoothly.
- Sprint completion reached 100%.
- All 24 backend automated tests passed.
- All 5 frontend automated tests passed.
- No critical or major bugs were reported.
- Two Sprint 1 registration validation bugs were fixed.
- One minor database test cleanup bug remains open.
- One out-of-stock notification issue remains open.
- Eight user stories have been introduced in Sprint 3, and acceptance criteria have been identified in the Product Backlog.

## 18. Recommendations

- To improve user experience an out of stock pop-up message is needed, if users want to add an out of stock product to the cart.
- Investigate the database test cleanup issue.
- Continue testing the cart functionality during checkout integration.

## 19. Sprint 2 Final Decision

**Product Owner Decision:** Accepted  
**Sprint Status:** Completed  
**Sprint Completion:** 100%

**Comments:** All six planned user stories were completed and accepted. Two issues remain open for Sprint 3, while the two registration validation bugs from Sprint 1 were resolved.

## 20. Current Project Status

**Sprint 2:** Completed and Accepted  
**Sprint Completion:** 100%  
**Sprint 3:** In Progress  
**Outstanding Issues:** 2

The project has completed customer registration, product catalog, and cart management features planned in the first two sprints.

The next development phase will focus on Payment, Checkout, and Orders.

**Signature:** Sayeda Taiba Agha  
**Date:** 13 October, 2026  
**Status:** Sprint 2 Completed

## 21. References

**Product Backlog:** `/Product-Backlog/Product-Backlog.md`  
**Sprint 2 Backlog:** `Sprint-backlog/Sprint-Planning-2.md`  
**Testing Results Sprint 2:** `Documentation/test/Test-Results-Sprint-2.md`

## 22. Report Preparation

**Prepared by:** Sayeda Taiba Agha (Product Owner)  
**Date:** 13 October, 2026  
**Next Review:** Sprint 3 Review, 17 October, 2026

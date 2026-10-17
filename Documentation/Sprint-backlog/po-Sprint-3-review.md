# Sprint 3 Review Report

**Prepared by:** Product Owner (Sayeda Taiba Agha)  
**Course:** ITC 315 – Software Engineering Project  
**Project:** E-Commerce Grocery Shop (Fresh Mart)  
**Sprint 3:** 14–17 October, 2026  
**Report Date:** 17 October, 2026  
**Epic:** Payment / Checkout and Orders

---

## 1. Sprint 3 Goal

Creating a fully functional and secure payment section for customers. Customers should be able to add their personal information in the payment page and have delivery and payment options to facilitate the process. At last in payment section, customers should be able to review the order, place the order, and view order history to track their orders.

## 2. Sprint 3 Achievements

| User Story ID | User Story Title | Status | Notes |
|---|---|---|---|
| US-11 | Contact Information | Done | Functional contact information section |
| US-12 | Shipping Information | Done | Functional shipping information section |
| US-13 | Delivery Options | Done | Standard and express delivery options available |
| US-14 | Payment Information | Done | Functional payment information section |
| US-15 | Review Order | Done | Functional order summary and review |
| US-16 | Place Order | Done | Functional order placement |
| US-17 | Order Confirmation | Done | Order confirmation available |
| US-27 | Order History | Done | Customers can view their order history |

**Final Note:** All the determined user stories were achieved for Sprint 3.

## 3. Sprint Backlog Completion

| Description | Result |
|---|---|
| Total Planned User Stories | 8 |
| Completed User Stories | 8 |
| Incomplete User Stories | 0 |
| Accepted User Stories | 8 |
| Rejected User Stories | 0 |
| Sprint Completion Percentage | 100% |

All eight planned user stories were completed within the Sprint 3 timeline and accepted by the Product Owner.

## 4. Acceptance Criteria Review

| US ID | User Story Title | Acceptance Criteria | Acceptance Criteria Review | PO Decision | Notes |
|---|---|---|---|---|---|
| US-11 | Contact Information | Users shouldn’t be able to move forward with the checkout process without completing the contact detail section properly. | Contact information section completed with required field validation. | Accepted | No comments |
| US-12 | Shipping Information | Users shouldn’t be able to move forward with the checkout process without completing the shipping information section properly. | Shipping information section completed with required field validation. | Accepted | No comments |
| US-13 | Delivery Options | The user should be able to see acceptable delivery options and choose only one option. | Standard and express delivery options available. Delivery fees are calculated correctly. | Accepted | No comments |
| US-14 | Payment Information | Only process when valid payment information is provided. | Payment information section completed. | Accepted | No comments |
| US-15 | Review Order | User should be able to see order summary with all the product details before actually placing the order. | Order review section completed with order summary and calculated total. | Accepted | No comments |
| US-16 | Place Order | Place order option should only work when all the required sections are completed properly. | Order placement works with valid information. Duplicate submissions are blocked. | Accepted | No comments |
| US-17 | Order Confirmation | Order confirmation after the order is placed. | Order confirmation available after successful order placement. | Accepted | No comments |
| US-27 | Order History | View order history. | Customers can view their own orders. Order history is restricted to the logged-in customer. | Accepted | No comments |

**Total User Stories Reviewed:** 8  
**PO Decision:** All Accepted

## 5. Sprint Demonstration

During the Sprint 3 Review Meeting, the completed checkout and order management features were presented for review.

The demonstration covered:

- Entering customer contact information.
- Providing shipping details.
- Selecting standard or express delivery.
- Entering payment information.
- Reviewing the order summary and total price.
- Placing an order after completing the required information.
- Receiving order confirmation.
- Viewing previous orders through order history.

**Demonstration Result:** All eight user stories were accepted by the Product Owner.

## 6. User Abilities After Sprint 3 Has Been Completed

- Enters contact and shipping data during check-out process.
- Selects either standard or express delivery option; displays delivery charges.
- Enters payment information and sees order summary.
- Shows subtotal, delivery charge, and total amount; submits order with all necessary data.
- Submits order without incomplete/inaccurate data; does not create duplicate orders within 30 seconds.
- Confirms order; empties cart after successful submission of an order.
- Views previous orders in the order history section; cannot view others' orders.

## 7. Business Values

- Convenience in ordering and managing orders.
- No need to visit a physical store; various delivery options available.
- Provides total cost summaries; helps to track order history.
- Validates entered data to minimize mistakes; prevents duplicate orders.
- Secure access to order information improves privacy.

## 8. Sprint Metrics

| Metric | Target | Actual | Status |
|---|---|---|---|
| User Stories Completed | 8 | 8 | Done 100% |
| User Stories Accepted | 8 | 8 | Done 100% |
| New Bugs Found in Final Testing | 0 | 0 | Done |
| Critical Bugs | 0 | 0 | Done |
| Major Bugs | 0 | 0 | Done |
| Open Bugs | 0 | 1 (From Sprint 2) | Pending |
| Sprint Goal Met | Yes | Yes | Done |

## 9. Quality Assessment

### 9.1 Code Quality

The Sprint 3 implementation was reviewed based on functionality, validation, security, and testing results.

| Quality Criteria | Review |
|---|---|
| Functionality | Completed |
| Input Validation | Passed |
| Authentication and Authorization | Passed |
| Automated Testing | 24 Tests Passed |
| Critical and Major Bugs | None |
| Code Maintainability | Further review in Sprint 4 |

The testing results confirm that the implemented backend features passed the reported functional and security checks. A separate source-code maintainability review has not been provided.

### 9.2 Testing Quality

**Testing Summary:**

| Metric | Value |
|---|---|
| Automated Tests Passed | 24 |
| Automated Tests Failed | 0 |
| Manual Test Cases | 9 |
| Critical Bugs | 0 |
| Major Bugs | 0 |
| Minor Bugs | 1 (Carried from Sprint 2) |
| Open Bugs | 1 |
| New Bugs Found During Final Testing | 0 |

All 24 automated tests passed successfully, and all 9 reported manual test cases passed.

### 9.3 User Experience

- Structured checkout for customers.
- Contact and shipping information sections.
- Standard and express deliveries.
- Order summary: subtotal, delivery fee, total.
- Validation ensures that no incomplete or invalid information can be submitted by customers.
- Order confirmation after order placement.
- Order history: customers' previous orders.

### 9.4 Stakeholder Feedback

**Product Owner Review:**

- Planned checkout and order management functionalities have been delivered.
- All eight user stories have been accepted.
- Order placement and order history functionalities meet the acceptance criteria.
- No other stakeholder comments have been received.

## 10. Outstanding Bug

**BUG-001: Database Test Cleanup Error**

| Description | Details |
|---|---|
| Severity | Minor |
| Priority | Low |
| Status | Open |
| Origin | Sprint 2 |
| Found By | Salma Rahman |
| Impact | Test database cleanup only; test results remain correct |
| Planned Resolution | Sprint 4 |

The issue occurs when running Django tests without `--keepdb` because the Supabase connection pooler keeps database connections open longer than expected.

**Workaround:** Run tests using `python manage.py test store --keepdb`.

**Plan:** Investigate the database connection-pooling configuration during Sprint 4. If a permanent fix is not practical, document the workaround.

## 11. Sprint Challenges

- Maintenance of one minor issue in database test cleanup from Sprint 2.
- Introduction of delivery option field caused failure of all existing order tests; tests have been updated before final testing.
- Authentication token issue between terminal sessions was fixed before final testing.

This issues did not prevent completion of the planned Sprint 3 user stories.

## 12. Sprint Improvements

- Checkout and order management functionalities have been delivered.
- Required order information validation added.
- Duplicate order prevention added.
- Standard and express deliveries added.
- Order history with access for specific customers added.
- Test updates for the delivery option field added.
- 24 automated tests and 9 manual test cases completed successfully.

## 13. Product Owner Feedback

All eight user stories have been completed and accepted. Planned objectives of the sprint have been reached.

Checkout and order management functionalities are the next step in the shopping process for customers after cart management.

Remaining maintenance of one minor database test cleanup issue can be done in Sprint 4.

## 14. Alignment With Project Goal

### Goal

Project goal is simplification of the daily shopping process through provision of the online platform for user registration, product browsing and purchase with delivery to customers' addresses instead of visiting physical stores.

### Sprint 3 Contribution

- Customer checkout functionality.
- Collection of customer contact and shipping information.
- Delivery and payment options.
- Customer order placement and viewing.
- Order confirmation.
- Customer order history.
- Concentration of the shopping cart management process on order placement.

Sprint 3 makes contribution to the main project goal by moving customers from product selection to purchases.

## 15. Preparation for Sprint 4

The next sprint will focus on developing the Admin Panel, allowing authorized administrators to manage products, inventory, customer orders, and customer information.

| User Story ID | User Story Title |
|---|---|
| US-21 | Product Management |
| US-22 | Inventory Management |
| US-28 | Customer Order Management |
| US-29 | Customer Account Management |

## 16. Sprint 4 Priorities and Goal

Once the checkout and order management features are completed, the next priority is developing the Admin Panel.

Sprint 4 will focus on:

- Creating an Admin Dashboard.
- Managing products, including adding, editing, and deleting products.
- Managing product inventory and availability.
- Viewing and managing customer orders.
- Updating customer order status.
- Managing customer account information.
- Ensuring that only authorized administrators can access the Admin Panel.
- Connecting the Admin Panel to the existing system.

## 17. Summary of Sprint 3 Review

- All 8 expected user stories were completed.
- All acceptance criteria were reviewed and accepted by the Product Owner.
- Sprint completion reached 100%.
- All 24 automated tests passed.
- All 9 reported manual test cases passed.
- No critical or major bugs were reported.
- One minor bug remains open from Sprint 2.
- The checkout and order management features have been completed.
- Four user stories have been selected for Sprint 4 under the Admin Panel epic.

## 18. Recommendations

- Considering a secure online payment line for version 2 of the platform can improve the user experience.

## 19. Sprint 3 Final Decision

**Product Owner Decision:** Accepted  
**Sprint Status:** Completed  
**Sprint Completion:** 100%

**Comments:** All planned user stories were completed and accepted. One minor bug from Sprint 2 remains open and is planned for Sprint 4.

## 20. Current Project Status

**Sprint 3:** Completed and Accepted  
**Sprint Completion:** 100%  
**Sprint 4:** Planned  
**Outstanding Bugs:** 1 Minor

The project has completed the customer registration, product catalog, shopping cart, checkout, and order management features planned in the first three sprints.

The next development phase will focus on the Admin Panel.

**Signature:** Sayeda Taiba Agha  
**Date:** 17 October, 2026  
**Status:** Sprint 3 Completed

## 21. References

**Product Backlog:** `/Product-Backlog/Product-Backlog.md`  
**Sprint 3 Backlog:** `Sprint-backlog/Sprint-Planning-3.md`  
**Testing Results Sprint 3:** `Documentation/test/Test-Results-Sprint-3.md`

## 22. Report Preparation

**Prepared by:** Sayeda Taiba Agha (Product Owner)  
**Date:** 17 October, 2026  
**Next Review:** Sprint 4 Review, 22 October, 2026

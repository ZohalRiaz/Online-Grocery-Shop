# Sprint 1 Review Report

**Prepared by:** Product Owner (Sayeda Taiba Agha)  
**Course:** ITC 315 – Software Engineering Project  
**Project:** E-Commerce Grocery Shop (Fresh Mart)  
**Sprint 1:** 5–10 October, 2026  
**Report Date:** 10 October, 2026  
**Epic:** Registration and Product Catalog

---

## 1. Sprint 1 Goal

A fully working registration form with the capability of registering new customers and the ability to log in and log out from their registered account. A well-managed catalog page where customers can view products, search, filter, and sort.

## 2. Sprint 1 Achievements

| User Story ID | User Story Title | Status | Notes |
|---|---|---|---|
| US-01 | Customer Registration | Done | Fully functional. |
| US-02 | Customer Login | Done | Available. |
| US-03 | Customer Logout | Done | End the session. |
| US-04 | Browse Product Catalog | Done | Well-displayed. |
| US-23 | View Product Details | Done | Well-displayed the name, price, availability. |
| US-24 | Search Products | Done | Search is available using product details. |
| US-25 | Filter Products | Done | Filter option works fully. |
| US-26 | Sort Products | Done | Sort option works fully. |
| US-18 | Admin Registration | Done | This is a part of Sprint 4 and is done as a part of the registration form. |
| US-19 | Admin Login | Done | This is a part of Sprint 4, which is done as part of the registration form. |

**Final Note:** All the required parts for Sprint 1 have been achieved.

## 3. Sprint Backlog Completion

| Description | Result |
|---|---|
| Total Planned User Stories | 8 |
| Completed User Stories | 10 (8 planned + 2 additional) |
| Incomplete User Stories | 0 |
| Accepted User Stories | 10 |
| Rejected User Stories | 0 |
| Sprint Completion Percentage | 100% |

All eight planned user stories were completed within the Sprint 1 timeline. Two additional user stories related to administrator registration and login were also completed and accepted by the Product Owner.

## 4. Acceptance Criteria Review

| US ID | User Story Title | Acceptance Criteria | Acceptance Criteria Review | PO Decision | Notes |
|---|---|---|---|---|---|
| US-01 | Customer Registration | Users can create an account only after providing a valid name, email, and password. | Registration form is created. Valid registration works, but two minor validation issues were identified. | Accepted | Minor issues planned for Sprint 2 |
| US-02 | Customer Login | The system accepts valid login credentials and rejects invalid login attempts. | A login page is created that only allows valid users. | Accepted | No comments |
| US-03 | Customer Logout | A proper logout option ends the active user session. | A logout option is available to end the session for the user. | Accepted | No comments |
| US-04 | Browse Product Catalog | The catalog displays product name, price, picture, and stock availability. | Catalog is well-displayed, and customers can see all the necessary details of the product. | Accepted | No comments |
| US-23 | View Product Details | Clicking a product card displays clear and detailed information about the selected product. | Customers can have a bigger picture of the product details using the details option on the product card. | Accepted | No comments |
| US-24 | Search Products | A search section allows customers to find products by name or keyword. | Customers are able to search for the desired product. | Accepted | No comments |
| US-25 | Filter Products | Customers can filter products using available filtering options. | Customers are able to filter products. | Accepted | No comments |
| US-26 | Sort Products | Customers can sort products alphabetically or by price. | Customers are able to sort products. | Accepted | No comments |
| US-18 | Admin Registration | An admin registration page accepts only valid details. | Admin can create an account using valid details. | Accepted | No comments |
| US-19 | Admin Login | Only authorized administrators can sign in to the admin panel. | Admin can log in to their account using valid credentials. | Accepted | No comments |

**Total User Stories Reviewed:** 10  
**PO Decision:** All Accepted

## 5. Sprint Demonstration

During the Sprint 1 Review Meeting, the completed registration and product catalog features were presented for review.

The demonstration covered:

- Registering a new customer account.
- Logging in with valid credentials.
- Rejecting invalid login credentials.
- Logging out from the registered account.
- Browsing the product catalog.
- Viewing product details, including name, price, picture, and availability.
- Searching products by name or keyword.
- Filtering products by category and availability.
- Sorting products alphabetically or by price.
- Administrator registration and login.

**Demonstration Result:** All ten user stories were accepted by the Product Owner. Two minor registration validation issues were identified for correction in Sprint 2.

## 6. User Abilities After Sprint 1 Has Been Completed

- Able to register a user account.
- Users are able to log in and log out from their registered account.
- Users are able to see a fully functional catalog.
- Users can search, filter, and sort products.
- Users can view detailed product information.
- Admins are able to register for their account.
- Admins are able to log in to their account.

## 7. Business Values

- A user-friendly platform.
- A user registration system is developed for the customers.
- Customers can find products more easily through searching, filtering, and sorting.
- Product details help customers review the products before purchasing.
- Registered accounts provide the foundation for cart management and checkout.

## 8. Sprint Metrics

| Metric | Target | Actual | Status |
|---|---|---|---|
| User Stories Completed | 8 | 10 | Done 100% |
| User Stories Accepted | 8 | 10 | Done |
| Test Cases Passed | 13 | 12 | 92% |
| Test Cases Failed | 0 | 1 | Pending |
| Critical Bugs | 0 | 0 | Done |
| Major Bugs | 0 | 0 | Done |
| Minor Bugs | 0 | 2 | Pending |
| Sprint Goal Met | Yes | Yes | Done |

## 9. Quality Assessment

### 9.1 Code Quality

Well-developed code in the frontend and backend with reusability potential.

| Quality Criteria | Review |
|---|---|
| Functionality | Completed |
| Input Validation | Two minor issues identified |
| Authentication and Authorization | Passed reported checks |
| Backend Automated Testing | 7 tests reported |
| Frontend Automated Testing | 5 tests passed |
| Critical and Major Bugs | None |
| Code Maintainability | Further review required |

The frontend and backend were connected successfully. Authentication, catalog browsing, product details, searching, filtering, and sorting were tested.

### 9.2 Testing Quality

Most of the features worked fully.

Email format validation error.

**Testing Summary:**

| Metric | Value |
|---|---|
| Total Test Cases | 13 |
| Passed | 12 |
| Failed | 1 |
| Pass Rate | 92% |
| Backend Automated Tests Reported | 7 |
| Frontend Automated Tests Passed | 5 |
| Frontend Manual Checks Passed | 7 |
| Critical Bugs | 0 |
| Major Bugs | 0 |
| Minor Bugs | 2 |

Testing was completed by Salma Rahman (Backend) and Faezah Ahmadi (Frontend).

The backend was tested using Django, while the frontend was tested using Vitest, React Testing Library, and jsdom.

The reported test summary shows that 12 out of 13 test cases passed. Two minor validation issues were identified.

### 9.3 User Experience

- A well-organized and clean UI.
- Stops invalid entries and shows reasonable error messages.
- Customers can navigate the product catalog easily.
- Product details are clearly displayed.
- Search, filter, and sort options make product selection easier.
- A friendly message appears when no products match the search.

### 9.4 Stakeholder Feedback

A user-friendly UI made it easy to navigate through the platform and find the necessary product.

**Product Owner Review:**

- All eight planned user stories were completed.
- Two additional administrator-related user stories were completed.
- All ten user stories were accepted.
- Two minor validation issues were identified for correction in Sprint 2.

## 10. Outstanding Bugs

### BUG-001: Mistyped Email Domain Is Accepted

| Description | Details |
|---|---|
| Severity | Minor |
| Priority | Medium |
| Status | Open |
| Origin | Sprint 1 |
| Found By | Salma Rahman and Faezah Ahmadi |
| Impact | Customers may register with a mistyped email domain |
| Planned Resolution | Sprint 2 |

The registration form accepts mistyped email domains such as `name@gmal.com` because the email follows a valid format.

**Plan:** Add a check for common email domain mistakes and display a suggestion before completing registration.

### BUG-002: Name Length Is Not Checked

| Description | Details |
|---|---|
| Severity | Minor |
| Priority | Low |
| Status | Open |
| Origin | Sprint 1 |
| Found By | Salma Rahman |
| Impact | Backend does not fully enforce the required name length |
| Planned Resolution | Sprint 2 |

The registration requirement specifies that the full name must contain between 3 and 50 characters, but the backend does not enforce this requirement.

**Plan:** Add minimum and maximum name-length validation in the backend.

## 11. Sprint Challenges

- Two minor validation issues were identified during registration testing.
- The registration form accepted mistyped email domains.
- The backend did not fully check the required name length.
- Additional testing is needed to improve input validation.

These issues did not prevent the completion of the planned Sprint 1 user stories.

## 12. Sprint Improvements

- Customer registration, login, and logout were developed.
- The product catalog was created.
- Product details, search, filter, and sort features were added.
- Administrator registration and login were completed as additional features.
- Frontend and backend connections were established.
- Automated and manual testing was performed.
- Two minor validation issues were identified for correction in Sprint 2.

## 13. Product Owner Feedback

All eight planned user stories and two additional administrator-related user stories have been completed and accepted.

The registration and product catalog features meet the main Sprint 1 goal and provide the foundation for the next stage of the project.

Two minor validation issues should be resolved in Sprint 2 to improve the registration process.

## 14. Alignment With Project Goal

### Goal

The goal of this project is to simplify daily shopping by providing an online platform where users can register an account, browse products they want to buy, and have them delivered to their homes instead of going to physical stores.

### Sprint 1 Contribution

- Creating an individual account.
- Easy product search available through catalog features.
- A responsive design that makes the platform accessible on any device.
- Providing detailed product information.
- Creating the foundation for cart management and checkout.

Sprint 1 contributes to the main project goal by allowing customers to register and browse products before purchasing.

## 15. Preparation for Sprint 2

The following user stories will be considered to develop a cart management system.

| User Story ID | User Story Title |
|---|---|
| US-05 | Add Product to Cart |
| US-06 | View Shopping Cart |
| US-07 | Change Quantity |
| US-08 | Remove Product |
| US-09 | Clear Cart |
| US-10 | View Cart Total |

*The IDs above follow the Sprint 2 cart-management numbering used in the project backlog.*

## 16. Sprint 2 Priorities and Goal

Following Sprint 1, a cart management system is needed to manage the products where users can add products, remove products, and clear the cart.

Also, they will be able to manage product quantities.

A total summary card will provide the correct calculation of product price.

Sprint 2 will focus on:

- Adding products to the shopping cart.
- Viewing selected products in the cart.
- Changing product quantities.
- Removing products from the cart.
- Clearing the shopping cart.
- Calculating the cart subtotal and total price.
- Connecting the cart features to the backend.
- Testing the cart management functions.

## 17. Summary of Sprint 1 Review

- All 8 expected user stories plus 2 more have been done.
- All the acceptance criteria have been reviewed and accepted by the Product Owner.
- Scrum meetings and progress went smoothly.
- Sprint completion reached 100%.
- 12 out of 13 reported test cases passed.
- No critical or major bugs were reported.
- Two minor bugs were identified for correction in Sprint 2.
- The registration and product catalog features were completed.
- Six cart-management user stories were identified for Sprint 2.

## 18. Recommendations

Create premade examples to test the authenticity and safety of the platform. These examples should help verify that the registration and login systems work correctly, prevent unauthorized access, and ensure that user information remains secure.

## 19. Sprint 1 Final Decision

**Product Owner Decision:** Accepted  
**Sprint Status:** Completed  
**Sprint Completion:** 100%

**Comments:** All eight planned user stories and two additional user stories were completed and accepted. Two minor validation bugs remain open and are planned for Sprint 2.

## 20. Current Project Status

**Sprint 1:** Completed and Accepted  
**Sprint Completion:** 100%  
**Sprint 2:** Planned  
**Outstanding Bugs:** 2 Minor

The project has completed the customer registration, authentication, and product catalog features planned for Sprint 1.

The next development phase will focus on Cart Management.

**Signature:** Sayeda Taiba Agha  
**Date:** 10 October, 2026  
**Status:** Sprint 1 Completed

## 21. References

**Product Backlog:** `/Product-Backlog/Product-Backlog.md`  
**Sprint 1 Backlog:** `Sprint-backlog/Sprint-Planning-1.md`  
**Testing Results Sprint 1:** `Documentation/test/Test-Results-Sprint-1.md`

## 22. Report Preparation

**Prepared by:** Sayeda Taiba Agha (Product Owner)  
**Date:** 10 October, 2026  
**Next Review:** Sprint 2 Review, 13 October, 2026

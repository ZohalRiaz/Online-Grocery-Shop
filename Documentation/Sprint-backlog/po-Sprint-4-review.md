# Sprint 4 Review Report 

**Project:** Fresh Mart — Online Grocery Shop  
**Sprint:** Sprint 4 — Admin Panel  
**Sprint Duration:** October 18–24, 2026  
**Product Owner:** Sayeda Taiba Agha  
 
**Sprint Review Date:** October 24, 2026

---

## 1. Sprint 4 Goal

The goal of Sprint 4 was to complete the Admin Panel features, allowing the administrator to manage products, inventory, customer orders, and customer accounts.

## 2. Sprint 4 Achievements

The team completed the four planned user stories for the Admin Panel.

- **Product Management:** Product creation, modification, and deletion, along with managing product images, prices, and stock levels is possible for the administrators.
- **Inventory Management:** The system helps identify low and out of stock items and validate stock quantities.
- **Order Management:** Orders can be filtered by the administrators and status transitions made as per the set guidelines.
- **Customer Management:** Customer information can be viewed and customer accounts blocked/unblocked.

## 3. Sprint Backlog Completion

| User Story ID | User Story Title | Status | Note |
|---|---|---|---|
| US-21 | Product Management | Done | Completed and functional |
| US-22 | Inventory Management | Done | Completed and functional |
| US-28 | Customer Order Management | Done | Completed and functional |
| US-29 | Customer Account Management | Done | Completed and functional |

**Sprint Backlog Status:** Completed

## 4. Acceptance Criteria Review

| US ID | User Story Title | Acceptance Criteria | Acceptance Criteria Review | PO Decision | Note |
|---|---|---|---|---|---|
| US-21 | Product Management | Product management section where an admin can perform certain functions such as adding, editing, and deleting a product. | Passed. Testing was done for product creation, editing, deleting, and image uploading. | Accepted | Completed and functional |
| US-22 | Inventory Management | Inventory management section to monitor and update the stock. | Passed. Testing was done for stock checking, stock verification, and updating of stocks. | Accepted | Completed and functional |
| US-28 | Customer Order Management | Customer order view and management section for admin | Passed. Filtering of orders, transition of order status, and stock recovery for cancelled orders was tested. | Accepted | Completed and functional |
| US-29 | Customer Account Management | Customer account section so admin can see their customers' information. | Passed. Testing was done for customer details and account management. | Accepted | Completed and functional |

## 5. Admin Panel Functionality Demonstration

The following Admin Panel functionality demonstrated in Sprint 4:

- Creation, modification, and deletion of products.
- Image upload for products.
- Check the inventory and update stock amounts.
- Customer order filtering and updating of order statuses.
- Viewing order details.
- Checking the information about customers and blocking/unblocking their accounts.
- Limitation of admin functionalities for authorized admins only.

**Demonstration status:** Complete

## 6. Abilities of the User after the Completion of Sprint 4

After completing the Sprint 4, the administrator will be able to:

- Add products, modify their data, and delete products.
- Upload images for products that are saved in Supabase Storage.
- Check stock amounts and find low-stock or out-of-stock products.
- Update inventory data with invalid stock amounts protection.
- Filter and view customer orders.
- Update order statuses based on allowed transitions.
- View customer details and order-related information.
- Block and unblock customer accounts.
- Access administrative functions via protected endpoints.

These abilities will make up the whole scope of the Admin Panel functionality.

## 7. Business Values

The completed Admin Panel delivers the following business values:

- Eases product and inventory management.
- Aids administrators in determining the products that need to be replenished.
- Enables customer order management.
- Ensures protection of the admin functionalities through access control.
- Delivers customer account management functionalities.
- Safeguards order history after product deletion.
- Use persistent cloud storage for products' images.

## 8. Sprint Metrics

| Metric | Result |
|---|---|
| Planned User Stories | 4 |
| Completed User Stories | 4 |
| Incomplete User Stories | 0 |
| Sprint Backlog | Completed |
| Product Owner Decision | Accepted |

## 9. Quality Assessment

### 9.1 Code Quality

The testing report describes the fixes made for the following implementation issues:

- Changed the serializer used for the update of the customer accounts.
- Updated an old test according to the new allowed status transition rules for the orders.
- Made multipart form parsing and added the image field to be able to upload the images for the products.
- Changed the Supabase Storage policy in order to make the images publicly accessible.
- Changed the frontend payload builder for the products to use JSON in case there is no image and FormData otherwise.
- Split the image upload field from the emoji field.

These fixes were made in order to solve the problems found during the Sprint 4 development.

### 9.2 Testing Quality

| Metric | Backend Results | Frontend Results |
|---|---|---|
| Automated Tests Passed | 30 | 16 |
| Automated Tests Failed | 0 | 0 |
| Manual Test Cases or Checks | 8 | 18 |
| Critical Bugs | 0 | 0 |
| Major Bugs | 0 | 0 |
| Minor Bugs | 1 carried over from Sprint 2, resolved through a workaround | No separate severity count provided |
| Production Build | Not specified in backend summary | Successful |

### 9.3 User Experience

A well-organized dashboard.

Clear options for managing products.

Easy access to inventory information.

A clear view of customer orders and their status.

Accessible customer account management options.

### 9.4 Stakeholder Feedback

The decision of the Product Owner for all four user stories of the planned Sprint 4 is Accepted.

## 10. Outstanding Bug

### BUG-001: Database Test Cleanup Error

| Field | Details |
|---|---|
| Severity | Minor |
| Priority | Low |
| Origin | Sprint 2 |
| Status | Resolved through a standardized workaround |
| Found By | Salma Rahman |

## 11. Sprint Challenges

- The serializer problem made customer blocking fail.
- There was an old test where the transition of order status was not supported anymore.
- The product images were not stored due to incomplete setup of multipart form and serializer.
- Supabase Storage policy was causing problems with loading images in the frontend.
- Some of the frontend tests were running above the default timeout in Vitest because of jsdom.
- The frontend product payload was different for requests with and without images.

## 12. Sprint Improvements

These problems were solved in the following way:

- Serialization for customer management was updated.
- Valid order status transition was enforced.
- Multipart form for product images was fixed.
- Cloud storage policies were updated.
- Frontend product payload creation was improved.
- Frontend test configuration was improved to accommodate the test execution timeout.
- Basic backend test command – `--keepdb` was standardized.


## 13. Product Owner Feedback

The Product Owner reviewed the four planned Sprint 4 user stories and accepted them.

| User Story ID | User Story Title | PO Decision | Note |
|---|---|---|---|
| US-21 | Product Management | Accepted | Completed and functional |
| US-22 | Inventory Management | Accepted | Completed and functional |
| US-28 | Customer Order Management | Accepted | Completed and functional |
| US-29 | Customer Account Management | Accepted | Completed and functional |

## 14. Aligned to Project Goal

The sprint 4 aligns to the main goal of creating an online grocery shop that functions well.

The earlier three sprints involved activities like user registration, catalog exploration, shopping cart activities, checkout process, and customer order. The sprint 4 achieved the planned functions in administration of products, inventories, customer orders, and customer account management.

The Admin Panel is complementary to the customer-oriented activities in supporting the whole operation of Fresh Mart.

## 15. Preparing for the Next Stage

Following completion of the Sprint 4 backlog, the project can move on to the next phase which includes:

- Conducting integration activities within all five project epics.

## 16. Objectives and Goals of the Final Stage

The objective and the goal of the final stage is to make sure that the whole Fresh Mart application performs well as a single entity with regards to the client and administrative parts.

Main objectives are:

- Check whether there is an integration between registration, catalog search, cart, orders, and the Admin Panel.
- Perform access control and data validation check.
- Check that product images are available.

## 17. Sprint 4 Review Summary

Sprint 4 is aimed at the completion of the Admin Panel development. All four user stories from the sprint backlog are Done. All four decisions made by the Product Owner are Accepted.

## 18. Recommendations.

- Conduct testing of the Admin Panel together with other elements.
- Conduct the final check for any pending problems.
- Preserve the standard backend test command in the documentation.
- Conduct final cloud image accessibility and administrative testing.
- Conduct the final documentation and demonstration of the project.

## 19. Sprint 4 Final Decision

| Item | Decision |
|---|---|
| Sprint Status | Completed |
| Sprint Backlog | Completed |
| Planned User Stories | 4 |
| Completed User Stories | 4 |
| Product Owner Decision | Accepted |
| Final Note | Completed |

All four planned Sprint 4 user stories are marked Done, with notes confirming that the features are functional.

## 20. Current Project Status

| Project Area | Status | Note |
|---|---|---|
| Registration | Done | Completed |
| Catalog/Search | Done | Completed |
| Cart Management | Done | Completed |
| Payment/Checkout and Orders | Done | Completed |
| Admin Panel | Done | Completed and functional |
| Sprint 4 Backlog | Completed | All four planned user stories are Done |
| Product Owner Review | Accepted | All four Sprint 4 stories accepted |

## 21. References

- `/Product-Backlog/Product-Backlog.md`
- `Sprint-backlog/Sprint-Planning-4.md`
- `Documentation/test/Test-Results-Sprint-4.md`

## 22. Report Preparation

**Prepared by:** Sayeda Taiba Agha  
**Role:** Product Owner  
**Project:** Fresh Mart — Online Grocery Shop  
**Report:** Sprint 4 Review Report  
**Date:** October 24, 2026

# Sprint 4 Planning – E-Commerce Grocery Shop (Fresh Mart)

<div align="right"><strong>Updated: October 19, 2026</strong></div>

**Course:** ITC 315 – Software Engineering Project  
**Project:** E-Commerce Grocery Shop (Fresh Mart)  
**Sprint:** Sprint 4 – Admin Panel  
**Sprint Duration:** October 18–22, 2026  
**Epic:** Admin Panel  
**Prepared by:** Sayeda Taiba Agha (Product Owner)

---

## 1. Sprint 4 Goal

The goal of Sprint 4 is to develop a fully functional Admin Panel that allows authorized administrators to manage products, inventory, customer orders, and customer information.

## 2. Sprint 4 User Stories

The following user stories are selected for Sprint 4.

| User Story ID | User Story Title | Assigned To |
|---|---|---|
| US-21 | Product Management | Frontend + Backend |
| US-22 | Inventory Management | Frontend + Backend |
| US-28 | Customer Order Management | Frontend + Backend |
| US-29 | Customer Account Management | Frontend + Backend |

### 2.1 Updated User Stories

The following user stories were moved from Sprint 4 to Sprint 1:

| User Story ID | User Story Title | Updated Sprint |
|---|---|---|
| US-19 | Admin Login | Sprint 1 |
| US-20 | Admin Logout | Sprint 1 |

**Total Sprint 4 User Stories:** 4

## 3. Sprint 4 Task Distribution

### 3.1 US-21 – Product Management

**Frontend Development – Faezah Ahmadi**
- Design a form for adding products.
- Design an interface for editing product information.
- Include a delete product button and provide confirmation prompt.
- Display existing products in Admin Panel.
- Connect product management operations with backend APIs.

**Backend Development – Salma Rahman**
- Create APIs for adding new products.
- Implement product editing operation.
- Implement product deletion operation.
- Connect product operations with PostgreSQL.
- Validate product information before saving.

**Testing and Quality Assurance**
- Test adding, editing and deleting of products.
- Test visibility of updated products in customer catalog.

### 3.2 US-22 – Inventory Management

**Frontend Development – Faezah Ahmadi**
- Display available stock quantities.
- Provide controls for updating stock quantities.
- Display product availability status.
- Display notifications in case of low stock or out of stock products.

**Backend Development – Salma Rahman**
- Implement stock quantity updates.
- Save inventory changes to the database.
- Update product availability based on stock.
- Prevent invalid stock quantities.

**Testing and Quality Assurance**
- Test stock quantity updates.
- Test rejection of invalid stock quantities.

### 3.3 US-28 – Customer Order Management

**Frontend Development – Faezah Ahmadi**
- Design a page to display customer orders.
- Display order information and current order status.
- Provide controls for order status update.
- Connect order management operations with the backend.

**Backend Development – Salma Rahman**
- Create an API to retrieve customer orders.
- Implement order status updates.
- Save updated order information to the database.
- Allow only authorized administrators to manage orders.

**Testing and Quality Assurance**
- Test viewing customer orders.
- Test order status update.
- Test saving of updated order information.

### 3.4 US-29 – Customer Account Management

**Frontend Development – Faezah Ahmadi**
- Design a page to display registered customers.
- Display relevant customer account information.
- Provide controls for allowed customer account management operations.

**Backend Development – Salma Rahman**
- Implement retrieval of registered customer information.
- Implement allowed customer account management operations.
- Secure customer information from unauthorized access.

**Testing and Quality Assurance**
- Test access to customer information.
- Test protection of customer information against unauthorized access.

### 3.5 System Integration Testing

**Assigned To:** Testing Team (Developer’s Team)

- Test communication between React and Django APIs.
- Test PostgreSQL database operations.
- Test whole customer shopping flow.
- Test product, cart, checkout and admin panel features integration.
- Document bugs found during testing and report them to the development team.

### 3.6 Admin Dashboard

**Frontend Development – Faezah Ahmadi**
- Create main Admin Dashboard interface.
- Design navigation for products, inventory, orders, and customers.
- Display relevant information in a well-structured manner.

## 4. Scrum Master Responsibilities

**Assigned To:** Zohal Riaz

- Arrange daily Scrum meetings.
- Ensure follow-ups for the team’s progress.
- Make sure that the sprint burndown chart is updated.
- Assist the team in problem-solving during the sprint.
- Arrange the sprint review meeting.

## 5. Product Owner Duties

**Assigned To:** Sayeda Taiba Agha

- Create a Sprint 4 plan.
- Explain the user stories to the development team.
- Review the user stories completed.
- See if the features meet the acceptance criteria.
- Accept or reject the user stories completed.
- Develop a Sprint 4 review report.

## 6. Sprint 4 Expected Deliverables

- A functional Admin Panel with secure administrator authentication.
- Product management functionality for adding, editing, and deleting products.
- Inventory management with stock quantity and availability updates.
- Customer order management with order status updates.
- Customer account management functionality.
- Successful integration between the Admin Panel and the existing customer-facing application.
- Completed functional and integration testing.
- An updated sprint burndown chart.
- Sprint 4 Review and Retrospective documentation.

## 7. Sprint 4 Definition of Done

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

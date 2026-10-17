
# Sprint 4 Planning – E-Commerce Grocery Shop (Fresh Mart)

**Course:** ITC 315 – Software Engineering Project  
**Project:** E-Commerce Grocery Shop (Fresh Mart)  
**Sprint:** Sprint 4  
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

---

## 3. Sprint 4 Task Distribution

### 3.1 Frontend Development

**Assigned To: Faezah Ahmadi**

#### Admin Dashboard
- Create main Admin Dashboard interface.
- Design navigation for products, inventory, orders, and customers.
- Display relevant information in a well-structured manner.

#### Product Management
- Design a form for adding products.
- Design an interface for editing product information.
- Include a delete product button and provide confirmation prompt.
- Display existing products in Admin Panel.
- Connect product management operations with backend APIs.

#### Inventory Management
- Display available stock quantities.
- Provide controls for updating stock quantities.
- Display product availability status.
- Display notifications in case of low stock or out of stock products.

#### Customer Order Management
- Design a page to display customer orders.
- Display order information and current order status.
- Provide controls for order status update.
- Connect order management operations with the backend.

#### Customer Account Management
- Design a page to display registered customers.
- Display relevant customer account information.
- Provide controls for allowed customer account management operations.

---

### 3.2 Backend Development

**Assigned to: Salma Rahman**

#### Product Management
- Create APIs for adding new products.
- Implement product editing operation.
- Implement product deletion operation.
- Connect product operations with PostgreSQL.
- Validate product information before saving.

#### Inventory Management
- Implement stock quantity updates.
- Save inventory changes to the database.
- Update product availability based on stock.
- Prevent invalid stock quantities.

#### Customer Order Management
- Create an API to retrieve customer orders.
- Implement order status updates.
- Save updated order information to the database.
- Allow only authorized administrators to manage orders.

#### Customer Account Management
- Implement retrieval of registered customer information.
- Implement allowed customer account management operations.
- Secure customer information from unauthorized access.

---

### 3.3 Testing and Quality Assurance

**Assigned to: Testing Team (Developer’s Team)**

#### Product and Inventory Testing
- Test adding, editing and deleting of products.
- Test visibility of updated products in customer catalog.
- Test stock quantity updates.
- Test rejection of invalid stock quantities.

#### Order and Customer Management Testing
- Test viewing customer orders.
- Test order status update.
- Test saving of updated order information.
- Test access to customer information.
- Test protection of customer information against unauthorized access.

#### System Integration Testing
- Test communication between React and Django APIs.
- Test PostgreSQL database operations.
- Test whole customer shopping flow.
- Test product, cart, checkout and admin panel features integration.
- Document bugs found during testing and report them to the development team.

---

### 3.4 Scrum Master Responsibilities

**Assigned to: Zohal Riaz**

- Organize Sprint 4 planning and Daily Scrum sessions.
- Track progress of assigned tasks.
- Identify and report obstacles in development.
- Update the sprint burndown chart.
- Ensure communication between team members.
- Organize Sprint 4 Review and Retrospective meetings.

---

### 3.5 Product Owner Responsibilities

**Assigned to: Sayeda Taiba Agha**

- Establish Sprint 4 Goal and Priorities.
- Review selected user stories and their acceptance criteria.
- Clarify requirements for development team.
- Track the progress of sprint deliverables.
- Review functionality of the Admin Panel.
- Accept/reject finished user stories according to acceptance criteria.
- Prepare Sprint 4 Review Report.

---

## 4. Sprint 4 Expected Deliverables

By the end of Sprint 4, the team is expected to deliver:

- A functional Admin Panel with secure administrator authentication.
- Product management functionality for adding, editing, and deleting products.
- Inventory management with stock quantity and availability updates.
- Customer order management with order status updates.
- Customer account management functionality.
- Successful integration between the Admin Panel and the existing customer-facing application.
- Completed functional and integration testing.
- An updated sprint burndown chart.
- Sprint 4 Review and Retrospective documentation.

---

## 5. Sprint 4 Definition of Done

A user story will be considered complete when:

- Its required functionality has been implemented.
- Frontend and backend components are connected where required.
- Data is correctly stored and retrieved from PostgreSQL.
- Functional testing has been completed.
- Identified critical bugs have been resolved.
- The functionality meets the agreed acceptance criteria.
- The Product Owner has reviewed and accepted the user story.

---

## 6. Sprint Planning Meeting Notes

**Meeting Date:** October 17, 2026  
**Meeting Type:** Sprint 4 Planning  
**Participants:** Product Owner, Scrum Master, Frontend Developer, Backend Developer, and Testing Team

### Meeting Discussion

Only a brief task review of the sprint planning 4.

### Decisions Made

The assigned tasks needs to be done by October 22.

---

**Prepared by:**  
Sayeda Taiba Agha  
Product Owner – Fresh Mart

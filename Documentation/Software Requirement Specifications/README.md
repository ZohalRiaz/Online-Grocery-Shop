
# Software Requirements Specification

## E-commerce Grocery Shop

**Project:** E-commerce Grocery Shop  
**Version:** 1.0  
**Date:** 8 October, 2026  
**Prepared by:** Sayeda Taiba Agha (Product Owner) and Developer Team

---

## 1. Introduction

### 1.1 Purpose

In this report, our team provides a detailed version of the functional and non-functional specifications for our E-commerce Grocery Shop according to the user story. In this online grocery platform, users will be able to register, search, manage the cart, do payment/checkout, and place orders. Also, the admin will have their own dedicated dashboard where they will be able to manage customers and products.

### 1.2 Scope

It is an online website that provides the following features:

- Customers can navigate grocery products online.
- Customers can buy products from their home.
- Admin can manage and sell products online.

### 1.3 References

- ITC315 Course Notes – Requirement Engineering
- Chapter 4 – Software Requirements Specification

---

## 2. Overall Description

### 2.1 Product Perspective

This platform aims to provide services that connect users from their home to online grocery administration to facilitate their shopping.

### 2.2 Product Functions

Main functions:

- Customers can register an account.
- Customers can search and find their desired grocery product on the catalog page.
- Customers can add products to their cart and manage it to prepare for final checkout.
- Customers can make online payments and order the product.
- The admin panel will let the administration team manage products available on the website and customers using the website.

### 2.3 User Characteristics

- **Customers:** The platform should be user-friendly and precise for checking purposes.
- **Admins:** Should be able to administrate product and customers.

### 2.4 Constraints

- Customers shouldn’t have access to the admin dashboard.
- Customers can navigate the catalog without registration, but they shouldn’t be able to proceed with cart management and the checkout process without registration.
- Necessary security measures should be taken for the payment process.

### 2.5 Assumptions and Dependencies

- Customers should already have an online payment system.
- Customers should enter valid payment details.

# 3. Functional Requirements

Priority key: **Must** = needed for the release,  
**Should** = will be planned if time allows.

## 3.1 Registration and Access (REG)

| ID     | Requirement                                                                                                                                                                                                 | Priority |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| REG-01 | A visitor can create a customer account by entering thier full name, email address and password.                                                                                                                 | Must     |
| REG-02 | The system rejects duplicate emails and incomplete, invalid input, and explains the problem. For example, it prompts the user that password must be at least 8 characters, name should be between 3 to 50 characters, or the password is too common, it is entirely numbers. | Must     |
| REG-03 | A registered customer can sign in with email and password.                                                                                                                                                  | Must     |
| REG-04 | A signed-in user can sign out from the system and end the session they created.                                                                                                                                              | Must     |
| REG-05 | An administrator account can be only be one and it is created by using the administrator's name, email and password.                                                                                         | Must     |
| REG-06 | Administrators sign in to the admin, but customer accounts cannot open it.                                                                                                                                   | Must     |

## 3.2 Catalog and Search (CAT)

| ID     | Requirement                                                                                                         | Priority |
|--------|---------------------------------------------------------------------------------------------------------------------|----------|
| CAT-01 | The catalog shows products with thier name, price, image, and availability.                                               | Must     |
| CAT-02 | A customer can open a product and see its full details by clicking on the product or detail button.                  | Must     |
| CAT-03 | A customer can search products by name.                                                                             | Must     |
| CAT-04 | A customer can filter products by category and by availability.                                                     | Must     |
| CAT-05 | A customer can sort products, at minimum by price, maximum price, A-Z or Z-A.                                       | Must     |
| CAT-06 | Search, filter and sort can be used together.                                                                       | Should   |
| CAT-07 | When nothing matches to search, sort, or filter, friendly message is shown instead of an empty page.                | Should   |
| CAT-08 | Out-of-stock products are shown as out of stock and cannot be added to the cart.                                   | Must     |

## 3.3 Cart Management (CRT)

| ID     | Requirement                                                                                                        | Priority |
|--------|--------------------------------------------------------------------------------------------------------------------|----------|
| CRT-01 | A customer can add a product to the cart.                                                                          | Must     |
| CRT-02 | The cart shows every selected product with its price and quantity.                                                 | Must     |
| CRT-03 | A customer can increase or decrease quantity of the product. Quantity never becomes below one and never become higher than available stock. | Must     |
| CRT-04 | A customer can remove one product from the cart.                                                              | Must     |
| CRT-05 | A customer can clear the whole by clicking clear cart button.                                                                 | Must     |
| CRT-06 | The cart total updates immediately after every change.                                                             | Must     |

## 3.4 Checkout and Orders (CHK)

| ID     | Requirement                                                                                                        | Priority |
|--------|--------------------------------------------------------------------------------------------------------------------|----------|
| CHK-01 | Checkout takes contact details like email and phone number from the user.                                                     | Must     |
| CHK-02 | Checkout takes shipping details like name, address and city from user.                                                    | Must     |
| CHK-03 | The customer chooses one of the delivery methods.                                                        | Must     |
| CHK-04 | The customer chooses one of the  payment methods.                                                         | Must     |
| CHK-05 | Before ordering an order summary shows products, quantities, delivery, payment choice and the total.               | Must     |
| CHK-06 | The customer places the order and the order is saved.                                                              | Must     |
| CHK-07 | After a successful order a confirmation message is displayed for the user.                                         | Must     |
| CHK-08 | A registered customer can view the list of their previous orders.                                                  | Must     |

## 3.5 Admin Panel (ADM)

| ID     | Requirement                                                                                                        | Priority |
|--------|--------------------------------------------------------------------------------------------------------------------|----------|
| ADM-01 | An administrator can add a new product with its details and image.                                                 | Must     |
| ADM-02 | An administrator can edit an existing product.                                                                     | Must     |
| ADM-03 | An administrator can remove a product from the catalog.                                                            | Must     |
| ADM-04 | An administrator can update quantity and availability, of the product in the store.                                | Must     |
# 4. Non-Functional Requirements

These requirements show how well our website should work, like how safe, fast, correct and easy to use it is. Each one is linked to the user stories in the Product Backlog.

| ID     | Requirement                                                                                                                                                                  | Related User Stories        |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------|
| NF-01 | **Security:** Passwords are saved in hashed form, and are not saved as plain text. Logging out ends the session, so the account stays safe.                                              | US-01, US-02, US-03, US-20  |
| NF-02 | **Access control:** Only signed-in users can place orders and view their own order history. Admin pages and actions are restricted to administrators, and access is checked by the server. | US-02, US-19, US-27, US-28  |
| NF-03 | **Performance:** Catalog, product details and search results open in about 3 seconds on a normal mobile connection. Cart updates should respond quickly, and placing an order should normally take no more than about 5 seconds.  | US-04, US-10, US-16, US-24  |
| NF-04 | **Usability:** A new customer should be able to register, find a product and complete checkout without assistance. Error messages should use simple language, and the pages should work on phones, tablets and computers. | US-01, US-15, US-23, US-24  |
| NF-05 | **Data accuracy:** The cart total and the order total should be calculated correctly, and the prices are calculated by the server. Stock and availability are always up to date, so customers only buy what is really available. | US-04, US-10, US-15, US-22  |
| NF-06 | **Reliability:** If the network or server has a problem, a clear message is shown and the cart is not lost. The system should prevent the same order from being saved more than once.                             | US-16, US-17                |
| NF-07 | **Accessibility:** Text is easy to read, the controls can be used with the keyboard, and images have alternative text.                                                       | US-04, US-23                |
| NF-08 | **Maintainability:** It should clea, organized and documented.                                | All user stories            |
| NF-09 | **Scalability:** The system should handle more products, customers and orders without being redesigned.                                                                         | US-04, US-21, US-29         |
| NF-10 | **Backup and recovery:** The database is backed up every day, and a backup can be restored easily.                                                                           | All user stories            |

# 5. Appendices

- Use case diagram: will be added in a later sprint.
- Sequence diagrams (checkout and order status update): will be added in a later sprint.
  
# Product Owner Review and Approval

_Product Owner:_ Sayeda Taiba Agha  
Review date:  
_Approval statement:_ "I have read this Requirements Specification and I confirm that it correctly shows the current product vision and priorities. I accept it as the starting point to refine the Product Backlog and plan the sprint work."



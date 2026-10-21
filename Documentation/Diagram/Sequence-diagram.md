# E-Commerce Grocery Shop (Fresh Mart)
## UML Sequence Diagrams

**Course:** ITC 315 – Software Engineering Project  
**Project:** E-Commerce Grocery Shop (Fresh Mart)  
**Prepared by:** Sayeda Taiba Agha (Product Owner)

---

## 1. Customer Shopping Sequence Diagram

This sequence diagram shows the interactions between the customer, React frontend, Django REST API, and PostgreSQL database during registration, login, product browsing, cart management, and checkout.

```mermaid
sequenceDiagram
    autonumber
    actor Customer
    participant React as React Frontend
    participant Django as Django REST API
    participant DB as PostgreSQL Database

    opt New Customer Registration
        Customer->>React: Enter registration details
        React->>Django: Submit registration request
        Django->>DB: Save customer account
        DB-->>Django: Account created
        Django-->>React: Registration successful
        React-->>Customer: Display success message
    end

    Customer->>React: Enter login credentials
    React->>Django: Send login request
    Django->>DB: Verify customer credentials
    DB-->>Django: Return customer information

    alt Valid Credentials
        Django-->>React: Login successful
        React-->>Customer: Display product catalog
    else Invalid Credentials
        Django-->>React: Login failed
        React-->>Customer: Display error message
    end

    Customer->>React: Browse, search, filter or sort products
    React->>Django: Request product information
    Django->>DB: Retrieve matching products
    DB-->>Django: Return product information
    Django-->>React: Send product results
    React-->>Customer: Display products

    Customer->>React: View product details
    React->>Django: Request selected product
    Django->>DB: Retrieve product details
    DB-->>Django: Return product details
    Django-->>React: Send product information
    React-->>Customer: Display product details

    Customer->>React: Add product to cart
    React->>Django: Send add to cart request
    Django->>DB: Check stock and update cart
    DB-->>Django: Cart updated
    Django-->>React: Return updated cart
    React-->>Customer: Display cart

    opt Cart Management
        Customer->>React: Change quantity or remove product
        React->>Django: Submit cart changes
        Django->>DB: Update cart records
        DB-->>Django: Cart updated
        Django-->>React: Return updated cart total
        React-->>Customer: Display updated cart
    end

    Customer->>React: Proceed to checkout
    React-->>Customer: Display checkout form
    Customer->>React: Enter delivery details
    Customer->>React: Select payment method
    React->>Django: Request order review
    Django->>DB: Validate cart and inventory
    DB-->>Django: Return validation result
    Django-->>React: Send order summary
    React-->>Customer: Display order total

    Customer->>React: Confirm order
    React->>Django: Submit order
    Django->>DB: Save order and update inventory
    DB-->>Django: Order saved
    Django->>DB: Clear purchased cart items
    DB-->>Django: Cart cleared
    Django-->>React: Return order confirmation
    React-->>Customer: Display order ID and confirmation

    opt Customer Logout
        Customer->>React: Click logout
        React->>Django: Send logout request
        Django-->>React: Logout successful
        React-->>Customer: Return to login page
    end
```

---

## 2. Admin Panel Sequence Diagram

This sequence diagram shows the interactions between the administrator, React frontend, Django REST API, and PostgreSQL database for managing products, inventory, orders, and customer accounts.

```mermaid
sequenceDiagram
    autonumber
    actor Admin
    participant React as React Admin Panel
    participant Django as Django REST API
    participant DB as PostgreSQL Database

    Admin->>React: Enter admin login credentials
    React->>Django: Send admin login request
    Django->>DB: Verify credentials and admin role
    DB-->>Django: Return admin information

    alt Valid Admin
        Django-->>React: Authentication successful
        React-->>Admin: Display admin dashboard
    else Invalid Admin
        Django-->>React: Authentication failed
        React-->>Admin: Display error message
    end

    opt Product Management
        Admin->>React: Add, edit or delete product
        React->>Django: Submit product changes
        Django->>DB: Update product records
        DB-->>Django: Changes saved
        Django-->>React: Return success response
        React-->>Admin: Display updated products
    end

    opt Inventory Management
        Admin->>React: Update product stock
        React->>Django: Submit stock changes
        Django->>DB: Update inventory records
        DB-->>Django: Inventory updated
        Django-->>React: Return updated stock
        React-->>Admin: Display updated inventory
    end

    opt Order Management
        Admin->>React: View customer orders
        React->>Django: Request order list
        Django->>DB: Retrieve orders
        DB-->>Django: Return order records
        Django-->>React: Send order information
        React-->>Admin: Display customer orders

        Admin->>React: Update order status
        React->>Django: Submit order status
        Django->>DB: Update order record
        DB-->>Django: Status updated
        Django-->>React: Return updated status
        React-->>Admin: Display confirmation
    end

    opt Customer Account Management
        Admin->>React: View or manage customer accounts
        React->>Django: Request customer operation
        Django->>DB: Retrieve or update customer records
        DB-->>Django: Return customer information
        Django-->>React: Send customer results
        React-->>Admin: Display customer accounts
    end

    Admin->>React: Click logout
    React->>Django: Send logout request
    Django-->>React: Logout successful
    React-->>Admin: Return to login page
```

---

## 3. Technologies Used

| Component | Technology | Purpose |
|---|---|---|
| Frontend | React | Customer and admin interfaces |
| Backend | Django | Application logic |
| API | Django REST Framework | Communication between frontend and backend |
| Database | PostgreSQL | Store users, products, carts, orders, and inventory |

---

## 4. Conclusion

The sequence diagrams show how the customer and administrator interact with the Fresh Mart system. They describe the communication between the frontend, backend, and database to complete the main operations of the grocery shop.

---

**Prepared by:** Sayeda Taiba Agha  
**Role:** Product Owner  
**Project:** E-Commerce Grocery Shop (Fresh Mart)

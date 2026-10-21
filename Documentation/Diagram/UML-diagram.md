# Fresh Mart – UML Use Case Diagram

**Course:** ITC 315 – Software Engineering Project  
**Project:** E-Commerce Grocery Shop (Fresh Mart)  
**Prepared by:** Zohal Riaz (Scrum Master)

## 1. System Use Case Diagram

```mermaid
flowchart LR
    C["👤 CUSTOMER"]

    subgraph FM["FRESH MART — E-COMMERCE GROCERY SHOP"]
        direction TB

        subgraph E1["01 | REGISTRATION & AUTHENTICATION"]
            direction LR
            R([Register Account])
            LI([Customer Login])
            LO([Customer Logout])
        end

        subgraph E2["02 | PRODUCT CATALOG & SEARCH"]
            direction LR
            BP([Browse Products])
            VP([View Product Details])
            SP([Search Products])
            FP([Filter Products])
            SO([Sort Products])
        end

        subgraph E3["03 | CART MANAGEMENT"]
            direction LR
            AC([Add to Cart])
            VC([View Cart])
            CQ([Change Quantity])
            RI([Remove Item])
            CC([Clear Cart])
        end

        subgraph E4["04 | CHECKOUT, ORDERS & PAYMENT"]
            direction LR
            RO([Review Order Summary])
            AD([Enter Delivery Address])
            SD([Select Delivery Option])
            PM([Choose Payment Method])
            PO([Place Order])
            OC([Receive Order Confirmation])
        end

        subgraph E5["05 | ADMIN PANEL"]
            direction LR
            AL([Admin Login / Logout])
            MP([Manage Products])
            MI([Manage Inventory])
            MO([Manage Customer Orders])
            MC([Manage Customer Accounts])
        end
    end

    A["👤 ADMINISTRATOR"]

    C --- R
    C --- LI
    C --- LO

    C --- BP
    C --- VP
    C --- SP
    C --- FP
    C --- SO

    C --- AC
    C --- VC
    C --- CQ
    C --- RI
    C --- CC

    C --- RO
    C --- AD
    C --- SD
    C --- PM
    C --- PO
    C --- OC

    AL --- A
    MP --- A
    MI --- A
    MO --- A
    MC --- A

    classDef actor fill:#DBEAFE,stroke:#2563EB,color:#1E3A8A,stroke-width:2px
    classDef auth fill:#EDE9FE,stroke:#7C3AED,color:#4C1D95
    classDef catalog fill:#DCFCE7,stroke:#16A34A,color:#14532D
    classDef cart fill:#FEF3C7,stroke:#D97706,color:#78350F
    classDef checkout fill:#FCE7F3,stroke:#DB2777,color:#831843
    classDef admin fill:#E0F2FE,stroke:#0284C7,color:#0C4A6E

    class C,A actor
    class R,LI,LO auth
    class BP,VP,SP,FP,SO catalog
    class AC,VC,CQ,RI,CC cart
    class RO,AD,SD,PM,PO,OC checkout
    class AL,MP,MI,MO,MC admin

    style FM fill:#F8FAFC,stroke:#334155,stroke-width:2px
    style E1 fill:#FAF5FF,stroke:#A78BFA
    style E2 fill:#F0FDF4,stroke:#86EFAC
    style E3 fill:#FFFBEB,stroke:#FCD34D
    style E4 fill:#FDF2F8,stroke:#F9A8D4
    style E5 fill:#F0F9FF,stroke:#7DD3FC
```

## 2. Actors

| Actor | Description |
|---|---|
| Customer | Registers, logs in, browses products, manages the cart, completes checkout, and places orders. |
| Administrator | Logs in to the admin panel and manages products, inventory, customer orders, and customer accounts. |

## 3. Covered Epics

| Epic | Features |
|---|---|
| Registration & Authentication | Register, login, logout |
| Product Catalog & Search | Browse, view details, search, filter, sort |
| Cart Management | Add, view, change quantity, remove, clear |
| Checkout, Orders & Payment | Review order, delivery address, delivery option, payment method, place order, confirmation |
| Admin Panel | Admin login/logout, product management, inventory management, order management, customer management |

## 4. Technologies Used

| Component | Technology |
|---|---|
| Frontend | React |
| Backend | Django |
| API | Django REST Framework |
| Database | PostgreSQL |

---

**Prepared by:** Zohal Riaz  
**Role:** Scrum Master

**Approved by:** Sayeda Taiba Agha  
**Role:** Product Owner 

**Project:** Fresh Mart – E-Commerce Grocery Shop

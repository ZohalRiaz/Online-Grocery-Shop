# 5. Functional Requirements

Priority key: **Must** = needed for the release,  
**Should** = valuable and planned if time allows.

## 5.1 Registration and Access (REG)

| ID     | Requirement                                                                                                                                                                                                 | Priority |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| REG-01 | A visitor can create a customer account by providing full name, email address and password.                                                                                                                 | Must     |
| REG-02 | The system rejects duplicate emails and incomplete, invalid input, and explains the problem. For example, it prompts the user that password must be at least 8 characters, name should be between 3 to 50 characters, or the password is too common, it is entirely numbers. | Must     |
| REG-03 | A registered customer can sign in with email and password.                                                                                                                                                  | Must     |
| REG-04 | A signed-in user can sign out and end the session they created.                                                                                                                                              | Must     |
| REG-05 | An administrator account can be only be one and it is created by using the administrator's name, email and password.                                                                                         | Must     |
| REG-06 | Administrators sign in to the admin, but customer accounts cannot open it.                                                                                                                                   | Must     |

## 5.2 Catalog and Search (CAT)

| ID     | Requirement                                                                                                         | Priority |
|--------|---------------------------------------------------------------------------------------------------------------------|----------|
| CAT-01 | The catalog lists products with name, price, image, and availability.                                               | Must     |
| CAT-02 | A customer can open a product to see its full details by clicking on the product or detail button.                  | Must     |
| CAT-03 | A customer can search products by name.                                                                             | Must     |
| CAT-04 | A customer can filter products by category and by availability.                                                     | Must     |
| CAT-05 | A customer can sort products, at minimum by price, maximum price, A-Z or Z-A.                                       | Must     |
| CAT-06 | Search, filter and sort can be used together.                                                                       | Should   |
| CAT-07 | When nothing matches to search, sort, or filter, friendly message is shown instead of an empty page.                | Should   |
| CAT-08 | Out-of-stock products are marked as out of stock and cannot be added to the cart.                                   | Must     |

## 5.3 Cart Management (CRT)

| ID     | Requirement                                                                                                        | Priority |
|--------|--------------------------------------------------------------------------------------------------------------------|----------|
| CRT-01 | A customer can add a product to the cart.                                                                          | Must     |
| CRT-02 | The cart shows every selected product with its price and quantity.                                                 | Must     |
| CRT-03 | A customer can increase or decrease a product's quantity. Quantity never becomes below one and never become higher than available stock. | Must     |
| CRT-04 | A customer can remove a single product from the cart.                                                              | Must     |
| CRT-05 | A customer can clear the whole cart in one action.                                                                 | Must     |
| CRT-06 | The cart total updates immediately after every change.                                                             | Must     |

## 5.4 Checkout and Orders (CHK)

| ID     | Requirement                                                                                                        | Priority |
|--------|--------------------------------------------------------------------------------------------------------------------|----------|
| CHK-01 | Checkout collects contact details like email and phone number.                                                     | Must     |
| CHK-02 | Checkout collects shipping details like name, address and city.                                                    | Must     |
| CHK-03 | The customer chooses one of the available delivery methods.                                                        | Must     |
| CHK-04 | The customer chooses one of the available payment methods.                                                         | Must     |
| CHK-05 | Before ordering an order summary shows products, quantities, delivery, payment choice and the total.               | Must     |
| CHK-06 | The customer places the order and the order is saved.                                                              | Must     |
| CHK-07 | After a successful order a confirmation message is displayed for the user.                                         | Must     |
| CHK-08 | A registered customer can view the list of their previous orders.                                                  | Must     |

## 5.5 Admin Panel (ADM)

| ID     | Requirement                                                                                                        | Priority |
|--------|--------------------------------------------------------------------------------------------------------------------|----------|
| ADM-01 | An administrator can add a new product with its details and image.                                                 | Must     |
| ADM-02 | An administrator can edit an existing product.                                                                     | Must     |
| ADM-03 | An administrator can remove a product from the catalog.                                                            | Must     |
| ADM-04 | An administrator can update quantity and availability, of the product in the store.                                | Must     |
| ADM-05 | An administrator can view all customer orders and their details.                                                   | Must     |
| ADM-06 | An administrator can update the status of an order.                                                                | Must     |
| ADM-07 | An administrator can view the list of registered customers and their information.                                  | Must     |
| ADM-08 | An administrator can sign out of the panel.                                                                        | Must     |


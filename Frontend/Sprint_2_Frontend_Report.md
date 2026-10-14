# SPRINT 2 REPORT

**Frontend development**

Fresh Mart Online Grocery Store

| Item | Detail |
| --- | --- |
| Sprint | Sprint 2 of 4, October 11 to October 14, 2026 |
| Sprint theme | Shopping cart |
| Prepared by | Faezah Ahmadi, Frontend Developer |
| Backlog scope | Cart Management epic (user stories 5 to 10) |
| Frontend stack | React 19, Vite, Tailwind CSS 4, lucide-react, react-hook-form |
| Integration | Server-side cart endpoints of the Django REST API, token authentication |
| Outcome | Sprint goal reached; a signed-in customer can fill, adjust and empty a basket and always sees a reliable total |

## 1. Sprint Overview

In sprint one customers can browse the groceries and in sprint 2 they are able to put them in the cart. The goal of the frontend development is a shopping cart which behaves in a way that customers are already familiar ways; add items, change the quantities in the cart, remove a product, or clear the cart completely.

Every action goes to Django api and response come from server, so the server is the source of information here. The screen never calculate the prices to ensure that the price that customer sees on the screen is the price that the backend uses for checkout in sprint 3.

Sprint goal: a signed-in customer can add the products to cart, increase or decrease the quantity, remove the product from the cart, clear cart, and see the total price.

## 2. Backlog Coverage

| User Story | Summary | Frontend Deliverable | Status |
| --- | --- | --- | --- |
| US-05 | Add product to cart | Add to cart button on every product card and product detail page | Done |
| US-06 | See the cart content | Cart page lists each item with image, name, unit price, quantity | Done |
| US-07 | Change a quantity | Change a quantity with Minus and plus controls | Done |
| US-08 | Remove one product | Remove action on every cart row for every product | Done |
| US-09 | Empty the cart | Remove all products in one action | Done |
| US-10 | See the total price | Summary panel with item count and total price | Done |

## 3. Work delivered

### 3.1 Cart State

There is a wrapper which wraps the app, and let the whole components uses that. The cart provides five functionalities; add to cart, increase quantity, decrease quantity, remove, refresh, and clear cart. Each function matches with its own endpoint from the backend.

Follows the customers: the cart comes from the backend. It means when someone signs in they see their own cart, not another person’s. when they logout, the cart is gone from the screen.

Server is source of truth: prices, quantities, all come from the server, and they are not calculated in the screen.

### 3.2 Add Product to cart:

Product card: there is an add to cart button in the product card, which is visible in all devices. It will be disable when the product is out of stock.

Product detail page: there is also an add to cart button in the product detail page, which has the same functionality like the one in product card. In addition, it has a quantity field which accepts an integer within the range of stock of that specific product. If the user adds any other number, they will receive a message with the allowed range.

Guest: a person who is not signed in, will be redirected to the login page instead of an error; if they try to add something to cart.

Confirmation message: when the user adds a product to cart, a toast notification is shown to them as a confirmation message and the badge number beside the cart increases.

### 3.3 Cart Page:

**Item rows:** for each product which is added to the cart there is a row which keeps the product image, name, and quantity.

**Quantity control:** minus sign decrease quantity, while plus increases the quantity. Minus is disabled at one, while the plus is disabled on stock limit. So, the customer cannot buy more than what is available in the stock.

**Clear and item removal:** the remove button, remove one product from the cart. While the clear button removes all products, which makes the cart empty.

**Summary; summary shows the total item in the cart and the total price, the customer should pay for. There is also a checkout button which will be implemented in the sprint 3.:**

**Empty state:** If the cart is empty, instead of a blank page a friendly empty state is shown.

### 3.3 Protected pages:

Cart, checkout, orders are protected pages, which means they are not visible for a signed-out user. They will be redirected to login page.

## 4. user experience and interface:

The cart reuses the same design from sprint one. There are green buttons, white round cards, shadows, and hover effect on cards.

| State | What the customer sees |
| --- | --- |
| Cart is loading | A loading panel with a short message |
| Cart is empty | Friendly card and an Explore products button |
| Request in progress | All cart buttons disabled until the server replies |
| Load failure | Error banner and a Retry loading cart button |
| Stock limit reached | Plus button disabled on that row |
| Item added | Toast message and an animated badge in the header |

## 5.how interface talks to Api:

| Customer action | Request | Result on screen |
| --- | --- | --- |
| Opens the cart | GET/cart/ | Row, count, total appear in the screen |
| Add product | POST/cart/add | Badge and cart updates |
| Change quantity | PATCH/cart/item/{id} | Row subtotal, and total refreshes |
| Remove product | DELETE/cart/item/{id}/remove/ | Row subtotal disappear |
| Clear card | DELETE/cart/clear/ | Empty state is shown |

## 6.daily process

| Date | Focus | Result |
| --- | --- | --- |
| Sun, Oct 11 | Cart state, adding product | Cart provider with five actions, add to cart button |
| Mon, Oct 12 | Cart pages, quantities and removal | Cart protected route, cart layout and empty state |
| Tue, Oct 13 | Errors, testing, polishing | Full journey test, small fix in layout, merge of sprint |

## 7. verification scenarios

| Scenario | Expected outcome |
| --- | --- |
| Add a product while signed out | Login page opens instead of an error |
| Add a product while signed in | Toast appears and the header count increases |
| Enter a quantity above the stock | A message explains the allowed range; nothing is added |
| Press plus until stock runs out | Plus becomes disabled on that row |
| Remove one of three items | Only that row disappears and the total drops |
| Clear the cart and confirm | Empty state appears and the header count returns to zero |
| Sign out and sign in as someone else | The earlier cart is not visible |
| Switch the backend off on the cart page | Error banner with a retry button |

## 8. Obstacles and Decisions

Who owns the total? Calculating the sum on the frontend side is a risk. Because it might be different in the backend, so the wrong number is going to the checkout. For this reason, we decided to let the backend calculate the sum and show it.

**Double clicks:** I decided to add a delay between clicking the buttons to avoid sending unwanted requests to the server, and wrong quantity for a product.

**Stock limit:** The customer can’t enter a quantity which is not available in the stock for accuracy and convenience.

**A cart belongs to a person:** each customer has their own cart and no other customer can see their cart.

## 9. Sprint review and retrospective

**What went well:**

Because add, update, remove and clear all return the full cart, the frontend logic is very small and easy to follow.

The confirmation component for clearing the cart is reusable and it will be used in the admin area next sprint.

**What to improve:**

Cart feel slow if the server is slow. Showing the cart instantly and change it if it was not matching backend will be implemented in next version.

## 10. Coming soon

Sprint 3 is from Oct 13 to Oct 18 and cover these things.

- A checkout form with contact details

delivery address and payment option

a review step and order placement.

## 11. Appendix

### A. Code organization

| Location | Purpose |
| --- | --- |
| src/context/CartContext.jsx | Cart state from the server, loading, errors and the five cart actions |
| src/pages/CartPage.jsx | Cart rows, quantity controls, summary and empty state |
| src/components/ConfirmAction.jsx | Reusable inline confirmation |
| src/components/ProductCard.jsx | Add to cart button on product cards |
| src/App.jsx | Cart link and badge, toast, private routes |

### B. Screenshots to attach

- screenshots/cart-page.png: cart with several items and the summary panel

- screenshots/cart-empty.png: empty state

- screenshots/add-to-cart.png: product card with the Add button and header badge

- screenshots/clear-cart-confirm.png: inline confirmation

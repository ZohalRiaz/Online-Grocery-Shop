### SPRINT 3 REPORT

# **Frontend Development**  
Fresh Mart · Online Grocery Shop

| Item | Detail |
|---|---|
| Sprint | Sprint 3 of 4, October 14 to October 17, 2026 |
| Sprint theme | Payment/ Checkout and order |
| Prepared by | Faezah Ahmadi, Frontend Developer |
| Backlog scope | Registration and Catalog/Search epics (user stories 1 to 4, 19, and 23-26) |
| Frontend stack | React 19, Vite, Tailwind CSS 4, lucide-react, react-hook-form |
| Integration | Django REST API built by the backend developer (orders and cart endpoints, token authentication) |
| Outcome | Sprint goal reached; the increment runs end to end against the real backend |

---

## 1. Sprint Overview

Sprint one and two let the customer to register, browse, and fill the basket. This sprint makes the shopping journey complete by adding procced to checkout, place an order, order confirmation, and order history. The administrator area is not part of this sprint. The planning document places it in Sprint 4. Its routes stay empty until then.

Sprint goal: Customers can enter contact and shipping details, delivery and payment options review their order, place it receive a confirmation and access their previous orders.

## 2. Backlog Coverage

The table shows the user stories for this sprint and what was completed on the frontend based on the backlog and user stories.

| User Story | Summary | Frontend deliverable | Status |
|---|---|---|---|
| US-11 | Contact Information | The Contact section has name, email and phone number. Name and email are filled in from the customer’s account. | Done |
| US-12 | Shipping Information | Shipping section needs the customer’s address, city and optional delivery notes. | Done |
| US-13 | Delivery Options | There are two delivery choices with their time and fee, and the customer can exactly select one of them. | Done |
| US-14 | Payment Information | Payment can be done with cash or card. There will be a validation message when nothing is selected. | Done |
| US-15 | Review Order | order review screen shows contact, address, delivery, payment, products and totals of that order. | Done |
| US-16 | Place Order | Place order button that sends the order to the backend, which saves it and reduces it from stock. | Done |
| US-17 | Order Confirmation | Confirmation page has order number, status, products and totals. | Done |
| US-27 | Order History | Order history page shows a list the customers’ orders with date, status, total and items. | Done |

## 3. Work Delivered

### 3.1 Checkout form

Checkout is one page divided into four sections and each section is in its own card. There is also an order summary beside them on tablets and desktops.

- Contact information: it needs full name, email address and phone number. The name and email come from the customer’s account, which saves typing and we can still change them for an order if we want.
- Shipping address: it needs address, city and an optional field for additional info that customer thinks we need to know.
- Delivery option: it has standard delivery which takes two to three days and costs $2.00, and express delivery that takes a day and costs $5.00.  when we choose one, the card will be highlight with light green border and the summary updates the moment the choice changes.
- Payment information:  It has to option, cash on delivery or card on delivery. A short notice says that nothing is charged online and you do not need to enter the card detail.

### 3.2 Review and placing the order

The Review order button validates the whole form first. If everything is correct, the screen shows a read-only summary of the contact details, address, delivery option and payment option and list of products and the final totals for the order.

- Place order. The button Sends the details and the cart items to the backend. While the request is running the button of Placing order is disabled, so a double click cannot send the order twice to the backend.
- After success. The backend saves the order, reduce the stock and empty the cart. When the frontend reloads the cart, it sets the header count back to zero, and opens the confirmation page.
- After failure. If the order fails, a message from the server appears in a banner. For example, when a product has just run out of stock,  the customer stays on the review screen, with links to check the cart or look at their orders.

### 3.3 Confirmation

The confirmation page confirm that the order was received and shows the order number in bold, the status badge, the date, a table of products with quantities and prices, the delivery details, and the subtotal, delivery fee and total.

### 3.4 Order history

My orders page shows the list of the orders that the signed-in customer has ordered. It shows the newest first. Each card shows the order number, date, status badge, total and a one-line summary of its items. For example, two apples and one milk, with a link to the full details. Customers with no orders see a friendly message and a button to start shopping. Cart, checkout and orders are private pages: a visitor who is not signed in sees the login form instead.

## 4. Interface and Experience

The new pages use the same design as other sprints like sprint one and two. There are rounded white cards, green gradient buttons and soft shadows. The selected delivery and payment cards turn light green with a green border.

| Screen | Behavior |
|---|---|
| Phone | All sections stack in a vertical order. delivery and payment cards also stack The order summary moves below the form |
| Tablet and desktop | The summary card stays in the right side of the form |

## 5. Validation Rules

The browser checks every field sending them to the backend, and shows a message under the relevant field. The rules are intentionally identical to the ones that the backend enforces, so a form that passes in the browser is also accepted by the server.

| Field | Rule |
|---|---|
| Full name | Required, 3 to 150 characters |
| Email | Required, valid email address |
| Phone number | Required.  spaces and hyphens are ignored in number. The rest of that must be digits only at least 6 and at most 30 characters. a plus sign is not accepted. |
| Address | Required, 5 to 255 characters |
| City | Required, 2 to 100 characters |
| Delivery notes | Optional |
| Delivery option | Standard or express, one only |
| Payment option | Cash or card on delivery, one only, customer can only choose one. |

## 6. How the Interface Talks to the API

| Customer action | Request | Result on screen |
|---|---|---|
| Opens checkout | `GET /cart/` | Items and subtotal in the summary |
| Places the order | `POST /orders/` | Order saved, stock reduced, cart emptied by the server |
| Order succeeds | `GET /cart/` | Header count returns to zero; confirmation page opens |
| Opens the confirmation or details | `GET /orders/{id}/` | Order number, status, items and totals |
| Opens My orders | `GET /orders/` | The customer's own orders, newest first |

## 7. Daily Progress

| Date | Focus | Result |
|---|---|---|
| Wed, Oct 14 | Planning and checkout form | I worked one checkout route, contact section with prefilled details and the shipping address form |
| Thu, Oct 15 | Delivery, payment, review | I worked on Delivery and payment choices, validation messages, order summary and the review step |
| Fri, Oct 16 | Order and confirmation | I connected place order to the API, built confirmation page, order history and details pages and the failed-order case |
| Sat, Oct 17 | Present to product owner. Write the sprint history | The sprint review, write the sprint history, test report |

## 8. Verification Scenarios

The scenarios below were checked in the browser against the running backend.

| Scenario | Expected outcome |
|---|---|
| Open checkout while signed in | Name and email are already filled in |
| Open checkout with an empty cart | Message that the cart is empty and with a link back to shopping |
| Submit with an empty phone number | Submission is blocked with a message under that field |
| Enter a phone number containing a plus sign | Message that says enter only digits |
| Submit without choosing a payment option | Message asking the customer to choose |
| Switch from standard to express | Delivery fee and total update immediately |
| Go back from review and edit the address | All earlier answers are still in place |
| Press Place order twice quickly | Only one order is created |
| Place an order with more items than the stock | Server message in a banner; customer stays on review |
| Place a valid order | Confirmation page; cart count returns to zero |
| Open My orders | The new order appears at the top with its status |
| Open checkout or orders while signed out | Login form is shown |

## 9. Obstacles and Decisions

**Rules must match the server.** A phone number such as +93 700 000 000 looks  valid but is rejected by the backend, which accepts digits only. SO instead of showing an error, the browser now applies the same rule, written in one file and checked against the backend's own logic. It helps consistency.

**A deliberate payment choice.** Preselecting a payment option would hide the validation message the sprint requires and could let a customer pay by a method they did not mean to pick.

**Two steps from one form.** The review step needs the answers from the form that is hidden while reviewing. The form keeps its values when hidden, so Edit information never loses anything.

**Orders that must not repeat.** The button becomes disabled while the request is running, and the backend independently refuses an identical order placed twice within thirty seconds. The two safeguards cover each other and increase the app quality.

**Showing the right numbers.** The summary shows the delivery fee and total before ordering using the same rule as the backend, but after ordering the confirmation always displays the amounts the server saved, so what the customer sees is what was recorded.

## 10. Sprint Review and Retrospective

### What went well

- The backend has clear endpoint documentation which really helped me connect to real data on the first attempt.
- I Keep the checkout rules in one file which made the form easy to compare with the backend line by line.
- I Reused the card, button and status badge styles. This  gave the new pages a consistent look with other pages.

### What to improve

- The delivery fees are written into the frontend.  The backend could send them so that a fee change needs no frontend update.
- The payment method is cash or card when the order arrive. In the next version will include online payment as well.
- Automated tests for the checkout flow can replace most of the manual repetition.

## 11. Looking Ahead: Sprint 4

Sprint 4 completes the project. The frontend work planned for it is:

- The administrator area, including protected admin pages, a dashboard, and management of products, inventory and orders.
- A full integration pass across all four sprints against the backend, we will fix the defects if we find them.
- Checks of loading, empty and error states and of phone, tablet and desktop layouts.
- Final documentation: README, screenshots and the review of every backlog story.

## 12. Appendix

### A. Code organization

| Location | Purpose |
|---|---|
| `src/pages/CheckoutPage.jsx` | Checkout form, review step and order placement |
| `src/pages/OrdersPage.jsx` | Order history and the order details and confirmation view |
| `src/services/checkoutRules.js` | Delivery and payment options, phone rule, totals and the order request body |
| `src/App.jsx` | Routes for checkout and orders, private-page handling and the My orders link |
| `src/index.css` | Status badge colors, including shipped |

### B. Screenshots to attach

- `screenshots/checkout-form.png`: contact, address, delivery and payment sections
- `screenshots/checkout-errors.png`: validation messages
- `screenshots/order-review.png`: review step
- `screenshots/order-confirmation.png`: confirmation page with order number
- `screenshots/order-history.png`: My orders list
- `screenshots/order-details.png`: single order details

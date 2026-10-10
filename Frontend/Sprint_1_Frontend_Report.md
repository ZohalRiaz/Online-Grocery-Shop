Fresh Mart · Sprint 1 · Frontend

# SPRINT 1 REPORT

## Frontend Development

**Fresh Mart · Online Grocery Shop**

| **Item** | **Detail** |
| --- | --- |
| **Sprint** | Sprint 1 of 4, October 5 to October 10, 2026 |
| **Sprint theme** | User accounts and product catalog |
| **Prepared by** | Faezah Ahmadi, Frontend Developer |
| **Backlog scope** | Registration and Catalog/Search epics (user stories 1 to 4, 19, and 23-26) |
| **Frontend stack** | React 19, Vite, Tailwind CSS 4, lucide-react, react-hook-form |
| **Integration** | Django REST API with token authentication, plus a sample-data mode for working without the backend for testing front end. |
| **Outcome** | Sprint goal reached; the increment runs end to end against the real backend |

---

## 1. Sprint Overview

The main goal of Sprint 1 was to help customers create account, log in into account, and find the products they need. Before customers can add products to their cart, they must register, sign in, and then browse the catalog and add them to cart.

My frontend work focused on building the registration, login, and product catalog pages, and search, sort, and filter features. We, developers connected the React frontend to the Django API so the application use real data instead of sample data. By October 10 the first epic mentioned in the product backlog works in the browser: register, sign in, browse, search, filter, sort, open a product, check its availability and sign out.

> **Objective:** Enable users to sign up, login and logout, browse products and view details and availability of products.

---

## 2. Backlog Coverage

The table shows the user stories for this sprint and what was completed on the frontend based on the backlog and user stories.

| **User Story** | **Summary** | **Frontend deliverable** | **Status** |
| --- | --- | --- | --- |
| **US-01** | Register an account | A sign-up form with name, email, password, confirmation, and validation and clear success message | Done |
| **US-02** | Sign in | A login form that stores the session token and sends the customer to the product catalog | Done |
| **US-03** | Sign out | A logout button that clears the stored token and returns the customer to the home page | Done |
| **US-04** | Browse catalog | Responsive product grid which shows picture, name, category, price and stock status | Done |
| **US-23** | View a product | Dedicated product page with large image, description, price and units available | Done |
| **Us-24** | Search by name | Search box that shows the product as the customer types | Done |
| **US-25** | Filter products | Category, availability, minimum/maximum price filters with a reset option. | Done |
| **US-26** | Sort products | Four orderings: name A to Z, name Z to A, price low to high, price high to low | Done |
| **US-19** | Administrator access | administrator login page for the admin, but no registration for security. The admin panel is planned for Sprint 3 | Done |

---

## 3. Work Delivered

### 3.1 Account access

I built one reusable component for authentication of the customer registration, customer login, and administrator login. This helped me avoid repeating the code over and over and keep the forms clean and consistent.

- **Registration.** Customer enter their name, email, password, and password confirmation. The password must contain at least eight characters, and passwords and password confirmation must match. The form also shows error messages from the backend in simple language. After success in registration the form clears and the customer is redirected to the login page.

- **Login.** Customer sign in with their email and password they registered with. The frontend sends these details to the API, and stores the returned token, then takes the customer to the product catalog. If the login process fails, an error message appears, for example, “invalid email or password” error.

- **Logout.** The customer can log out using the button in the navbar. Since the backend does not have a logout endpoint, the frontend removes the stored token and returns the customer to the home page.

- **Persistent session.** When the customer refresh the page, the application checks their stored token with the API to see if they are still signed in in the system or not.

- **Administrator login.** A separate admin login is available in the footer.it rejects any account but administrator and explains why it does this.

### 3.2 Catalog and discovery

I built the product pages to help customers find products and products details.

- **Product grid:** Each product card has an image, name, category, price, and stock status. I also added hover effects for it and a leaf placeholder for images that doesn’t to load for any reason.

- **Search.** The search results change after a 200 milliseconds break.  This helps reduce requests while customers type in the search box.

- **Filters:** the Customer can filter products by category, stock availability, and minimum or maximum price. The Reset button clears all filters which were set by customer.

- **Sorting.** Customers can sort products by name from A to Z, from Z to A, by lowest price, or by highest price.

- **Result feedback.** A loading placeholder appears while products while the page is loading, and shows a friendly message when the product is not found in the catalog.

- **Product page.** Each product has its own page which Shows the large image, category, description, price, availability, or out-of-stock notice. The add-to-cart button will be added in Sprint 2 to each product card.

### 3.3 Landing page and navigation

I created a home page with a hero section, an image, and call to actions buttons. I also added category cards so customers can open the catalog with the selected category from the home page. The home page also have a connection panel that checks if the React frontend, Django API, and PostgreSQL database are connected. This made it easier to identify connection problems during development. I also created a dark green navigation bar. This navigation bar shows which page is currently active and also displays the account name.

### 3.4 Technical foundations

I worked on the basic structure of the application which make future development easier for us.

- **API connection:** I created a small service layer to handle differences between the frontend and backend, for example categories, sorting options, and stock availability. Price and availability filters are applied within the browser.

- **Sample data:** I added a setting that lets the application use sample products and sample categories when the backend is not working. This helped me create and test the UI before the backend was ready.

- **Routing and shared state:** I created a router structure similar to "#/products/7" to navigate between pages.

- **Reusable components:** I built some shared components that are used on multiple pages such as the logo, feedback messages, product cards, loading states and connection panels. This helped to have more consistent design & also faster development.

---

## 4. Interface and Experience

I picked a green color as main color theme to make the grocery store feel clean and friendly. I picked fonts to make the interface easier to read and to give the brand its own unique style. Tailwind CSS 4 takes care of the styling. A shared theme makes sure the colors, shadows and animations are the same, throughout the application. I also used Lucide React for the icons. My goal was to make the application look the same feel simple to use and help customers find what they need without extra steps.

### 4.1 Responsive Layout

I designed the application to work on phone, tablet, and desktop computer. The layout changes depending on the screen size to make the website easy to use.

| **Screen** | **Behavior** |
| --- | --- |
| **Phone** | Two product cards per row<br>Filters are displayed in two columns above the products<br>navbar moves to another line when needed. |
| **Tablet** | Filters move into a sidebar beside the product grid<br>Forms and cards have more space |
| **Desktop** | Three cards per row<br>a sticky filter panel<br>full-width header with the account area on the right |

---

## 5. Validation and Error Handling

I added form validation with React Hook Form to check user input before sending it to the backend. Then the backend also checks the data, which provide an extra layer of protection for the system.

| **Situation** | **What the customer sees** |
| --- | --- |
| **A required field is left empty** | A short red message under that field, for example asking for the full name or email |
| **Invalid email or name** | A short red message under that field, for example, name should be between 3 to 50 characters, or invalid email pattern |
| **Password shorter than eight characters** | A message which shows the minimum length, or the password is too common contains all numbers |
| **Email already registered or wrong login** | The server's message and it is shown above the form |
| **Backend switched off or unreachable** | An error says Fresh Mart cannot be reached and to check the backend |
| **Product does not exist** | An error with a link back to the catalog |

---

## 6. Daily Progress

| **Date** | **Focus** | **Result** |
| --- | --- | --- |
| **Mon, Oct 5** | Project set-up | Created the Vite and React project<br>Installed Tailwind CSS and lucide-react<br>Added theme file and environment<br>Organized repository |
| **Tue, Oct 6** | API layer and layout | Wrote API service<br>Built header, footer and routing structure<br>Added not-found page |
| **Wed, Oct 7** | Home page, and product page | Added Hero section with image<br>Added Category cards<br>Created live connection panel<br>Created Product card, grid<br>Created Product details page<br>Added search, filters and sorting |
| **Thu, Oct 8** | Accounts | Authentication context, registration, login, logout and administrator login |
| **Fri, Oct 9** | Integration | aligned with the Django API<br>testing and polish |
| **Sat, Oct 10** | Deliver | Presented the completed work to the product owner<br>prepared the sprint report. |

---

## 7. Verification Scenarios

We also tested the main functionality in the browser with the backend to make sure the application works as intended.

| **Scenario** | **Expected outcome** |
| --- | --- |
| **Register with valid details** | Success message displays and form resets |
| **Register with mismatching passwords** | The form does not submit and displays a clear error message. |
| **Complete registration** | The customer is redirected to the login page and sees a confirmation message |
| **Log in, refresh the page** | Customer is still signed in after the refresh |
| **Search for a word that matches nothing** | Friendly empty-state message is shown |
| **Combine a category, in-stock filter and price sort** | The results match the selected filters and sorting option. |
| **Stop the backend and open the catalog** | A clear error message is shown instead of a blank page. |
| **Turn on sample-data mode** | You can see the products and the images without even connecting to the backend to test the UI. |

---

## 8. Obstacles and Decisions

**Search requests overlapping.** When users typed quickly in the search box, an older search result can appear after a newer one and replace it. I fixed this by making old requests cancellable, so only the latest search is shown on the screen.

**Broken pictures.** Some product images from the database may not load. I added a placeholder image that appears when an image fails to load which keeps the product grid clean.

**One form, three modes.** One form three modes. There are so many similarities among registration, customer login, and admin login forms. So instead of developing three forms, I developed one component with a mode switch. It saved a lot of codes and kept validation criteria same in all pages.

**Matching the real API.** The backend uses field names and sorting options than the frontend expects. The backend also does not have a logout endpoint. Of changing every page I handled these differences, in the API service and implemented logout on the browser side.

---

## 9. Sprint Review and Retrospective

### What went well

- Agreeing on the API contract with backend developer early helped the frontend connection to the backed easily.

- The connection panel on the home page made the debugging sessions easier with the backend developer.

### What to improve

- Acceptance checks were done by hand not automatically

---

## 10. Coming soon: Sprint 2

The second sprint will run from 11 to 17 October. Our goal is to include the shopping cart and its core features.

- Use React Context to create a global cart so the cart data can be accessed anywhere in the app.

- Display the number of items on cart in navbar.

- Add “Add to Cart” button to product cards and product page.

- Make sure users cannot add more items than are available in stock.

- Build a cart page that user can change quantities of items, remove items, and clear the cart.

- Show the total price and order summary and a button to continue to checkout.

- Connect the cart to the backend API and test the features.

---

## 11. Appendix

### A. Code organization

| **Location** | **Purpose** |
| --- | --- |
| **src/pages/AuthPage.jsx** | Registration, customer login and administrator login |
| **src/pages/CatalogPage.jsx** | Product grid with search, filters and sorting |
| **src/pages/ProductPage.jsx** | Single product view with availability |
| **src/components/** | Brand, ProductCard, Skeleton, Feedback and ConnectionStatus |
| **src/context/AuthContext.jsx** | Signed-in user, login, logout and session restore |
| **src/services/api.js** | Requests, token header, timeouts, error translation and API alignment |
| **src/services/mockApi.js, mockData.js** | Sample-data mode for working without the backend |

### B. Screenshots to attach

- `screenshots/home-page.png`: hero section, category cards and connection panel

- `screenshots/register-page.png`: registration form, including a validation message

- `screenshots/login-page.png`: customer login

- `screenshots/catalog-page.png`: product grid with filters applied

- `screenshots/product-page.png`: product details with stock information

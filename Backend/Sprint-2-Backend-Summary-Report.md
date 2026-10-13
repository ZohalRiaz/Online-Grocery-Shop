# Sprint 2 - Backend Work Summary

**Project:** FreshMart - Online Grocery Shop  
**Developer:** Salma Rahman (Backend)  
**Sprint dates:** October 11–13, 2026  
**Sprint goal:** Develop the shopping cart backend and connect it to the frontend.

This is a summary of the backend work I completed in Sprint 2, based on the cart tasks in our backlog. In Sprint 1, I had already added the sample products to the database, so this sprint was mainly about building the cart features on top of that data and making sure the frontend used the real backend.

---

## What I Got Done

### Cart Database Tables

I added two new tables to the database:

- `store_cart` - stores one cart for each customer. It has a `OneToOneField` linked to the user, and the cart is created automatically when the customer first adds a product.
- `store_cartitem` - stores the products in a cart, including each product's quantity. It links to both the cart and the product. I also added `unique_together = ("cart", "product")`, so the same product cannot be saved as two separate rows in one cart. If the customer adds it again, the quantity increases instead.

---

### Cart Endpoints (US-09 to US-14)

I created five API routes for the shopping cart. All of them require the customer to be logged in with a valid token. Each customer can only access their own cart, so they cannot view or change another customer's cart.

**`POST /api/cart/add/` (US-09 - Add Product to Cart)**

- Takes `product_id` and `quantity` (the default quantity is 1).
- Checks that the product exists and is active.
- Uses `select_for_update()` to lock the product row while checking stock, helping prevent two requests from buying the last item at the same time.
- Increases the quantity if the product is already in the cart.
- Rejects the request if the requested quantity is greater than the available stock.
- Returns the updated cart.

**`GET /api/cart/` (US-10 - View Shopping Cart, US-14 - View Cart Total)**

- Returns the logged-in customer's cart and its items.
- Each item includes the product ID, name, price, unit, image URL, current stock, quantity, and subtotal.
- The cart also returns `total_items` (the sum of the quantities) and `total_price` (the sum of the subtotals).

**`PATCH /api/cart/items/<id>/` (US-11 - Change Quantity)**

- Accepts a new quantity between 1 and 99.
- Rejects the request if the quantity is greater than the available stock.
- Returns the updated cart with the recalculated subtotals and total.

**`DELETE /api/cart/items/<id>/remove/` (US-12 - Remove Product)**

- Removes one item from the customer's cart.
- Returns the updated cart.

**`DELETE /api/cart/clear/` (US-13 - Clear Cart)**

- Removes all items from the customer's cart.
- Returns an empty cart.

For updating or removing an item, I use the `CartItem` ID rather than the product ID. The backend also checks that the item belongs to the logged-in customer's cart.

---

### Cart Serializers

I added serializers in `serializers.py` to prepare the cart data for the frontend:

- `CartItemSerializer` returns each item with its product information in a flat format. It also calculates the subtotal and returns the image URL, using an uploaded image first when available.
- `CartSerializer` returns the cart items, `total_items`, and `total_price`. The backend calculates these totals so the frontend does not need to work them out itself.
- `AddToCartSerializer` and `UpdateCartItemSerializer` validate the data sent by the frontend. They check that the product exists and is active, and that the quantity is between 1 and 99.

Keeping the calculations on the backend helps the frontend display consistent cart totals as the customer changes their cart.

---

### Product Image Support

In Sprint 1, I had moved the sample product images into the project, but they were not loading correctly on the website. In Sprint 2, I fixed that issue and added support for uploaded product images through Django.

I made these changes:

- **Model:** Added an `ImageField` to the `Product` model to store uploaded images in the `products/` folder.
- **Settings:** Added `MEDIA_URL = "/media/"` and `MEDIA_ROOT = BASE_DIR / "media"` in `settings.py`.
- **URLs:** Configured Django to serve media files during development.
- **Serializer:** Updated `image_url` so the API returns the uploaded image URL when available. If there is no uploaded image, it uses the existing external image URL, or an empty string if neither is available.

I also updated the `seed_data` command so it copies the images from `store/seed_images/` into `media/products/` when setting up the sample data. This makes it easier to set up the project on another computer.

---

### Connecting with the Frontend

First, the cart was stored in the browser's `localStorage`, and its data was only sent to the API at checkout. I changed the setup so the cart is stored in the backend database and the frontend gets the latest cart data from the API.

To connect both sides, I:

- Updated `CartContext.jsx` so adding, updating, removing, and clearing items call the cart API and use the response from the backend.
- Updated `CartPage.jsx` to use the fields returned by the API, such as `item.product_id`, `item.name`, `cart.total_items`, and `cart.total_price`.
- Changed the add-to-cart function to send `product.id` rather than the whole product object.
- Removed the old `cartLogic.js` and mock files, so the frontend no longer relies on a separate local cart implementation.

---

## My Sprint 2 Backlog Tasks

| User story (Product Backlog ID) | My backend tasks | Status |
|---|---|---|
| US-09 Add Product to Cart | Cart models, add endpoint, stock check, quantity merging, and tests | Done |
| US-10 View Shopping Cart | Return the logged-in customer's cart and test the endpoint | Done |
| US-11 Change Quantity | Update the quantity and validate stock and quantity limits | Done |
| US-12 Remove Product | Remove a cart item and check ownership | Done |
| US-13 Clear Cart | Remove all cart items and return an empty cart | Done |
| US-14 View Cart Total | Calculate item subtotals and the cart total on the backend | Done |

---

## Testing

I tested the cart in two ways.

First, I added Django tests for the cart endpoints. These covered adding a product, adding the same product twice and checking that the quantity increases, rejecting quantities above the available stock, changing a quantity, removing an item, clearing the cart, and making sure one customer cannot access another customer's cart.

Second, I tested the cart end-to-end by running both the Django backend and the React frontend on my machine.

I also checked that all 36 product images load from `/media/products/`. i confirmed that the five out-of-stock products—Watermelon, Bagels, Mixed Nuts, Ground Coffee, and Laundry Detergent—show as out of stock on the website and cannot be added to the cart.
The full list of test cases and bugs is in the **Test Results — Sprint 2** document.

---

## Problems I Ran Into

| Issue | Details | How I fixed it |
|---|---|---|
| Serializers referred to models that did not exist yet | Django showed `NameError: name 'CartItem' is not defined` because the serializers imported `CartItem` before I had added the cart models. | Added the `Cart` and `CartItem` models, updated the imports in `serializers.py` and `views.py`, and ran `makemigrations` and `migrate`. The server then started correctly. |
| Cart values were `undefined` on the frontend | The old frontend expected fields such as `cart.count`, `cart.total`, and `item.product.name`, but the backend returned `cart.total_items`, `cart.total_price`, and fields such as `item.name`. | Updated `CartContext.jsx` and `CartPage.jsx` to match the API response, changed update and remove requests to use the cart item ID, and removed the old cart logic and mock files. |
| Product images did not load after seeding | This was an issue I had noticed in Sprint 1. Some image files had capital letters in their names, such as `Apple.jpg` and `Tomato.jpg`, while the seed command expected lowercase names such as `apple.jpg` and `tomato.jpg`. PowerShell did not rename the files when I changed only the letter case. | Renamed the files using a temporary filename, ran `python manage.py seed_data` again, and checked that all 36 images loaded from `/media/products/`. |

What I learned this sprint is that Django models need to exist before serializers and views can import them. I also learned that when the backend response changes, the frontend needs to be updated to use the same field names; otherwise, the page may show blank values without an obvious error. Finally, I learned to be careful with filenames and letter case when code depends on exact file paths.

---

## Next Sprint Plans

In Sprint 3, I plan to work on checkout and orders. On the backend, I will validate the contact, shipping, delivery, and payment information from the checkout form. Implement the Place Order API (saving the order, reducing stock, clearing the cart, preventing duplicate submissions); and build the orders API so customers can view their own order history. I will also work with Faezah to connect the checkout page and order pages to these new endpoints

# Test Results — Sprint 2

**Project:** FreshMart — Online Grocery Shop  
**Testers:** Salma Rahman (Backend Developer), Faezah Ahmadi (Frontend Developer)  
**Sprint:** Sprint 2 (October 11–13, 2026)  
**Environment:** Local development server (Django backend + React frontend), database on Supabase (PostgreSQL)

During Sprint 2, I (Salma Rahman) tested the shopping cart functionality and product image support. I worked on backend API behavior and data validation, while I (Faezah Ahmadi) worked on the frontend using Vitest, react testing library, and jsdom. I (faezah ahmadi) also tested the functionality of cart using automated testing and manual testing.

---

## Test Summary

| Metric | Value |
|---|---|
| Automated Tests Passed | 24 |
| Automated Tests Failed | 0 |
| Manual Test Cases | Not separately counted |
| Critical Bugs | 0 |
| Major Bugs | 0 |
| Minor Bugs | 1 |
| Open Bugs | 1 |
### Test for frontend
| Measure        | Value |
|----------------|-------|
| Automated tests | 5     |
| Manual checks   | 7     |


**Note:** The automated test suite completed successfully when run with `python manage.py test store --keepdb` for the backend and `npm test` for frontend. The database cleanup issue described below remains open and is planned for Sprint 3.

---

## Test Execution Details

### TC-001: View Shopping Cart (US-10)

**Status:** PASSED

**Summary:** The frontend was integrated with the backend cart API. The cart endpoint returns the logged-in customer's cart and its current items.

### TC-002: Add an Available Product to Cart (US-09)

**Status:** PASSED

**Summary:** The backend supports adding an available product to the customer's cart. The cart API returns the updated cart after the request.

### TC-003: Increase Quantity of an Existing Cart Item (US-09, US-11)

**Status:** PASSED

**Summary:** When a product is already in the cart, adding it again increases its quantity rather than creating a duplicate cart item.

### TC-004: Update Cart Item Quantity (US-11)

**Status:** PASSED

**Summary:** The backend supports updating an item's quantity. The quantity must be between 1 and 99 and cannot exceed available stock.

### TC-005: Remove a Cart Item (US-12)

**Status:** PASSED

**Summary:** The backend provides an endpoint to remove an item from the logged-in customer's cart and return the updated cart.

### TC-006: Clear Shopping Cart (US-13)

**Status:** PASSED

**Summary:** The backend provides an endpoint to remove all items from the customer's cart and return the empty cart.

### TC-007: Calculate Cart Subtotals and Total (US-10, US-14)

**Status:** PASSED

**Summary:** The cart response includes item subtotals, total item quantity, and total price. These values are calculated by the backend.

### TC-008: Reject an Out-of-Stock Product (US-09)

**Status:** PASSED

**Summary:** Out-of-stock products cannot be added to the cart. The reported out-of-stock products included Watermelon, Bagels, Mixed Nuts, Ground Coffee, and Laundry Detergent.

### TC-009: Prevent Cart Quantities from Exceeding Available Stock (US-09, US-11)

**Status:** PASSED

**Summary:** The backend checks available stock when adding a product or updating its quantity and rejects requests that exceed the available amount.

### TC-010: Display Product Images (Product Catalog)

**Status:** PASSED

**Summary:** Product image support was added, and all 36 product images were reported to load from the backend's `/media/products/` directory during development.

### TC-011: Return Updated Cart Data to the Frontend

**Status:** PASSED

**Summary:** The frontend and backend cart integration was tested together. The API provides cart items, product information, quantities, subtotals, and the total price for the frontend to display.

---

## Automated API Testing

Django automated tests were run using the following command:

```powershell
python manage.py test store --keepdb
```

**Result:** 24 tests passed.

The test run completed successfully, and Django reported no system-check issues. A warning about the missing static-files directory appeared, but it did not prevent the tests from passing.

The `--keepdb` option reused the existing test database and avoided the database cleanup error encountered during the earlier test run.

---

## Security and Validation Checks

- Shopping cart endpoints require authentication.
- Customers can access only their own cart and cart items.
- Inactive products cannot be added to the cart.
- Out-of-stock products cannot be added.
- Cart quantities are validated against the allowed range and available stock.
- The backend calculates item subtotals and the total cart price.
- Product image URLs are included in the API response when available.

---

## Bugs Found

### BUG-001: Database Test Cleanup Error

**Severity:** Minor  
**Priority:** Medium  
**Status:** Open (planned for Sprint 3)  
**Found by:** Salma Rahman

**Description:**

During Django automated testing, the test cases passed, but the test database encountered an error during cleanup because another database connection was still using it.

**Impact:**

The issue affects test database cleanup rather than the successful execution of the test cases. Running the tests with `python manage.py test store --keepdb` completed successfully, with all 24 tests passing.

**Plan:**

Investigate the database connection and cleanup issue in Sprint 3 and implement a proper fix so the test database can be cleaned up without errors.

---

## Bugs Fixed in Sprint 2 (Carried From Sprint 1)

### BUG-001 (from Sprint 1): Mistyped email domain was accepted
**Status:** FIXED in Sprint 2
**Fix:** Added a check for common domain typos in `RegisterSerializer`. Now registering with `name@gmal.com` returns: *"Did you mean name@gmail.com? Please check your email."*

### BUG-002 (from Sprint 1): Name length was not checked
**Status:** FIXED in Sprint 2
**Fix:** Added `min_length=3` and `max_length=50` to the `full_name` field in `RegisterSerializer`, matching the frontend validation.
### BUG-003: Out-of-Stock Add to Cart Notification
**Status:** Fixed 
**Resolved by:** Faezah Ahmadi in Sprint 2

**Fix:** Updated the Add to Cart functionality to display a red toast notification when a user clicks the Add to Cart button for an out-of-stock product. The button remains visually disabled and keyboard-accessible, and the product is not added to the cart. The same behavior is implemented on both product cards and product detail pages. Successful additions continue to display the existing green confirmation toast.
# Frontend Testing

Sprint two test report

Tested by: Faezah Ahmadi, front end developer

| Item | Detail |
|------|--------|
| Sprint | Sprint 2 of 4, October 11 to October 14, 2026 |
| Sprint theme | Shopping cart |
| Test tools | Vitest, React Testing Library, jsdom |
| Test file | tests/sprint2.test.jsx |
| Automated tests | 5 |
| Manual checks | 7 |

---

## Purpose and Scope

This report explains how the Sprint 2 frontend was tested. The cart page gets all its information from the cart state. The automated tests provide it with a pre-set cart and then check what the customer sees and what happens when buttons are clicked. Five automated tests are used for the cart page and a manual checklist is used to check adding items from the catalog and the interaction with the backend.

### Covered by the tests
- The message that appears when the cart is empty.
- The list of items, the subtotal in the basket, and the link to checkout.
- The buttons that change the quantity, which stop at the stock limit and at one.
- Changing the quantity from the cart page.
- Removing everything from the cart only after the customer confirms.

### Not covered by the automated tests
- The visual layout, which is checked visually on phone, tablet and desktop screen sizes.

---

## Test environment

| Item | Detail |
|------|--------|
| Test runner | Vitest |
| Screen testing | React Testing Library with jsdom |
| Node.js version | v24.13.0 |
| Command | npm test |

---

## Automated Test Cases

| ID | Area | What is tested | Expected result | Type | Result |
|----|------|----------------|-----------------|------|--------|
| S2-T1 | Empty cart | Cart page opened with no items | Message "Your cart is empty." is shown | Screen | Pass |
| S2-T2 | Items and totals | Cart page opened with two items | Both products are listed, the basket subtotal is correct and Proceed to checkout links to #/checkout | Screen | Pass |
| S2-T3 | Stock limits | An item at its stock limit and an item with quantity one | Plus is disabled at the limit, minus is disabled at one, plus stays enabled when stock remains | Screen | Pass |
| S2-T4 | Change quantity | Plus pressed on an item with quantity two | The cart is asked to update that item to quantity three | Screen | Pass |
| S2-T5 | Clear cart | Clear cart pressed, then confirmed | The confirmation question appears first; the cart is cleared once, and only after Confirm | Screen | Pass |

---

## Manual Verification Checklist

| Scenario | Expected outcome |
|----------|------------------|
| Add a product while signed out | Login page opens instead of an error |
| Add a product while signed in | Toast appears and the header count increases |
| Enter a quantity above the stock | A message explains the allowed range; nothing is added |
| Press plus until stock runs out | Plus becomes disabled on that row |
| Remove one of three items | Only that row disappears and the total drops |
| Clear the cart and confirm | Empty state appears and the header count returns to zero |
| Sign out and sign in as someone else | The earlier cart is not visible |
| Switch the backend off on the cart page | Error banner with a retry button |
## A glance at automated tests for front end
```
describe("Sprint 2: cart page", () => {
  beforeEach(() => setCart([]));

  it("shows a friendly message when the cart is empty", () => {
    render(<CartPage />);
    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });

  it("lists the items with their totals and links to checkout", () => {
    setCart([apple, milk]);
    render(<CartPage />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Milk")).toBeInTheDocument();
    expect(screen.getByText("$5.00")).toBeInTheDocument(); // basket subtotal
    expect(screen.getByRole("link", { name: /proceed to checkout/i }))
      .toHaveAttribute("href", "#/checkout");
  });
});
```
## Recommendations for Sprint 3

- Investigate and fix the database test cleanup issue.
- Test checkout and order creation.
- Verify that stock is updated correctly after a successful order.
- Verify that the cart is cleared only after an order is successfully created.
- Test order history and access to individual orders.
- Add further automated tests for cart operations and stock validation.
- Test error handling for invalid requests and unauthenticated users.

---

## Conclusion

Sprint 2 added shopping cart functionality, stock validation, product image support, and frontend/backend cart integration.

The Django automated test suite reported 24 passing tests when run with `python manage.py test store --keepdb` for the backend and `npm test` for frontend. In addition, the Vitest, and react testing library reported 5 automated tests as successfully passed and  The reported integration checks also confirmed that the product images loaded and that out-of-stock products could not be added to the cart.

One minor database cleanup issue remains open and will be investigated and corrected in Sprint 3. The workaround allowed the automated test suite to complete successfully, but the underlying cleanup issue still needs to be resolved.

**Overall Quality:** Good  
**Ready for Review:** Yes

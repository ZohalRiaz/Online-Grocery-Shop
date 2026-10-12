# Test Results - Sprint 1

**Project:** FreshMart - Online Grocery Shop  
**Testers:** Salma Rahman (Backend) and Faezah (Frontend)  
**Sprint:** Sprint 1 (October 5-10, 2026)  
**Environment:** Local development server (Django backend + React frontend), database on Supabase (PostgreSQL)

We both tested Sprint 1. I (Salma) tested the API and the data, and Faezah checked the screens and messages. Most test cases were done together on the website, with the frontend connected to the backend.

---

## Test Summary

| Metric | Value |
|--------|-------|
| Total Test Cases | 13 |
| Passed | 12 |
| Failed | 1 |
| Pass Rate | 92% |
| Critical Bugs | 0 |
| Major Bugs | 0 |
| Minor Bugs | 2 |

---

## Test Execution Details

### TC-001: Register with Valid Information (US-01)
**Status:** PASSED  
**Summary:** The account was created and the customer was signed in right away.

### TC-002: Register with a Duplicate Email (US-01)
**Status:** PASSED  
**Summary:** The system rejected the email and showed "An account with this email already exists."

### TC-003: Register with a Weak Password (US-01)
**Status:** PASSED  
**Summary:** A password like `12345678` (too common, only numbers) was rejected with a clear message.

### TC-004: Register with a Mistyped Email (US-01)
**Status:** FAILED  
**Issue:** An email like `name@gmal.com` (a typo of gmail) was accepted and the account was created. See BUG-001.

### TC-005: Login with Correct Details (US-02)
**Status:** PASSED  
**Summary:** The customer was signed in and the token was saved in the browser.

### TC-006: Login with a Wrong Password (US-02)
**Status:** PASSED  
**Summary:** The login was rejected and the frontend showed "Incorrect email or password."

### TC-007: Logout and Protected Route (US-03)
**Status:** PASSED  
**Summary:** After logout, the token was removed and the user went back to the home page. A request to `/api/auth/me/` without a token returned 401.

### TC-008: Browse the Product Catalog (US-04)
**Status:** PASSED  
**Summary:** The products were shown with name, price, image and availability. Hidden products were not shown.

### TC-009: Product Details (US-23)
**Status:** PASSED  
**Summary:** Clicking a product opened its full details. A hidden or missing product returned 404.

### TC-010: Search by Name or Keyword (US-24)
**Status:** PASSED  
**Summary:** Searching "app" returned only Apple. Matching works on the name and the description.

### TC-011: Filter by Category and Availability (US-25)
**Status:** PASSED  
**Summary:** The category filter returned only the products of that category. The available / out of stock filter works in the frontend.

### TC-012: Sort Products (US-26)
**Status:** PASSED  
**Summary:** Sorting by price low to high, high to low and by name gave the right order.

### TC-013: No Results Message (US-24, US-25)
**Status:** PASSED  
**Summary:** When nothing matched, a friendly message was shown instead of an empty page.

---

## Bugs Found

### BUG-001: Mistyped Email Domain Is Accepted
**Severity:** Minor  
**Priority:** Medium  
**Status:** Open (planned for Sprint 2)  
**Found by:** Salma Rahman and Faezah

**Description:**  
The registration accepted `name@gmal.com`, because the email only has to have a valid format. The customer could then register with an email that cannot receive anything.

**Plan:**  
Add a check for common typos of popular domains (for example `gmal.com`, `gmial.com`) and ask the customer "Did you mean gmail.com?" before the account is created. This needs a change in the backend and a message in the frontend, so we will do it together.

---

### BUG-002: Name Length Is Not Checked
**Severity:** Minor  
**Priority:** Low  
**Status:** Open (planned for Sprint 2)  
**Found by:** Salma Rahman

**Description:**  
Our requirement REG-02 says the name must be between 3 and 50 characters, but the backend does not check this yet.

**Plan:**  
Add a minimum and a maximum length for the full name in the registration.

---

## API Testing (Automated Tests)

I wrote automated tests with Django (`store/tests.py`, run with `python manage.py test`). They use a small set of sample categories and products and check the answer of every endpoint.

| Endpoint | What the tests check |
|----------|----------------------|
| `GET /api/health/` | The backend and the database answer "ok" |
| `POST /api/auth/register/` | A valid registration works; a duplicate email and a weak password are rejected |
| `POST /api/auth/login/` | A correct login returns a token; a wrong password is rejected |
| `GET /api/auth/me/` | Without a token it returns 401; with a token it returns the user |
| `GET /api/categories/` | The categories are returned |
| `GET /api/products/` | Hidden products are not returned; search, category filter and sort work |
| `GET /api/products/<id>/` | A hidden product returns 404 |

Example of the search, filter and sort test:

```python
def test_search_filter_and_sort(self):
    response = self.client.get("/api/products/?search=app")
    self.assertEqual([item["name"] for item in response.data], ["Apple"])

    response = self.client.get("/api/products/?category=dairy-eggs")
    self.assertEqual([item["name"] for item in response.data], ["Milk"])

    response = self.client.get("/api/products/?sort=price_desc")
    self.assertEqual([item["name"] for item in response.data], ["Milk", "Apple"])
```

---

## Security Checks

- Passwords are saved hashed, and weak passwords are rejected.
- A protected route does not work without a token (401).
- Hidden products cannot be opened by customers (404).
- No password is written in the code; the database setting is in the `.env` file.

---

## Recommendations for Sprint 2

- Fix BUG-001 (email typo) and BUG-002 (name length).
- Add more tests for the product list, like an empty result and a wrong category.
- Add a Z-A sort option in the backend.
- Write the test cases for the cart in the same way.

---

## Conclusion

Sprint 1 testing went well. 12 of 13 test cases passed, and we found two minor input validation problems, which we plan to fix in Sprint 2. Registration, login, logout, the catalog, search, filter and sort are working and were shown in the Sprint 1 Review.

**Overall Quality:** Good  
**Ready for Review:** Yes
